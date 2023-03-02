"use strict";
let uname = ["ali", "asad", "khan", "malik", "asghar", "akbar", "admin", "shan", "farhan"];
for (let a of uname) {
    if (a == "admin") {
        console.log("Hello Admin!");
    }
    else {
        console.log(`Hello ${a} thank you for login again`);
    }
}
