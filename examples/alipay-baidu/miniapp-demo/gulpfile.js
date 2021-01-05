const gulp = require('gulp')
const rename = require('gulp-rename')
const ts = require('gulp-typescript')
const eslint = require('gulp-eslint')
const stylelint = require('gulp-stylelint')
const gulpTslint = require('gulp-tslint')
const tslint = require('tslint')
const prettier = require('gulp-prettier')
const gulpIf = require('gulp-if')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const watch = require('gulp-watch')
const del = require('del')
const replace = require('gulp-replace')
const typedoc = require('gulp-typedoc')
const preprocess = require('gulp-preprocess')
const fs = require('fs')
const { auth } = require('yuque-auth')
const through = require('through2')
const { spawn } = require('child_process')
const lionSdk = require('@alife/lion-sdk')
const path = require('path')
const program = require('commander')
const qrcodeConfig = require('./qrcode.config')

sass.compiler = require('node-sass')

const tsProject = ts.createProject('tsconfig.json')
const babelOptions = require('./.babelrc')
const appConfig = require('./src/app.json')

const { pages } = appConfig

const { OUTPUT_ENV } = process.env

const PATHS = {
  dev: {
    src: 'src',
  },
  scss: {
    src: ['src/**/*.scss', '!src/node_modules/**', '!src/styles/abstracts/**'],
    ext: '.acss',
    dest: 'dist/.',
  },
  ts: {
    src: ['src/**/*.ts'],
    dest: 'dist/.',
  },
}

program
  .version('0.1.0')
  .option('-p, --path [path]', 'upload file path or folder') // 用于上传文件
  .option('-r, --root [root]', 'server file path') // 上传到远端的文件基础路径
  .parse(process.argv)

gulp.task('scss', () => {
  return gulp
    .src(PATHS.scss.src)
    .pipe(replace(/@b(\s*)\(/g, '@include b('))
    .pipe(replace(/@e(\s*)\(/g, '@include e('))
    .pipe(replace(/@m(\s*)\(/g, '@include m('))
    .pipe(replace(/@w(\s*)\(/g, '@include w('))
    .pipe(replace(/@p(\s*)\(/g, '@include p('))
    .pipe(
      sass({
        outputStyle: 'compact',
      }).on('error', sass.logError),
    )
    .pipe(
      rename((route) => {
        const temp = route
        temp.extname = PATHS.scss.ext
        return temp
      }),
    )
    .pipe(gulp.dest(PATHS.scss.dest))
})

gulp.task('ts', () => {
  const tsResult = gulp.src(PATHS.ts.src).pipe(tsProject())

  return tsResult.js.pipe(babel(babelOptions)).pipe(gulp.dest(PATHS.ts.dest))
})

// src目录不需要编译的文件直接复制到dist
gulp.task('clean:dist', () => {
  return del(['dist/**/*', '!dist/.gitkeep', 'docs/**/*', 'yuque-docs']) // 注意：del要求必须写成dist/**/* 而不是dist/**,后者不会保留.gitkeep文件
})

gulp.task('copy', async () => {
  return Promise.all([
    new Promise((resolve) => {
      gulp
        .src(['src/**/*.js', '!src/node_modules/**/*.js'])
        .pipe(preprocess({ extension: 'js' }))
        .pipe(gulp.dest('dist'))
        .on('end', resolve)
    }),
    // 单独放的原因是，与js文件放一起时，处理会出错
    new Promise((resolve) => {
      gulp
        .src(['src/**/SUMMARY.md'])
        .pipe(preprocess({ extension: 'js' }))
        .pipe(gulp.dest('dist'))
        .on('end', resolve)
    }),
    new Promise((resolve) => {
      gulp
        .src([
          'src/**',
          '!**/*.ts',
          '!**/*.scss',
          '!src/**/*.js',
          '!src/**/**/SUMMARY.md', // 大小写敏感
          '!src/**/**/summary.md',
        ])
        .pipe(gulp.dest('dist'))
        .on('end', resolve)
    }),
    new Promise((resolve) => {
      gulp
        .src(['src/node_modules/**/*'])
        .pipe(gulp.dest('dist/node_modules'))
        .on('end', resolve)
    }),
  ])
})

// check if ESLint has run the fix
function isFixed(file) {
  return file.eslint && file.eslint.fixed
}

gulp.task('eslint', () => {
  return gulp
    .src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('eslint:fix', () => {
  return gulp
    .src(['src/**/*.js'])
    .pipe(
      eslint({
        fix: true,
      }),
    )
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('src/.')))
    .pipe(eslint.failAfterError())
})
gulp.task('tslint', () => {
  const _program = tslint.Linter.createProgram('./tsconfig.json')
  return gulp
    .src(['src/**/*.ts', '!src/node_modules/**'])
    .pipe(
      gulpTslint({
        configuration: './tslint.json',
        formatter: 'verbose',
        program: _program,
      }),
    )
    .pipe(
      gulpTslint.report({
        allowWarnings: true,
      }),
    )
})
gulp.task('tslint:fix', () => {
  const _program = tslint.Linter.createProgram('./tsconfig.json')
  return gulp
    .src(['src/**/*.ts', '!src/node_modules/**'])
    .pipe(
      gulpTslint({
        fix: true,
        configuration: './tslint.json',
        formatter: 'verbose',
        program: _program,
      }),
    )
    .pipe(
      gulpTslint.report({
        allowWarnings: true,
      }),
    )
})

gulp.task('stylelint', () => {
  return gulp.src('src/**/*.[s]css').pipe(
    stylelint({
      failAfterError: true,
      reporters: [{ formatter: 'string', console: true }],
    }),
  )
})
gulp.task('stylelint:fix', () => {
  return gulp
    .src('src/**/*.[s]css')
    .pipe(
      stylelint({
        fix: true,
        failAfterError: true,
        reporters: [{ formatter: 'string', console: true }],
      }),
    )
    .pipe(gulp.dest('src/.'))
})

gulp.task('jsonlint', () => {
  return gulp
    .src(['src/**/*.json', '!src/node_modules/**'])
    .pipe(prettier.check())
})

gulp.task('format:files', () => {
  return gulp
    .src(['files/**/*'])
    .pipe(prettier())
    .pipe(gulp.dest('files/'))
})

gulp.task('jsonlint:fix', () => {
  return gulp
    .src(['src/**/*.json', '!src/node_modules/**'])
    .pipe(prettier())
    .pipe(gulp.dest('src/.'))
})

// 删除dist目录下未用到的文件和app.json中不需要的路径
gulp.task('deleteUnusedFiles', async () => {
  const toDelete = []
  if (OUTPUT_ENV === 'inner') {
    appConfig.pages = pages.filter((item) => {
      if (item.indexOf('__inner') === -1) {
        const temp = item.replace('/index', '__inner/index')
        if (pages.includes(temp)) {
          // 删掉对应的文件和app.json里的内容
          const route = `./dist/${item.replace('/index', '')}`
          toDelete.push(route)
          return false
        }
      }
      return true
    })
  } else {
    appConfig.pages = pages.filter((item) => {
      if (item.includes('__inner')) {
        const route = `./dist/${item.replace('/index', '')}`
        toDelete.push(route)
        return false
      }
      return true
    })
  }
  fs.writeFileSync('./dist/app.json', JSON.stringify(appConfig))
  return del(toDelete)
})

gulp.task('lint', gulp.parallel(['eslint', 'tslint', 'stylelint', 'jsonlint']))
gulp.task(
  'lint:fix',
  gulp.parallel(['jsonlint:fix', 'eslint:fix', 'tslint:fix', 'stylelint:fix']),
)

gulp.task('watch', () => {
  watch(PATHS.ts.src, { ignoreInitial: true }, gulp.parallel(['tslint', 'ts']))
  watch(
    PATHS.scss.src,
    { ignoreInitial: false },
    gulp.parallel(['stylelint', 'scss']),
  )
  watch(['src/**/*.js'], { ignoreInitial: true }, gulp.parallel(['eslint']))
  watch(
    ['src/**/*.json', '!src/node_modules/**'],
    { ignoreInitial: true },
    gulp.parallel(['jsonlint']),
  )
  watch(['src/image/**/*'], {
    base: 'src',
    ignoreInitial: false,
  }).pipe(gulp.dest('dist'))
  watch(['src/**', '!src/**/*.ts', '!src/**/*.scss', '!src/**/*.png'], {
    base: 'src',
    ignoreInitial: false,
  })
    .pipe(
      preprocess({
        extension: 'js',
      }),
    )
    .pipe(gulp.dest('dist'))
})
gulp.task('generateDocs', () => {
  let destDir = ''
  if (OUTPUT_ENV === 'inner') {
    destDir = 'docs/'
  } else {
    destDir = 'docs/'
  }
  const files = ['dist/pages/framework/**/*.md']
  return new Promise((resolve) => gulp
    .src(files)
    .pipe(
      rename((route) => {
        const reg = /(?:[/|\\])(\S+)$/
        const matches = reg.exec(route.dirname)
        // 如果是summary直接复制
        if (!matches) {
          return route
        }
        const name = matches[1]
        const temp = route
        temp.dirname = route.dirname.replace(name, '')
        temp.basename = name.replace('__inner', '')
        return temp
      }),
    )
    .pipe(gulp.dest(destDir))
    .on('end', resolve),)
})
gulp.task('docsForYuQue', () => {
  const yuqueInnerRoot = 'https://yuque.antfin-inc.com/amap-miniapp-doc-inner/'
  const yuqueOuterRoot = 'https://www.yuque.com/amap-miniapp-doc/'
  const root = OUTPUT_ENV === 'inner' ? yuqueInnerRoot : yuqueOuterRoot
  return gulp
    .src(['docs/**/*.md', 'files/**/*.md'])
    .pipe(
      replace(/]\((?!http)(.+?)\)/gi, (match, p1) => {
        let temp = p1.replace('../', root).replace('./', '/')
        if (!/^(http|\/|#)/gi.test(temp)) {
          temp = `/${temp}`
        }
        temp = `](${temp})`
        return temp
      }),
    )
    .pipe(gulp.dest('yuque-docs'))
})

gulp.task('dev', gulp.series(['clean:dist', 'tslint', 'ts', 'watch']))

gulp.task(
  'build',
  gulp.series([
    'lint',
    'clean:dist',
    'copy',
    'scss',
    'ts',
    'deleteUnusedFiles',
    'generateDocs',
    'docsForYuQue',
  ]),
)

gulp.task('typedoc', () => {
  return tsProject.src().pipe(
    typedoc({
      out: 'docs',
      tsconfig: 'tsconfig.json',
    }),
  )
})

// 预留语雀接口

gulp.task('authYuQue', async () => {
  const request = require('request')
  const authPass = require('./.authPass')
  if (!authPass) {
    console.log('please create file .authPass and set config information')
    return
  }
  auth({
    // clientId 和 clientSevret在 oauth 应用中可查到
    clientId: authPass.clientId,
    clientSecret: authPass.clientSecret,
    scope: authPass.scope,
    host: authPass.host,
  })
    .then((res) => {
      request(
        {
          method: 'GET',
          // 获取团队知识库信息
          // uri: 'https://yuque.antfin-inc.com/api/v2/groups/amap-miniapp-doc/repos',
          // 获取组件内知识库的文档列表
          uri:
            'https://yuque.antfin-inc.com/api/v2/repos/amap-miniapp-doc/component/component',
          headers: {
            'User-Agent': 'jingxue',
            'Content-Type': 'application/json',
          },
          'X-Auth-Token': res.access_token,
          data: {
            type: 'all',
          },
        },
        (error, response, body) => {
          if (!error && response.statusCode === 200) {
            console.log(body)
          } else {
            console.log(`出错了 ${error}`)
            console.log(body)
          }
        },
      )
      console.log('get auth', res)
    })
    .catch((err) => {
      console.log('error happened', err.stack)
    })
})
// 获取地址和二维码里名字的映射
const mapPathAndId = async (glob) => {
  const pathMapId = {}
  return new Promise((resolve) => {
    return gulp
      .src(glob)
      .pipe(
        through.obj((file, encode, next) => {
          const neededName = file.dirname.replace(file._base, '')
          const reg = /]\(https:\/\/cache\.amap\.com\/ecology\/tool\/miniapp\/(.+?)\.png\)/gi
          const res = reg.exec(file.contents.toString())
          if (res && res[1]) {
            pathMapId[`pages/framework${neededName}/index`] = res[1]
          }
          next()
        }),
      )
      .on('finish', () => {
        resolve(pathMapId)
      })
  })
}
gulp.task('updateQrcode', async () => {
  const res = await mapPathAndId(['src/pages/framework/**/*.md'])
  for (const route in res) {
    // const path = 'pages/framework/API/startContinuousLocation__inner/index' // test
    if (Object.prototype.hasOwnProperty.call(res, route)) {
      const name = res[route]
      const url = `${qrcodeConfig.root}?appId=${
        route.indexOf('__inner') === -1
          ? qrcodeConfig.appId
          : qrcodeConfig.appId__inner
      }&page=${route}`
      const cmd = spawn(
        'npm',
        ['run', 'qrcode', '--', '-u', `${url}`, '-n', name, '-f', 'true'],
        { stdio: 'inherit' },
      )
      cmd.on('close', (code) => {
        if (code) {
          console.log(`my-task exited with code ${code}`)
        }
      })
    }
  }
})

async function uploadFile(originPath, localFile) {
  const remoteRoot = 'https://cache.amap.com/ecology/tool'
  return new Promise((resolve, reject) => {
    lionSdk.uploadFile(originPath, localFile, (data) => {
      if (data.message === 'success') {
        console.log('上传成功')
        console.log(`地址：${remoteRoot}/${originPath}`)
        resolve()
      } else {
        reject()
      }
    })
  })
}

/* 查找目录下的所有文件 */
function findSync(startPath) {
  const result = []

  function finder(folder) {
    const files = fs.readdirSync(folder)
    files.forEach((val) => {
      const fPath = path.join(folder, val)
      const stats = fs.statSync(fPath)
      if (stats.isDirectory()) {
        finder(fPath)
      }
      if (stats.isFile()) {
        result.push(fPath)
      }
    })
  }

  finder(startPath)
  return result
}

gulp.task('uploadFiles', async () => {
  const pkg = require('./package')
  let generatedPath = `miniapp/${pkg.name}/h5`
  let localFolder = path.resolve('./src/pages/framework/component/webView/h5')
  if (program.path) {
    localFolder = path.resolve(program.path)
  }
  if (program.root) {
    generatedPath = `miniapp/${pkg.name}/${program.root}`
  }
  const pathArr = findSync(localFolder)
  pathArr.forEach((localFilePath) => {
    const remotePath = `${generatedPath}${localFilePath.replace(
      localFolder,
      '',
    )}`
    uploadFile(remotePath, localFilePath)
  })
})
