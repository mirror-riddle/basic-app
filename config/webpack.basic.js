const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const DotenvPlugin = require('dotenv-webpack');
const webpackMerge = require('webpack-merge');
const paths = require('./paths');

module.exports = webpackMerge(
  {},
  {
    mode: 'none',
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          verdors: {
            test: /[\\/]node_modules[\\/]/, // match both / and \
            name: 'verdors',
            chunks: 'all',
            priority: 0,
          },
        },
      },
    },
    module: {
      rules: [
        {
          include: [paths.src],
          oneOf: [
            {
              test: /\.js$/,
              use: ['babel-loader', 'eslint-loader'],
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(ico|png|svg|jpg|jpeg|gif)$/,
              use: ['file-loader'],
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        favicon: paths.favicon,
        template: paths.template,
      }),
      new EnvironmentPlugin({ 'process.env.NODE_ENV': null }),
      new DotenvPlugin({ path: paths.dotEnv }),
    ],
    resolve: {
      extensions: ['.js'],
      modules: [paths.src, paths.nodeModules],
    },
  }
);
