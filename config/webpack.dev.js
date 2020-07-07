const webpackMerge = require('webpack-merge');
const paths = require('./paths');
const basicConfig = require('./webpack.basic');

module.exports = webpackMerge.merge(basicConfig, {
  mode: 'development',
  output: {
    path: paths.output,
  },
  devServer: {
    historyApiFallback: true,
  },
});
