var mqtt =require('mqtt')
var client = mqtt.connect('ws://tns-mqtt.herokuapp.com')
// var client = mqtt.connect('mqtt://localhost:80')

var topic = 'Helloworld'

client.on('message',(topic,message)=>{
    message = mesasge.toString()
    console.log(message)

})

client.on('connect',()=>{
  client.subscribe(topic)

})