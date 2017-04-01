var gpio = require('rpi-gpio');
var togglePin = require('../lib/toggle-pin');

gpio.on('change', function(channel, value) {
    console.log('Channel ' + channel + ' value is now ' + value);
    console.log(gpio.read(channel, (err,value) => console.log(err,value) ));
});

gpio.setup(16, gpio.DIR_OUT, function() {
  togglePin(16, 1000);
});

gpio.setup(40, gpio.DIR_IN, gpio.EDGE_BOTH);

process.stdin.resume();
