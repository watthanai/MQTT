//MQTT broker

// var mosca = require('mosca')
// var settings = {prot:1883}
// var broker = new mosca.Server(settings)
// broker.on('ready',()=>{
//     console.log('Broker is ready!')
// })

// broker.on('published',(package)=>{
//     console.log(package.payload.toString())
// })


  
// var http = require('http'),
//     httpServ = http.createServer(),
//     mosca = require('mosca'),
//     mqttServ = new mosca.Server({});

// mqttServ.attachHttpServer(httpServ);

// httpServ.listen(process.env.PORT || 8080);


var mosca = require('mosca');
var http = require('http');
var httpServ = http.createServer(function(req, res){
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(process.env.PORT || 8080);
var broker = new mosca.Server({});
broker.attachHttpServer(httpServ);

broker.on('clientConnected', function(client) {
console.log('client connected', client.id);
});

// fired when a message is received
broker.on('published', function(packet, client) {
console.log('Published', packet.payload);
});

broker.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}




  



