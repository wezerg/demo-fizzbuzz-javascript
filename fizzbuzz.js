const FizzBuzz = require('./emitter');
const fizzbuzz = new FizzBuzz();

fizzbuzz.on('calcul', function(number){
    if (number % 5 === 0 && number % 3 === 0) {
        console.log('FizzBuzz');
    }
    else if(number % 5 === 0){
        console.log('Buzz');
    }
    else if(number % 3 === 0){
        console.log('Fizz');
    }
    else{
        console.log(number + " : n'est pas un multiple de 3 et/ou 5");
    }
});

module.exports = fizzbuzz;