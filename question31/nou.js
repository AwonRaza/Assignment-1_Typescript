"use strict";
let list = ["ali", "farhan", "raza"];
console.log(list);
if (list.length === 0) {
    console.log("we need some user!");
}
list.splice(0, list.length);
if (list.length === 0) {
    console.log("we need some user!");
}
