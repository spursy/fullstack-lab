var express = require('express');
var mysqldb = require('./mysqldb.js');
var logger = require('../../../log/log4js'); 
var app = module.exports = express();

app.post("/save", async(req, res) =>{
    var TAG = logger.TAG(req);
    try {
        var data = req.body;
        logger.info(TAG, data);
        var result = await mysqldb.Teacher.create(data);
        res.send(result);
    } catch (err) {
        logger.info(TAG, err);
        res.send(err);
    }
});
app.get("/search", async(req, res) => {
    var TAG = logger.TAG(req);
    try {
        var name = req.query.name;
        logger.info(TAG, name);
        var where_str = {
            where: {
                name: name
            }
        };
        var result = await mysqldb.Teacher.findAll(where_str);
        res.send(result);
    } catch (error) {
        logger(TAG, error);
        res.send(error);
    }
})