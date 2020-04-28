const fs = require('fs');
const dotenv = require('dotenv');
const paths = require('./paths');

if (fs.existsSync(paths.dotEnv)) {
  dotenv.config({ path: paths.dotEnv });
}

const BASIC_APP = /^BASIC_APP_/;

const getAppEnvironment = () => {
  const entries = Object.entries(process.env);
  const appEntries = entries.filter(([key, value]) => BASIC_APP.test(key));
  return Object.fromEntries(appEntries);
};

module.exports = getAppEnvironment;
