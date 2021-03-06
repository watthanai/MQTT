var mqtt    = require('mqtt');
var client  = mqtt.connect('ws://YOUR-APP-INSERT-HERE.herokuapp.com');

client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});