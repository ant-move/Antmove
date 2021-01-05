const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '^(common|components|pages)/(.+)': ([, path, subpath]) =>
          `/${path}/${subpath}`,
      },
    },
  ],
]

module.exports = {
  plugins,
  ignore: ['node_modules', 'src/node_modules'],
}
