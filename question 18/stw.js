"use strict";
let country = ["usa", "Newzland", "Canida", "Australia", "Peru"];
console.log(country);
let alpha = country.slice().sort(); // slice method make a coppy of orignal array an we apply sotr on it and origna array not changed
console.log(alpha);
console.log(country);
let realpha = country.slice().sort((a, b) => b.localeCompare(a)); // localcompare method compare two values either value is greater then less then or equal 
console.log(realpha);
console.log(country);
country.reverse(); // reverse method we changed the order
console.log(country);
country.reverse();
console.log(country);
country.sort();
console.log(country);
country.sort((a, b) => b.localeCompare(a));
console.log(country);
