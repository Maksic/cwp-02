// server.js
const net = require('net');
const fs = require('fs');
const port = 8124;
let seed = 1;
const logger = fs.createWriteStream('client_'+ seed +'.txt');

const server = net.createServer((client) => {
  console.log('Client connected');
  client.id = seed++;
  logger.write('client ' + client.id + ' disconnected\n');
  client.setEncoding('utf8');

  client.on('data', (data) => {
    console.log(data);
        if (data == "QA"){
           //client.write('\r\nHello!\r\nRegards,\r\nServer\r\n' +  "\nClient write ACK");
           logger.write(client.id + ' Data: ' + data);
           let answer = Math.random() > 0.5 ? '1' : '0';
           logger.write(' Answer: ' + answer + '\n');
           client.write(answer);
        }
        else {
          client.write("DEC");
          client.destroy();
        }
    });

  client.on('end', () => console.log('Client disconnected')){
    logger.write('client ' + client.id + ' disconnected\n');
  };
});

server.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});