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
  devtool: 'eval-source-map',
  entry: './src/app.tsx',
  mode: isProdEnv ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          isProdEnv ? MiniCSSExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new ForkTSCheckerWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: pkg.name,
      template: path.join(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    alias: {
      react: 'preact/compat',
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
