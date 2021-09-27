const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

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
        loader: 'pug-loader',
        options: {
          pretty: NODE_ENV === 'development',
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
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
      template: path.resolve(__dirname, 'public/index.pug'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "public", "cv"), to: "./cv" },
        { from: path.resolve(__dirname, "public", "img"), to: "./img" },
      ],
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : false,
};
