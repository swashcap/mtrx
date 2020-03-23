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
  devtool: 'inline-source-map',
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
        ],
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
            loader: 'linaria/loader',
            options: {
              sourceMap: !isProdEnv,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new MiniCSSExtractPlugin(),
    new ForkTSCheckerWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: pkg.name,
      template: path.join(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
