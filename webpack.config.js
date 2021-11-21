const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const pkg = require('./package.json');

const isProdEnv = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    hot: true,
    port: 3000,
  },
  devtool: isProdEnv ? false : 'inline-source-map',
  entry: './src/index.tsx',
  mode: isProdEnv ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isProdEnv ? MiniCSSExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProdEnv,
            },
          },
          isProdEnv && {
            loader: 'clean-css-loader',
            options: {
              level: 2,
              sourceMap: false,
            },
          },
        ].filter(Boolean),
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: !isProdEnv,
            },
          },
        ],
      },
    ],
  },
  output: {
    chunkFilename: isProdEnv ? '[id].[chunkhash].chunk.js' : '[id].chunk.js',
    filename: isProdEnv ? '[name].[contenthash].bundle.js' : '[name].bundle.js',
    path: path.join(__dirname, 'docs'),
    publicPath: isProdEnv ? 'https://swashcap.github.io/mtrx/' : '',
  },
  plugins: [
    new MiniCSSExtractPlugin({
      chunkFilename: isProdEnv
        ? '[id].[chunkhash].chunk.css'
        : '[id].chunk.css',
      filename: isProdEnv
        ? '[name].[contenthash].bundle.css'
        : '[name].bundle.css',
    }),
    !isProdEnv && new ForkTSCheckerWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: pkg.name,
      template: path.join(__dirname, 'src/index.html'),
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
