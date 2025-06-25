'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');


const interface = 'audio';

const private = 534;

---------------------------------------------------------



function logger() {
    console.log('my name is Nik');
}
// invoking / calling / running
logger();
logger();
logger();

function fruitProcessor (apples, oranges) {
    const juice = `Juice of ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const frutela = fruitProcessor(5, 2);
console.log(frutela);

const appleOrangeJuice = fruitProcessor(10, 11);
console.log(appleOrangeJuice);

---------------------------------------------------------



function declaration - it can be called first then defined

const age1 = calcAge1(1984);
console.log(age1);

function calcAge1(birthYear) {    
    return 2025 - birthYear;
}


// function expression - should be defined first then called

const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calcAge2(1984);
console.log(age1, age2);

---------------------------------------------------------



Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1984);
console.log(age3);


const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65-age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntillRetirement(1984, 'Nikoloz'));
console.log(yearsUntillRetirement(1991, 'Lasha'));

---------------------------------------------------------

const blender = function (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const appleBlendered = blender(apples);
    const orangeBlendered = blender(oranges);

    const juice = `Juice with ${appleBlendered} pieces of apple and ${orangeBlendered} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

---------------------------------------------------------

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntillRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65-age;
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement}years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    
    }
}

console.log(yearsUntillRetirement(1991, 'Nikoloz'));
console.log(yearsUntillRetirement(1950, 'Lasha'));


const calcAge = function (birthYear, firstName) {
    const age = 2037 - birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
}

const age = calcAge(1984, 'Nikoloz');
console.log(age);

---------------------------------------------------------



const calcAverage  = (a, b, c) => (a + b + c)/3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas*2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins*2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);


---------------------------------------------------------

const friends = ['Mike', 'Steven', 'Bob'];
console.log(friends);

const years = new Array(1991, 1992, 1993);
console.log(years);
console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length-1]);


friends[2] = 'Jay'; // you can replace items of array;
console.log(friends);

friends = ['bob', 'Jordan', 'Margaret']; - you can't replace whole array declared with const 

let dos = ['eat', 'clean', 'wash'];
console.log(dos);

dos = ['train', 'study', 'sleap'];
console.log(dos);

const firstName = 'Nik';
const mixType = [firstName, 'Chikhradze', 2025-1984, 'negineer', friends];
console.log(mixType);

Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[0]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]),calcAge(years[0]),calcAge(years[years.length-1])];
console.log(ages);

---------------------------------------------------------


const friends = ['Mike', 'Steven', 'Bob'];
console.log(friends);

// Add items in array
const arLength = friends.push('jay');
console.log(friends, arLength);

friends.unshift('John');
console.log(friends);

// Remove elements
const popped = friends.pop(); // Removes last element and returns it
console.log(friends);
console.log(popped);

const shifted = friends.shift(); // Removes first element and returns;
console.log(friends);
console.log(shifted);

console.log(friends.indexOf('Steven'));

console.log(friends.indexOf('George')); // if there is no such an element we get -1


console.log(friends.includes('Bob'));
console.log(friends.includes('George'));
friends.push(23);
console.log(friends.includes('23')); // as it uses strict method of comparison it fails as we pushed number 23 above and not a string

if (friends.includes('Bob')) {
    console.log(`You have a friend named ${friends[2]}`);
}



let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill+tip}`);


function declaration with push

function calcTip (bill) {
    if (bill >= 50 && bill <=300) {        
        tips.push(bill * 0.15);
        // totals.push(bill+(bill*0.15))
        totals.push(bill+(tips[tips.length-1]))
    } else {        
        tips.push(bill *0.2);
        // totals.push(bill+(bill*0.2))
        totals.push(bill+(tips[tips.length-1]))

    }
}



const bills = [125, 555, 44];
const tips = [];
const totals =[]

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);
console.log(tips, totals);



//function expression

const calcTip1 = function (bill) {
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}



const bills1 = [125, 555, 44];
const tips1 = [calcTip1(bills1[0]), calcTip1(bills1[1]), calcTip1(bills1[2])];
const totals1 = [bills1[0] + tips1[0], bills1[1] + tips1[1], bills1[2] + tips1[2]];

console.log(tips1, totals1);



// function arrow

const calcTip2 = (bill) => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;


const bills2 = [125, 555, 44];
const tips2 = [calcTip2(bills2[0]), calcTip2(bills2[1]), calcTip2(bills2[2])];
const totals2 = [bills2[0] + tips2[0], bills2[1] + tips2[1], bills2[2] + tips2[2]];

console.log(tips2, totals2);

----------------------------------------------------------- */


/* const nik = {
    firstName: 'Nik',
    lastName: 'Chikhradze',
    age: 2025-1984,
    job: 'Engineer',
    friends: ['Mike', 'Bob', 'Steven']
};

console.log(nik)

console.log(nik.lastName);
console.log(nik['lastName']);

const nameKey = 'Name';
console.log(nik['first' + nameKey]);
console.log(nik['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Nik ? Choose between firstName, lastName, age, job and friends');
// console.log(nik[interestedIn]);

// nik[interestedIn] ? console.log(nik[interestedIn]) : console.log('value doesnt exist');

nik.homeland = 'Georgia';
nik['location'] = 'NY, White Plains';
console.log(nik);

// Chalange

// 'Nik has 3 friends and his best friend is Bob'

console.log(`${nik.firstName} has ${nik.friends.length} friends and his best friend is ${nik.friends[2]}.`);

---------------------------------------------------------- */

/* 
const nik = {
    firstName: 'Nik',
    lastName: 'Chikhradze',
    birthYear: 1984,
    job: 'Engineer',
    friends: ['Mike', 'Bob', 'Steven'],
    hasDriverLicense: true,

    calcAge1: function(birthYear) {
        return 2025 - this.birthYear;
    },

    calcAge2: function() {
        // console.log(this);
        return 2025 - this.birthYear;
    },

    calcAge3: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSum: function() {    
        return `${this.firstName} is a ${this.calcAge3()} year old ${this.job}, and he has ${this.hasDriverLicense ? `a` : `no`} drivers license.`
       
    }


};

console.log(nik.calcAge1());

console.log(nik);
console.log(nik.age); 

console.log(nik.getSum());

----------------------------------------------------------- */


/* 
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = Math.floor(this.mass / (this.height **2));
        // return this.bmi;
    },
}


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = Math.floor(this.mass / (this.height **2));
        // return this.bmi;
    },    
}

mark.calcBMI() > john.calcBMI() ? console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}).`) : console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}).`);

----------------------------------------------------------- */


/* // console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');
// console.log('Lifting weights repetition 7 🏋️‍♂️');
// console.log('Lifting weights repetition 8 🏋️‍♂️');
// console.log('Lifting weights repetition 9 🏋️‍♂️');
// console.log('Lifting weights repetition 10 🏋️‍♂️');

// for loop keeps runing while condition is true
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

----------------------------------------------------------- */


/* 
const nik = [
    'Nik',
    'Chikhradze',
    2025-1984,
    'Engineer',
    ['Mike', 'Steven', 'Bob'],
    true
];

const newNik = [];
const newNik2 = [];

for (let i = 0; i < nik.length; i++) {
    console.log(nik[i], typeof nik[i]);

    newNik.push(typeof nik[i]);
    // newNik2[i] = typeof nik[i];
}

console.log(newNik);
console.log(newNik2);


const years = [1991, 2007, 1969, 2020];

const ages = [];
let currentYear = 2025;

for (let i = 0; i < years.length; i++) {
    ages.push(currentYear - years[i]);
}

console.log(ages);

// Continue and Break statements

console.log('---ALL ITEMS---');
for (let i = 0; i < nik.length; i++) {
    // if(typeof nik[i] !== 'string') continue;

    console.log(nik[i], typeof nik[i]);
}

console.log('---ONLY STRINGS---');
for (let i = 0; i < nik.length; i++) {
    if(typeof nik[i] !== 'string') continue;

    console.log(nik[i], typeof nik[i]);
}

console.log('---STOP WITH NUMBER---');
for (let i=0; i < nik.length; i++) {
    if (typeof nik[i] === 'number') break;

    console.log(nik[i], typeof nik[i]);
}

------------------------------------------------------------ */

/* 
const nik = [
    'Nik',
    'Chikhradze',
    2025-1984,
    'Engineer',
    ['Mike', 'Steven', 'Bob'],
    true
];

const newNik = [];
const newNik2 = [];

for (let i = nik.length-1; i > 0; i--) {
    console.log(i, nik[i], typeof nik[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`exercise ${exercise} - Lifting weights repetition ${rep} 🏋️`);
    }

}


console.log('================================================')



const exerciseType = ['lift', 'jump', 'Push-Up'];

for (let i = 0; i < exerciseType.length; i++) {
    console.log(`--Starting ${exerciseType[i]} Excersise`);

    for (let r = 1; r < 4; r++) {
        console.log(`${exerciseType[i]} ${r}`);
    }
}

------------------------------------------------------------------
 */


/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}


let rep = 1;
while (rep <=10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() *6) + 1;

do {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() *6) + 1;
}
while (dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() *6) + 1;


    if (dice === 6 ) console.log(`you rolled ${dice}`);

}

----------------------------------------------------------- */


/* const calcTip = function (bill) {

    for (let i = 0; i < bill.length-1; i++) {
        bill[i] >= 50 && bill[i] <= 300 ? tips.push(bill[i] * 0.15) && totals.push(bill[i] + tips[i]) : tips.push(bill[i] * 0.2) && totals.push(bill[i] + tips[i]);
    }    
    
}

calcTip(bills);
console.log(tips);
console.log(totals);


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    const bill = bills[i]
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bill+tip);
}

console.log(bills);
console.log(tips);
console.log(totals);



for (let i = 0; i < bills.length-1; i++) {

    bills[i] >= 50 && bills[i] <= 300 ? tips.push(bills[i] * 0.15) && totals.push(bills[i] + tips[i]) : tips.push(bills[i] * 0.2) && totals.push(bills[i] + tips[i]);

}


for (let i = 0; i < bills.length-1; i++) {

    if (bills[i] >= 50 && bills[i] <= 300) {
        tips.push(bills[i] * 0.15);
        totals.push(bills[i] + tips[i]);
    } else {
        tips.push(bills[i] * 0.2);
        totals.push(bills[i] + tips[i]);
    }

}



for (let i = 0; i < arr.length; i++) {
    sum = sum+arr[i];
    console.log(sum);
}


const calcAverage = function (arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
         sum += arr[i];
    }

    return sum/arr.length;
}

console.log(calcAverage (totals));

---------------------------------------------------------- */


/* const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}.`
}


const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
console.log(descPortugal);




function percentageOfWorld1 (population) {

    return population * 100 / 7900;
}

let popOfGeorgia = percentageOfWorld1(3);
console.log(popOfGeorgia);


let percentageOfWolrd2 = function (population) {
    return population * 100 / 7900 + '%';
}

let popUSA = percentageOfWolrd2(340);
console.log(popUSA);


let percentageOfWolrd3 = (population) =>  population * 100 / 7900 + '%';

let popRUS = percentageOfWolrd3(144);
console.log(popRUS);


const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${Math.floor(percentageOfWorld1(population))}% of the world`;
}

let popChina = describePopulation('China', 1411);
console.log(popChina);


const populations = [3, 340, 144, 1411];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])
];

console.log(percentages);


const neighbours = ['Armenia', 'Azerbaijan', 'Turkey', 'Russia'];

console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) console.log('Probably not a central european country :D');

neighbours[3] = 'Russian Federation';
console.log(neighbours);

console.log(neighbours.indexOf('Russian Federation'));

neighbours[neighbours.indexOf('Russian Federation')] = 'Russia';
console.log(neighbours);


const myCountry = {
    country: 'Georgia',
    capital: 'Tbilisi',
    language: 'Georgian',
    population: 3.5,
    neighbours: ['Armenia', 'Azerbaijan', 'Turkey', 'Russia'],
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length-1} neighbouring countries and capital called ${this.capital}.`);
    },
    checkIsland: function() {
        return this.isIsland = !!Boolean(this.neighbours.length) ? true : false;
    }
        
};



console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length-1} neighbouring countries and capital called ${myCountry.capital}.`);

myCountry.population+=2;
console.log(myCountry.population);
myCountry['population']-=2;
console.log(myCountry.population);


myCountry.describe();

myCountry.checkIsland();
console.log(myCountry);



for (let i = 1; i <=50; i++) console.log(`Voter number ${i} is currently voting`);


const populations = [3, 340, 144, 1411];

const percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])
];

const percentages2 = [];

function percentageOfWorld1 (population) {

    return population * 100 / 7900;
}


for (let i = 0; i < populations.length; i++) {

    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages);
console.log(percentages2);


const listOfNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
];

console.log(listOfNeighbours.length);

for(let i = 0; i < listOfNeighbours.length; i++) {

    for (let r = 0; r < listOfNeighbours[i].length; r++) {
        console.log(`Neighbour: ${listOfNeighbours[i][r]}`);
    }

}


function percentageOfWorld1 (population) {

    return population * 100 / 7900;
}


const populations = [10, 1441, 332, 83];
const percentages2 = [];
const percentages3 = [];


for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);

let i = 0;

while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);

---------------------------------------------------------- */

