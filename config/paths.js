const fs = require('fs');
const path = require('path');

const appDir = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

module.exports = {
  src: resolveApp('src/'),
  config: resolveApp('config/'),
  entry: resolveApp('src/index.js'),
  template: resolveApp('src/index.html'),
  favicon: resolveApp('src/favicon.ico'),
  output: resolveApp('output/'),
  build: resolveApp('build/'),
  nodeModules: resolveApp('node_modules/'),
  dotEnv: resolveApp('.env'),
};
