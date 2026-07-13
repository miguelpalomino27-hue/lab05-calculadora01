const prompt = require('prompt-sync')();
const { suma } = require('./src/calculadora/calculadora');

let a = parseInt(prompt("Ingrese número: "));
let b = parseInt(prompt("Ingrese número: "));

console.log("Resultado:", suma(a, b));