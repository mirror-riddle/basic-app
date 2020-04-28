const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
          test: /\.js$/,
          exclude: /[\\/]node_modules[\\/]/,
          use: [
            {
              loader: 'eslint-loader',
              options: {
                cache: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: paths.src,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(ico|png|svg|jpg|jpeg|gif)$/,
          include: paths.src,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        favicon: paths.favicon,
        template: paths.template,
      }),
      new DotenvPlugin({ path: paths.dotEnv }),
    ],
    resolve: {
      extensions: ['.js'],
      modules: [paths.src, paths.nodeModules],
    },
  }
);
