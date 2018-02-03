var checkNumber = function (param) {
    var reg = /^[0-9]+$/;
    if (reg.test(param)) {
        return true;
    }
    return false;
}

var verifyNumber = function(param) {
    if (!checkNumber(param)) {
        console.log(param + " is not number, please input correct text.");
    } else {
        console.log(param + " is number.");
    }
}

verifyNumber("1");
verifyNumber("123asda");
verifyNumber("123s1");
verifyNumber("123-1");