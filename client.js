const net = require('net');
const PORT = process.env.PORT || 6969;

let client = net.createConnection(PORT, 'localhost');

client.on('connect', () => {
  console.log('connected');
  process.stdin.pipe(client);
});

client.on('data', (chunk) => {
  process.stdout.write(chunk);
});