"use strict";
let current_user = ["ali789", "malik1214", "prince23", "prince55", "azadparinda"];
let new_user = ["prince55", "prince23", "ladla", "baloch09", "masomm890"];
for (let a of new_user) {
    if (current_user.includes(a)) {
        console.log("please enter new user name this user name already exist");
    }
    else {
        console.log("user name is available");
    }
}
