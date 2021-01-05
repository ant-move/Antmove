const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');

const isProduction = process.env.NODE_ENV === 'production';
const dist = isProduction ? path.join(__dirname, '../es') : path.join(__dirname, '../examples/es');
const src = path.join(__dirname, '../components');
const extTypes = ['ts', 'less', 'json', 'axml', 'sjs'];

gulp.task('less', () => {
  gulp.src(`${src}/**/*.less`)
    .pipe(less())
    .pipe(gulpif(isProduction, cleanCss()))
    .pipe(rename({
      extname: '.acss',
    }))
    .pipe(gulp.dest(dist));
});

gulp.task('ts', () => {
  gulp.src(`${src}/**/*.ts`)
    .pipe(babel())
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(gulp.dest(dist));
});

gulp.task('json', () => {
  gulp.src(`${src}/**/*.json`)
    .pipe(gulp.dest(dist));
});

gulp.task('axml', () => {
  gulp.src(`${src}/**/*.axml`)
    .pipe(gulp.dest(dist));
});

gulp.task('sjs', () => {
  gulp.src(`${src}/**/*.sjs`)
    .pipe(gulp.dest(dist));
});

gulp.task('build', extTypes);
gulp.start('build');

if (!isProduction) {
  extTypes.forEach((type) => {
    const watcher = gulp.watch(`${src}/**/*` + type, [type]);
    watcher.on('change', (event) => {
      console.log('File ' + event.path + ' was ' + event.type);
    });
  });
}
