const webpackMerge = require('webpack-merge');
const paths = require('./paths');
const basicConfig = require('./webpack.basic');

module.exports = webpackMerge(basicConfig, {
  mode: 'production',
  output: {
    path: paths.build,
  },
});
