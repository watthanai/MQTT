// var http = require('http'),
//     httpServ = http.createServer(),
//     mosca = require('mosca'),
//     mqttServ = new mosca.Server({});

// mqttServ.attachHttpServer(httpServ); 

// httpServ.listen(process.env.PORT || 1883,()=>console.log("Server is running"));

// var mosca = require('mosca');

// var ascoltatore = {
//   //using ascoltatore
//   type: 'mongo',
//   pubsubCollection: 'Broker',
//   mongo: {}
// };

// var settings = {
   
// //   port: process.env.PORT || 1883,
//      port: app.listen(process.env.PORT || 1883)
// };

// var server = new mosca.Server(settings);

// server.on('clientConnected', function(client) {
//     console.log('client connected', client.id);

// });

// // fired when a message is received
// server.on('published', function(packet, client) {
//   console.log('Published', packet.payload);
// });

// server.on('ready', setup);

// // fired when the mqtt server is ready
// function setup() {
//   console.log('Mosca server is up and running');
// }

var express = require('express');
var http = require('http');
var mosca = require('mosca');

var app = express();
var server = http.createServer(app);

var pubsubsettings = {
    type: 'mongo',
    url: process.env.MONGOLAB_URI ||  'mongodb://localhost:27017/app',
    pubsubCollection: 'mqtt',
    mongo: {}
};

var server = new mosca.Server({
    backend: pubsubsettings,
    persistence: {
        factory: mosca.persistence.Mongo,
        url: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/app'
    }
}, function() {
    server.attachHttpServer(app);
});

server.on('ready', function() {
    console.log('Mosca is running');
});






