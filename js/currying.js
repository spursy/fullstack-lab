'use strict'

var currying = {
    high_order_fun: function (a) {
        var high_order_cal =  function (a) {
            return function (b) {
                return function(c) {
                    return a + b + c;
                }
            }
        }
        high_order_cal(10)(10)(10)
    },

    map_reduce_fun: function() {
        var map_reduce_cal = function (items, multi) {
            items.map(function (item, multi) {
                return item * multi;
            }).reduce(function(a, b) {
                return a + b;
            })
        }

        map_reduce_cal([10, 20, 30], 5)
    },

    currying_fun: function () {
        /*var currying_cal = function() {
            var _args = [];
            return function() {
                if (arguments.length === 0) {
                    console.log(">>>>>>>>111111")
                    return _args.reduce(function (a, b) {
                        return a + b;
                    })
                }
                [].push.apply(_args, [].slice.call(arguments));
                /!*return arguments.callee*!/
            }
        }

        currying_cal(10, 5, 5)(10)()*/

        var circulation = function () {
            if (arguments.length === 0) {
                console.log(">>>>>>>000")
                return _args.reduce(function (a, b) {
                    return a + b;
                });
            }
            [].push.apply(_args, [].slice.call(arguments));

        }

        var adder = function () {
            var _args = [];
            return function (_args) {

            }
        };
        var sum = adder();

        console.log(sum);     // Function

        sum(100,200)(300);    // 调用形式灵活，一次调用可输入一个或者多个参数，并且支持链式调用
        sum(400);
        return sum();   // 1000 （加总计算）
    },

   /* senior_currying_fun: function (fn) {
        var senior_surrying_cal = function () {
            var _args = [];

            return function () {
                [].push.apply(_args, [].slice.call(arguments));
                return fn.apply(this, _args);
            }
        }

        var multiply = function () {
            var total ;
            for (i = 0; i < arguments.length; i ++) {
                total += arguments[i];
            }
            return total;
        }

        senior_surrying_cal(multiply)(10, 5, 5)(10)

    }*/
}

module.exports = currying;

