module.exports = {
  plugins: [
    'babel-plugin-transform-class-properties',
    '@babel/plugin-transform-runtime',
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
    '@linaria',
  ],
};
