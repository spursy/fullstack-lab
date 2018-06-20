/**
 * md5 demo
 */
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var result = md5.update('a').digest('hex');
// 输出：0cc175b9c0f1b6a831c399e269772661
console.log(result);


/**
 * 对密码使用md5加密
 */
var crypto = require('crypto');
function cryptPwd(password) {
    var md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}

var password = '123456';
var cryptedPassword = cryptPwd(password);
console.log(cryptedPassword);