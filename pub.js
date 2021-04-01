var mqtt =require('mqtt')
//  var client = mqtt.connect('mqtt://localhost:1883')
 var client = mqtt.connect('ws://tns-mqtt.herokuapp.com')
var topic = 'Helloworld'
var message = "Don't give up"

client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic,message)
        console.log('Messenge sent!',message)

    },5000)
})
