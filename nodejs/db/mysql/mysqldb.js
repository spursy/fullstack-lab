'use strict'
/**
 * created by yang yang at 2017-12-15
 */
var Sequelize = require('sequelize');
var db = {
    sequelize : new Sequelize('spursyy', 'root', 'root2017', {
        host: '127.0.0.1',
        port:'3306',
        dialect: 'mysql',
        pool: {
            max: 150,
            min: 5,
            idle: 10000
        },
        'define': {
            'underscored': true // column spilt by '_'
        },
        logging:false,
        timezone:'+08:00' // Correcting time as bei jing time zone.
    })
};

db.Student = db.sequelize.import('./model/student.js');
db.Teacher = db.sequelize.import('./model/teacher.js');

console.log("mysqldb sequelize");
module.exports = db;