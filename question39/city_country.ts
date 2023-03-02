function city_country(city:string,country:string){
    return (`"${city} , ${country}"`);

}

let result:string = city_country("Lahore","Pakistan");
console.log(result);
console.log(city_country("parin","farance"));
const fogien:string = city_country("miami","usa");
console.log(fogien);