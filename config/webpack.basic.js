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
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: paths.template,
      }),
    ],
    devServer: {
      contentBase: paths.output,
      historyApiFallback: true,
      host: '0.0.0.0',
    },
    resolve: {
      extensions: ['.js'],
      modules: [paths.src, paths.nodeModules],
    },
  }
);
