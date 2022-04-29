const EventEmitter = require('events');

class FizzBuzz extends EventEmitter{
    Calcul(number){
        this.emit('calcul', number);
    }
}

module.exports = FizzBuzz;