// var http = require('http'),
//     httpServ = http.createServer(),
//     mosca = require('mosca'),
//     mqttServ = new mosca.Server({});

// mqttServ.attachHttpServer(httpServ); 

// httpServ.listen(process.env.PORT || 8080,()=>console.log("Server is running"));

var mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  pubsubCollection: 'Broker',
  mongo: {}
};

var settings = {
  port: 1883,
  http:{
      port:8883
  }
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
    
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}






