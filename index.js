//este é meu arquivo principal

const calc = require('./calc');

const resSoma = calc.soma(10, 2);
const resSub = calc.sub(6,2);

console.log(`O resultado da soma é ${resSoma}`);
console.log(`O resultado da subtração é ${resSub}`);