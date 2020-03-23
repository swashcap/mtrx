module.exports = {
  plugins: [['@babel/plugin-transform-runtime']],
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
    [
      'linaria/babel',
      {
        displayName: true,
      },
    ],
  ],
};
