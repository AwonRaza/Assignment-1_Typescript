let city:string = "lahore";
console.log(city.length == 4?"i predict":"i predict");
console.log(city.length == 4);
console.log(city == "lahore"? "i predict":"i predict");

let country:string = "pakistan";
console.log(country.length == 7?"i predict":"i predict");
console.log(country.length == 7);

let nm:string = "NAME".toLowerCase()

console.log(nm == "NAME"?"NM in capital letter":"in small");
console.log(nm =="NAME");

let tc:string = "Name".toLowerCase()

console.log(nm == "name"?"NM in lower case":"in capital");
console.log(nm =="name");




let numb:number = 90;
if(numb >80){
    console.log(`${numb} is greater then 80`);
        if(numb < 100)
               console.log(`${numb} is less then 100`);
                 if(numb >= 90)
                     console.log(`${numb} is equal to 90`);
                        if(numb <= 90)
                            console.log(`${numb} is equal to 90`);

                                if(numb == 90)
                                  console.log(`${numb} i equal to 90`);
                                    if(numb !=100)
                                          console.log(`${numb} is not equal to 100`)

};




let num1 = 80;
let num2 = 70;
let num3 = 90;
if(num1 >num2 && num1<num3){
    console.log(`${num1} is bigger then ${num2} and smaller then ${num3}`);

}

console.log(num1>num3 || num3>num2?"condition is print if one of then are true":"if both are false then else print");


let ana = ["a","b","c","d","e"];
if (ana.includes("d")){
    console.log("d is in ana array");
}

let nia = ["a","b","c","d","e"];
if (!nia.includes("z")){
    console.log("z is not in nia array");
}


