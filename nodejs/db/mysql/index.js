var http = require('http');
var express = require('express');
var mysqldb = require('./mysqldb');
var port = 9000;
var app = express();
process.title = 'DB -> MySql -> Testing';

app.use('/api/student', require('./api/student'));
app.use('/api/user', require('./api/teacher'));
var server = http.createServer(app);
process.on('uncaughtException', function (err) {
    logger.info('uncaughtException ' + err);
    logger.info('uncaughtException ' + err.stack);
});
server.listen(port, function () {
    logger.info('Server listen on port ' + port);
    /**
     * if force is true, system will delete the table with the same name.
     */
    mysqldb.sequelize.sync({force: false}).then(function () {
        console.log("Server successed to start");
    }).catch(function (err) {
        console.log("Server failed to start due to error: %s", JSON.stringify(err));
    });
});