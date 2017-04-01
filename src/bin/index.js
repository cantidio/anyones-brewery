var gpio = require('rpi-gpio');
var togglePin = require('../lib/togglePin');

const pin = 16;
gpio.setup(pin, gpio.DIR_OUT, function() {
  togglePin(pin, 1000);
});

process.stdin.resume();
