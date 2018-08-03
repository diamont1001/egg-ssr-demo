'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    home: './app/view/pages/home/index.js',
  },
  output: {
    path: path.resolve(__dirname, './app/public/bundle/'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js?[hash:8]',
  },
  mode: 'development', // production
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css?[hash:8]',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        query: {
          name: '[path][name].[ext]?[hash:8]',
          limit: 8192, // inline base64 URLs for <=8k images, direct URLs for the rest
        },
      },
    ],
  },
};
