module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@routes': './src/routes',
        '@types': './src/types',
        '@database': './src/database',
        '@utils': './src/utils',
        '@jobs': './src/jobs',
        '@lib': './src/lib'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
