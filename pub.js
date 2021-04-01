var mqtt =require('mqtt')
 var client = mqtt.connect('mqtt://localhost:8080')
// var client = mqtt.connect('mqtt://localhost:80')
var topic = 'Helloworld'
var message = "Hello fluke"

client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic,message)
        console.log('Messenge sent!',message)

    },5000)
})
