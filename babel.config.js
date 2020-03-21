module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
        pragmaFrag: 'Fragment',
      },
      '@babel/plugin-transform-runtime',
    ],
  ],
  presets: ['@babel/preset-env', 'linaria/babel'],
};
