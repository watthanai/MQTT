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


  
var http = require('http'),
    httpServ = http.createServer(),
    mosca = require('mosca'),
    mqttServ = new mosca.Server({});

mqttServ.attachHttpServer(httpServ);

httpServ.listen(process.env.PORT || 8080);