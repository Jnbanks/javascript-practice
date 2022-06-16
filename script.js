//Javascript Reference

//Table of Contents
/* Variables - ,   Math.floor method - ,   */

//         -Tempterature Conversion-
//         Topics: Variables, Math.floor 
//create variable named kelvin and assign it the value of 293
const kelvin = 293;
//create another variable that converts kelvin to celcius, name it celcius
const celcius = kelvin - 273;
console.log(celcius);
//create another variable that converts celcius to newton, name it newton
let newton = celcius * (33/100);
//use the Math.floor() javascript method to turn newton into a rounded number (if it ends up a decimal number)
newton = Math.floor(newton);
//create a variable that can change that gives the value in fahrenheit, named fahrenheit
let fahrenheit = celcius * (9/5) + 32;
console.log(fahrenheit);
//use the Math.floor() javascript method to turn fahrenheit into a rounded number (if it ends up a decimal number)
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)



//create a variable called myAge and set it equal to my age
const myAge = 4;
//Create a variable named earlyYears and save the value 2 to it
let earlyYears = 2;
earlyYears = earlyYears * 10.5; //earlyYears *= 10.5;
console.log(earlyYears);
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal to a variable called laterYears. We’ll be changing this value later.
let laterYears = myAge - 2; 
console.log(laterYears);
//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears = laterYears * 4; //laterYears *= 4;
console.log(laterYears);
//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;
//Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName
const myName = 'Jonathan'.toLowerCase();
console.log(myName);
//Write a console.log statement that displays your name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//The following code gives a user a default name if they don't input a name in the input box
let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

// The above can be written in shorthand, as below. It uses an or operator ||
let userName = '';
let defaultname = username || 'No name';
 
console.log(defaultName); // Prints: No name