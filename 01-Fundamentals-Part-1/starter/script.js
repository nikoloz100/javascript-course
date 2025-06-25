// let js='amazing';
// if (js==='amazing') alert('javascript is fun');

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);


/* --------------------------------------------------------
let country = 'Georgia';
let continent = 'Eurasia';
let population = 3.715;


console.log(country);
console.log(continent);
console.log(population); */


/* ---------------------------------------------------------
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Nick');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);

let nothing;
console.log(nothing);
console.log(typeof nothing);

nothing = "is a thing now";
console.log(nothing);
console.log(typeof nothing);

console.log(typeof null);

let legacy = null;
console.log(typeof legacy);
 */


/* -----------------------------------------------------------
let age;
age = 40;
age = 41;

const birthYear = 1984;
// birthYear = 1982;

const job; */


/* -----------------------------------------------------------
// Math Operators
const now = 2025;
const ageNick = now - 1984;
const ageSaba = now - 2004;

console.log(ageNick, ageSaba);

console.log(ageNick *2, ageSaba / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

const firstName = 'Nik';
const lastName = 'Chikhradze';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 5; // x = x / 5 = 20
x ++; // x = x + 1 = 21
x --; // x = x - 1 = 20;

console.log(x);

// Comparison operators

console.log(ageNick > ageSaba); // >, <, >=, <=
console.log(now - 1984 > now - 2004); // same as above but in one line
console.log(ageSaba >= 18); // 

const isFullAge = ageSaba >= 18;
console.log(isFullAge); */



/* -----------------------------------------------------------
const now = 2025;
const ageNick = now - 1984;
const ageSaba = now - 2004;

console.log(now - 1984 > now - 2004);

console.log(20 - 10 - 5); // executed left to right;

let x, y; // declaration of two / empty variables;
x = y = 25 - 10 - 5; // executed right to left (- before = / x = y = 10) and therefore result assigned to both variables
console.log(x, y);

const everageAge = (ageNick + ageSaba) / 2; // () highest presedence
console.log(ageNick, ageSaba, everageAge); */




/* -----------------------------------------------------------

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
let markHigherBMI = BMIMark > BMIJohn;


console.log(BMIMark, BMIJohn, markHigherBMI); */




/* -----------------------------------------------------------

const firstName = 'Nikoloz';
const job = 'technichian';
const birthYear = 1984;
const currentYear = 2025;

const Nik = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

console.log(Nik);

const nikNew = `I'm ${firstName}, a ${currentYear-birthYear} year old ${job}!`;
console.log(nikNew);

console.log(`We can use backtiks instead of quotes for any regular string`);

console.log('first line of string \n\
second string \n\
third string \n\
');

console.log(`with template strings and backticks
we dont actually need to use amy specioal character
to create the next line of string`); */


/* -----------------------------------------------------------
const ageNick = 17;

if(ageNick >= 18) {
    console.log('Nick can have driving lisence 🚗');
} else {
    const yearsLeft = 18 - ageNick;
    console.log(`Nick is too young. Wait another ${yearsLeft} year(s) to get the licese!`);
}


const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century); */

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIJohn > BMIMark) {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// } else {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }



// --------------------------------------------------------

// Type convertion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Nik"));
// console.log(typeof NaN);

// console.log(23, String(23));

// //Type coercion
// console.log(`I'm ` + String(23) + ` years old.`);
// console.log(`I'm ` + 23 + ` years old.`);
// console.log('23' - '10' - 3); // - operator converts strings to numbers
// console.log('23' + '10' + 3); // +operator converts numbers to strings
// console.log('23' * '2'); // * operator converts strings to numbers

// console.log('20' / '2'); // / operator converts strings to numbers

// let n = '1' + 1; // converted to 11 string
// console.log(n); // string 11 converted to number and subtracted 1
// n = n-1;
// console.log(n);

// console.log('10' - '4' - '3' - 2 + '5');




//---------------------------------------------------------

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Nik')); // truthy because not empty string
// console.log(Boolean({})); // truthy becoause not an empty object


// const money = 100;

// if(money) {
//     console.log(`dont't spend it all`);
// } else {
//     console.log(`you should get a job`);
// }

// let height = 0;
// if(height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('height is undefined');
// }



// -------------------------------------------------------------

// const age = '18';
// if(age===18) console.log('you just become an adult (strict)');
// if(age==18) console.log('you just become an adult (loose)');

// const favouriteNumber = Number(prompt("What's your favourite number"));
// console.log(favouriteNumber);
// console.log(typeof favouriteNumber);

// if (favouriteNumber === 23) { // '23' == 23
//     console.log('cool! 23 is an amazing number');
// } else if (favouriteNumber === 7) {
//     console.log('7 is also an amazing number');
// } else if (favouriteNumber === 9) {
//     console.log('9 is also an amazing number');
// } else {
//     console.log('There is no favorite number');
// }

// if (favouriteNumber !==23) console.log('Why not 23');



// --------------------------------------------------------


// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);



// if(hasDriversLicense && hasGoodVision) {
//     console.log('sara is able to drive');
// } else {
//     console.log('someone else should drive')
// }

// const isTired = true; // C

// console.log(hasDriversLicense && hasGoodVision && isTired);


// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('sara is able to drive');
// } else {
//     console.log('someone else should drive')
// }



// --------------------------------------------------------

// Test
// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (88+91+110)/3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy🏆");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//     onsole.log("Both win the trophy");
// }


// Bonus test -1 

// const scoreDolphins = (97+112+101)/3;
// const scoreKoalas = (109+95+123)/3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//     onsole.log("Both win the trophy");
// }



// Bonus test -2 

// const scoreDolphins = (97+112+80)/3;
// const scoreKoalas = (109+95+50)/3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >=100 && scoreKoalas >= 100) {
//     console.log("Both teams win the trophy");
// } else {
//     console.log("No team win the trophy")
// }



// --------------------------------------------------------



// const day = 'jjj'; // strict comparison

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Emjoy Weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }


// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Emjoy Weekend');
// } else {
//     console.log('Not a valid day');
// }



// --------------------------------------------------------


// 3+4  // is an expression because it produces value
// 1991 // is also an expression becoause it is a value

// true && false && !false // expressions as boolean values


// // this below is a statement (if else statement)

// if (23 > 10) {
//     const str = '23 is bigger' 
// }

// const me = 'Nick';

// console.log(`I'm ${2037-1991} years old ${me}`);



//---------------------------------------------------------




// const age = 18;
// age >= 18 ? console.log('I like to drink wine 🍷') : 
// console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age > 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }

// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


//---------------------------------------------------------

// const bill = 400;

// let tip = bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${bill*0.15}, and the total value ${bill*1.15}`) : console.log(`The bill was ${bill}, the tip was ${bill*0.2}, and the total value ${bill*1.2}`);

// let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill+tip}`);