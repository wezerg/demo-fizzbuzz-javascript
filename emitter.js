const EventEmitter = require('events');

class FizzBuzz extends EventEmitter{
    Calcul(number){
        console.log("Message émis : " + number);
        this.emit('calcul', number);
    }
}

module.exports = FizzBuzz;