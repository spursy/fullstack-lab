const { spawn } = require('child_process');
const child = spawn('pwd');

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
child.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
  });
