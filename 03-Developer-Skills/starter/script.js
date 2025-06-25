// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const temperatures = [-10, 3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [22, -9, 35];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return (max - min) / 2;
};

// function to recieve 2 arraies of temperatures;

// 1) Understanding the problem:
// - with 2 arrays shpuld we implement the functionality twice or merge arrays?

// 2) How can we merge arrays;

let result = calcTempAmplitude(temperatures, temperatures2);
console.log(result);

const newArr = temperatures2.reverse();
console.log(newArr);

 */
/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    value: Number(prompt('Degrees Celsius')),
    value: 10,
  };

    console.log(measurement);
    console.table(measurement);

    console.log(measurement.value);
    console.warn(measurement.value);
    console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

1) Identify the bug
console.log(measureKelvin());

Using debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return (max - min) / 2;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 2, 4, 5]);
// Identify
console.log(amplitudeBug);
 */
// '... 17 C in 1 days ... 21 C in 2 days ...23 C in 3 days...';

// how to concatenate string from multiple array elements

// debugger;

// 1) Understanding the problem:
// - array transformed into string, separated by ...
// - what is X days? Answer: index+1

// 2) Breaking into problems:
// - transform array into string,
// - transform each elemeny to string with C
// - string needs to contain day
// - add ... between strings, to the begining and the end

/* const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}C ... ${data1[1]}C ... ${data1[2]}`);

const printForcast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}C in ${i + 1} days `;
  }

  str = str + ' ...';

  return str;
};

let result = printForcast(data1);
console.log(result);

const printForcast2 = function (arr) {
  arr.forEach((element, index) => {
    arr[index] = element + `C in ${index + 1} days`;
  });

  let str;
};

const myArr = printForcast2([17, 21, 23]);
console.log(myArr);
 */

// TODO

/* 
I,m building a time tracking app for freelancers. To build this app we need a function that receives daily work hours for a certain week, and returns:

1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
6. Whether the week was full-time (35 hours or more worked)

TEST DATA: [7.5, 8, 6.5, 0, 8.5 4, 0]

 */

// const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];

// const workWeek = {};

const analyzeWeek = function () {
  const workWeek = {};
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  workWeek.weekHours = [];
  for (let i = 0; i < weekDays.length; i++) {
    let usrData = Number(
      prompt(`please input number of worked hours for ${weekDays[i]}`)
    );
    workWeek.weekHours.push(usrData);
  }

  workWeek.totalHours = 0;
  for (let r = 0; r < workWeek.weekHours.length; r++) {
    workWeek.totalHours = workWeek.totalHours + workWeek.weekHours[r];
  }

  workWeek.longestDay = '';
  let mostBusy = 0;
  for (let t = 0; t < workWeek.weekHours.length; t++) {
    mostBusy < workWeek.weekHours[t]
      ? (mostBusy = workWeek.weekHours[t])
      : mostBusy;
  }
  workWeek.longestDay = weekDays[workWeek.weekHours.indexOf(mostBusy)];

  workWeek.daysWorked = 0;
  for (let s = 0; s < workWeek.weekHours.length; s++) {
    workWeek.weekHours[s] > 0
      ? (workWeek.daysWorked = workWeek.daysWorked + 1)
      : workWeek.daysWorked;
  }

  workWeek.avgDailyHours = workWeek.totalHours / workWeek.daysWorked;

  workWeek.fullTime = true;

  workWeek.totalHours >= 35
    ? (workWeek.fullTime = true)
    : (workWeek.fullTime = false);

  return workWeek;
};

console.log(analyzeWeek());
