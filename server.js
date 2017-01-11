const net = require('net');
const PORT = process.env.PORT || 6969;


let server = net.createServer((socket) => {

  socket.setEncoding('utf-8');
  socket.on('data', (chunk) => {
    socket.write(`${socket.remoteAddress}: ${chunk}`);
    console.log(`${socket.remoteAddress}: ${chunk}`);
  });

  process.stdin.on('data', (cmd) => {
    socket.write(`ADMIN: ${cmd}`);
    console.log(`ADMIN: ${cmd}`);
  });
});

// callback function gets invoked once server has started
server.listen(PORT, '0.0.0.0', () => {
  console.log('opened server on ', server.address());
});
