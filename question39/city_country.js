"use strict";
function city_country(city, country) {
    return (`"${city} , ${country}"`);
}
let result = city_country("Lahore", "Pakistan");
console.log(result);
console.log(city_country("parin", "farance"));
const fogien = city_country("miami", "usa");
console.log(fogien);
