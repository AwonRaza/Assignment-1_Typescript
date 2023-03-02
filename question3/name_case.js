"use strict";
/**
 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.
 */
//    in lowercase
let person = "Mr Ahammad Raza Khan";
let x = person.toLowerCase();
console.log(x);
//   in uper case
let y = person.toUpperCase();
console.log(y);
// in titlecase
let z = person;
console.log(z.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
