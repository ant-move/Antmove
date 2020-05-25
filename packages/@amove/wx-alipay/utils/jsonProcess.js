const path = require('path');
const fs = require('fs-extra');
module.exports = {
  getAppName (pagesPath, baseDirName, attrName) {
      let appName = '';
      pagesPath && pagesPath.some(item => {
          const filePath = path.join(baseDirName, `${item}.json`);
          const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          if (content[attrName]) {
              appName = content[attrName];
              return true;
          }
          return false;
      });
      return appName;
  },

  setAppName (name) {
    process.env.appName = name;
  }
};