var fs = require('fs');
var process = require('process');

fs.open("D:\\2Demo\\fullstack-lab\\nodejs\\guard\\test.txt",'w',function(err, fd){
    console.log(fd);
    for (var i=0; i<100; i++) {
        fs.write(fd,process.pid+"\n",function(){});
    }
});