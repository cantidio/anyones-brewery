var gpio = require('rpi-gpio');

function togglePin(pin, interval) {
  let on = true;
  return setInterval(()=>{
    gpio.write(pin, on, function(err) {
      if (err) throw err;
      on = !on;
    });
  }, interval);
}

module.exports = togglePin;
