var crypto = require('crypto');
//AES 对称加密算法的一种。
//创建加密算法
function aesEncode(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
//创建解密算法
function aesDecode(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
var data = '我是一个大傻瓜';
var key = 'keykey';
console.log(aesEncode(data, key));
console.log(data);
console.log(aesDecode(aesEncode(data, key), key));