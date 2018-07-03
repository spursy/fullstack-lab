let Init = function() {
    try {
        PromiseFunWrappedTryCatch();
        PromiseFun(); 
        setTimeout(()=> {
            console.log(">>>>>>>>>>>>> <<<<<<<<<<<"  );
        }, 3000)            
    } catch (error) {
        console.log(error);
    }
};

let PromiseFunWrappedTryCatch = function() {
    try {
        return new Promise((resolve, reject) => {
            reject("This is a error throw by promise fun wrapped try catch.");
        });     
    } catch (error) {
        throw error;
    }
};

let PromiseFun = function() {
    return new Promise((resolve, reject) => {
        reject("This is a error throw by promise.");
    });
    // .catch(( error) => {
    //     throw error;
    // }); 
};

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
})


Init();