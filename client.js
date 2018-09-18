// client.js
const net = require('net');
const port = 8124;
let seed = 1;

const client = new net.Socket();

client.setEncoding('utf8');

client.connect(port, function() {
  console.log('Connected');
  client.write('\r\nHello, Server!\r\nLove,\r\nClient.\r\n' + '\nConnected user with id' + ++seed);
});

client.on('data', function(data) {
	data = process.argv[2];
  console.log(data);
  client.destroy();
});

client.on('close', function() {
  console.log('Connection closed');
});