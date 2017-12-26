// 需求是，在不改变API的情况下，在bootstrap之前做一些初始化操作，而且是异步操作。

// 只有在初始化才做完成之后，才真正的执行run函数

// 改动后的代码:

class Program extends EventEmitter {
    constructor() {
      super();
      this.on("bootstrap", function() {
        this.run();
      });
    }
    run() {}
  }
  
  new Program()
    // bootstrap the app
    .on("error", err => {
      console.error("Something go wrong!");
      console.error(err);
    })
    .emit("bootstrap");





    class Program extends EventEmitter {
        constructor() {
          super();
          this.initter = [];
          this.on("bootstrap", async () => {
            const initter = [].concat(this.initter);
            try {
              while (initter.length) {
                const iniFunc = initter.shift();
                await iniFunc();
              }
            } catch (err) {
              this.emit("error", err);
              return false;
            }
            this.run();
          });
        }
        init(func) {
          this.initter.push(func);
          return this;
        }
        run() {}
      }
      
      new Program()
        // bootstrap the app
        .on("error", err => {
          console.error("Something go wrong!");
          console.error(err);
        })
        .emit("bootstrap");