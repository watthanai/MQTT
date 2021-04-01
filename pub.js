var mqtt =require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')
var topic = 'Helloworld'
var message = "Hello fluke"

client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic,message)
        console.log('Messenge sent!',message)

    },5000)
})
