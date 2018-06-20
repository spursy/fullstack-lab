var crypto = require('crypto');
//DH算法协商秘钥
/**
 * 主动方使用的协商方法
 * @returns array():say是要传达给被动方的三个数据 one是自己要用的一个数据
 */
function dhOneSay() {
    var one = crypto.createDiffieHellman(512);
    var one_key = one.generateKeys();
    var prime = one.getPrime();
    var generator = one.getGenerator();
    var say = {
        prime: prime, generator: generator, one_key: one_key
    };

    return [say, one];
}
/**
 * 被动方使用的协商方法已经可以得到秘钥
 * @param {prime: prime, generator: generoter, one_key: one_key} props 
 * @returns array() two_key是要返回给主动方的秘数，theSecret是计算出来的秘钥
 */
function dhTwoGetSay(props) {
    var two = crypto.createDiffieHellman(props.prime, props.generator);
    var two_key = two.generateKeys();
    var theSecret = (two.computeSecret(props.one_key)).toString('hex');
    return [ two_key, theSecret ];
}
/**
 * 主动方收到被动方给予的秘钥后
 * @param str two_key 被动方返回的密数
 * @param str one 主动方最初的随机数
 * @returns str 计算出来的秘钥
 */
function dhOneGet(two_key,one){
    return (one.computeSecret(two_key)).toString('hex');
}
//主动方自己产生数据
var oneSay=dhOneSay();
//被动方接受主动方传过来的数据进行计算，产生握手数据和最终的秘钥
var twoGetSay=dhTwoGetSay(oneSay[0]);
//主动方接收到被动方传来的数据进行计算得到最终秘钥
var oneSecret=dhOneGet(twoGetSay[0],oneSay[1]);
//被动方的秘钥早已产生了直接读取
var twoSecret=twoGetSay[1];
console.log("One say>>> >" + oneSay);
console.log("Two get say>>> >" + twoGetSay);
console.log("One secret>>> >" + oneSecret);
console.log("Two secret>>> >" + twoSecret);