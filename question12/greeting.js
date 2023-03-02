"use strict";
/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.

*/
let names = ["ali", "asad", "amjad", "asghar", "akbar"];
for (let i = 0; i < names.length; i++) {
    let message = `Dear ${names[i]} Welcome to the new friend zone`;
    console.log(names[i], message);
    console.log();
}
