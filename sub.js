var mqtt =require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')
var topic = 'Helloworld'

client.on('message',(topic,message)=>{
    message = mesasge.toString()
    console.log(message)

})

client.on('connect',()=>{
  client.subscribe(topic)

})