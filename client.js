// client.js
const net = require('net');
const fs = require('fs');
const shuffle = require('shuffle-array');
const port = 8124;
let array;

const client = new net.Socket();

client.setEncoding('utf8');

client.connect(port, function() {
  console.log('Connected');
  fs.readFile('qa.json', (err, text) => {
        if (!err) {
            array = JSON.parse(text);
            shuffle(array);
            client.write('QA');
        }
        else {
            console.log(err);
        }
    })
  //client.write('\r\nHello, Server!\r\nLove,\r\nClient.\r\n');
});

client.on('data', function(data) {
  console.log(data);
  client.destroy();
});

client.on('close', function() {
  console.log('Connection closed');
});

