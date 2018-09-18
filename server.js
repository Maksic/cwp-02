// server.js
const net = require('net');
const port = 8124;
let seed = 1;

const server = net.createServer((client) => {
  console.log('Client connected');

  client.setEncoding('utf8');

  client.on('data', (data) => {
    console.log(data);
      if (data == "QA"){
          client.write('\r\nHello!\r\nRegards,\r\nServer\r\n' + '\nHello user with id' + ++seed + "\nACK");
      }
        else {
          client.write("DEC");
          client.destroy();
        }
    });

  client.on('end', () => console.log('Client disconnected'));
});

server.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});