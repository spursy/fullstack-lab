let Init = function() {
    throw new Error("This is a error.");
};

process.on('uncaughtException', function (err) {
    console.log('uncaughtException >>> >' + err.stack || err);
});

Init();