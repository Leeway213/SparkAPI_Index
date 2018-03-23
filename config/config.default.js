'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521620594398_4715';

  // add your config here
  config.middleware = [];

  config.static = {
    prefix: '',
    dir: [path.join(appInfo.baseDir, 'app/public')],
    dynamic: true,
    preload: false,
    maxAge: 31536000,// in prod env, 0 in other envs
    buffer: true,// in prod env, false in other envs
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks'
    }
  };

  config.i18n = {
    // 默认语言，默认 "en_US"
    // URL 参数，默认 "locale"
    defaultLocale: 'zh-CN',
    queryField: 'locale',
    // Cookie 记录的 key, 默认："locale"
    cookieField: 'locale',
    // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
    cookieMaxAge: '1y',
  };

  config.bodyParser = {
    enable: true,
    encoding: 'utf8',
    formLimit: '100kb',
    jsonLimit: '100kb',
    strict: true,
    // @see https://github.com/hapijs/qs/blob/master/lib/parse.js#L8 for more options
    queryString: {
      arrayLimit: 100,
      depth: 5,
      parameterLimit: 1000,
    }
  };

  config.logger = {
    dir: path.join(appInfo.root, 'logs', appInfo.name),
    encoding: 'utf8',
    env: appInfo.env,
    level: 'INFO',
    consoleLevel: 'INFO',
    disableConsoleAfterReady: appInfo.env !== 'local' && appInfo.env !== 'unittest',
    outputJSON: false,
    buffer: true,
    appLogName: `${appInfo.name}-web.log`,
    coreLogName: 'egg-web.log',
    agentLogName: 'egg-agent.log',
    errorLogName: 'common-error.log',
    coreLogger: {},
    allowDebugAtProd: true,
  };

  return config;
};
