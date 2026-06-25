// let and const ES6

// Tamplet litarels & Spread Operators


const countryName = "bangladesh";
const country = `my country name is ${countryName}`;
// console.log(country);

const numbers = [1,2,3,4,5,6,7,8,9];
const numbers2 = [11,12,13,14,15,16,17,18,19];

const max = Math.max(...numbers);
console.log(...numbers, ...numbers2);
console.log(max);