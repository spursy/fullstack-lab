'use strict'

var student = {
    get_age_undefined : function() {
        var add_age = function () {
            return this;   // due to this is closure, this has referred to global
        }
        add_age()
    },

    get_age_success : function() {
        var self = this;
        var add_age = function () {
            return self.age + 1;
        }
        add_age();
    },

    get_age_through_bind : function() {
        var add_age = function () {
            return this.age + 1;
        }.bind(this)  // through bind function set keyword this in closure scope
    },

    calculate_age : function(y, z) {
        var get_age = function (y, z) {
            return this.x + y + z;
        }

        get_age.bind({x: 10}, 10)(10); //include fun get_age to obj {x: 10} through bind fun
    },

    simulate_bind : function (param) {
        Function.prototype.simulate = function (obj) {
            var fn = this;
            return function () {
                return fn.apply(obj, arguments);
            }
        }

        var self = this;

        var stu = {age: 10};
        var get_age = function (increment) {
            return this.age + increment
        }

        var bind_simulate =  get_age.simulate(stu)
        bind_simulate(param)
    },
    age : 10
}


module.exports = student;