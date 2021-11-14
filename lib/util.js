const crypto = require('crypto');

var mod = {
  hash: (str) => {
    return crypto
      .creatHmac('sha256', str)
      .update(mod.str(str))
      .digest('hex');
  },
  str: (str) => {
    return typeof(str) == 'string' ? str : '';
  },
  num: (num) => {
    return typeof(num) == 'number' ? num : null;
  },
  arr: (arr) => {
    return arr instanceof Array ? arr : [];
  },
  obj: (obj) => {
    return obj instanceof Object ? obj : {};
  }

};

module.exports = mod;
