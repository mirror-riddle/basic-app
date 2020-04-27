const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const paths = require('./paths');

module.exports = webpackMerge(
  {},
  {
    mode: 'none',
    entry: paths.entry,
    output: {},
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
          oneOf: [
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
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        favicon: paths.favicon,
        template: paths.template,
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js'],
      modules: [paths.src, paths.nodeModules],
    },
  }
);
