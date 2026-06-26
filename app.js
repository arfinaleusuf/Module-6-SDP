// let and const ES6

// Tamplet litarels & Spread Operators


// const countryName = "bangladesh";
// const country = `my country name is ${countryName}`;
// // console.log(country);

// const numbers = [1,2,3,4,5,6,7,8,9];
// const numbers2 = [11,12,13,14,15,16,17,18,19];

// const max = Math.max(...numbers);
// console.log(...numbers, ...numbers2);
// console.log(max);

// const person = {
//     name: "test",
//     age: 10,
//     friends: ["karim", "rahim", 'jobbar'],
// };

// const {age ,friends} = person;

// console.log(friends);

function sum(num1, num2)
{
    const result = num1 + num2;
    return result;
};

const output2 = (num1, num2) => {
    return num1 + num2;
};

// const output = sum(10,20);
// console.log(output2);

const sum2 =(num1, num2 )=> num1 + num2;

const out2 = sum2(10,20);
console.log(out2)