// /Values and Variables

const country = 'Georgia';
const continent = 'Europe';
let population = 3.5;

console.log(country, continent, population);

// Data Types

const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

//let, const and var

language = 'english';

// Basic Operators

console.log(population/2);
population++;
console.log(population);
console.log(population >6);
console.log(population <33);

const description = country + ' is in' + continent + ', and its ' + population + ' million people speak ' + language+'.';
console.log(description);

// Strings and Template Literals

const description1 = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;

console.log(description1);

// Taking Decisions: if / else Statements

if (population > 33) {
    console.log(`${country}'s population is above the average`);
} else {
    console.log(`${country}'s population is ${(33-population)/2} million below average`);
}

// Type Conversion and Coercion

console.log('9'-'5'); //4
console.log('19'-'13'+'17');// 617
console.log('19'-'13'+ 17);// 23
console.log('123' < 57); // false
console.log(5 + 6 +'4' + 9 -4 -2); //1143


// Equality Operators: == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }


// Logical Operators

if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


// The switch Statement

console.log(language);

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// The Conditional (Ternary) Operator

population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);


const x = '1';
console.log(x);
console.log(typeof x);