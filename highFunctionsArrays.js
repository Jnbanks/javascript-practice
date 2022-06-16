const companies = [
    {name: "C1", category: "Finance", start: 1981, end: 2003},
    {name: "C2 ", category: "Retail", start: 1992, end: 2008},
    {name: "C3", category: "Auto", start: 1999, end: 2007},
    {name: "C4", category: "Retail", start: 1989, end: 2010},
    {name: "C5", category: "Technology", start: 2009, end: 2014},
    {name: "C6", category: "Finance", start: 1987, end: 2010},
    {name: "C7", category: "Auto", start: 1986, end: 1996},
    {name: "C8", category: "Technology", start: 2011, end: 2016},
    {name: "C9", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



// ===== FOREACH
// == forEach
// == first let's show this with a traditional for loop
// for(let i = 0; i < companies.length; i ++) {
//     console.log(companies[i]);
// }
// == forEach
// companies.forEach(function(company) {
//     console.log(company);
//     //console.log(company.name);
// })



// ==== FILTER     Get people 21 and over
// == filter
// == first the traditional for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// == filter
// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });
// console.log(canDrink);

// == ES6 Arrow Functions!
// == filter
const canDrink = ages.filter(age => age >= 21);
//console.log(canDrink);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === "Retail") {
//         return true;
//     }
// });

const retailCompanies = companies.filter(company => company.category === "Retail");

const autoCompanies = companies.filter(company => company.category === "Auto");

// console.log(retailCompanies);
// console.log(autoCompanies);

// Get 80s companies

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);

//console.log(eightiesCompanies);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => company.end - company.start >= 10);

//console.log(lastedTenYears);



// MAP

//Create array of company names
const companyNames = companies.map(function(company) {
    return company.name;
});

//console.log(companyNames);

const test = companies.map(function(company) {
    return 1;
});
//console.log(test);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// below is the shorthand of lines 92, 93 and 94, or the lines above
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
//console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
//console.log(agesSquare);

const agesTimesTwo = ages.map(age => age * 2);
//console.log(agesTimesTwo);

const agesSquareTwo = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

//console.log(agesSquareTwo);

//The above code shows how powerful map can be in terms of manipulating data. You can take a certain key of each object array item and perform multiple mathematical operations on it, and likely even more.



// SORT

// sort companies by start year, earliest to most recent
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
//console.log(sortedCompanies);

//the above code can be written as below. it uses a ternary operator with the "? 1 : -1"
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies)