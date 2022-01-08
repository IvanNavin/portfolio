const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

require('dotenv').config();
// require('dotenv').load();

const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV || 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: NODE_ENV === 'development',
              data: {
                foo: 'bar'
              }
            }
          }
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.pug'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src/assets", "cv"), to: "./cv" },
        { from: path.resolve(__dirname, "src/assets/img", "favicons"), to: "./assets/img/favicons" },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.TG_TOKEN': JSON.stringify(process.env.TG_TOKEN),
      'process.env.TG_CHAT_ID': JSON.stringify(process.env.TG_CHAT_ID),
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : false,
};
