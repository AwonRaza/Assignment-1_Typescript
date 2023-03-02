
let guest:string[]=["murtajis","hassan","elia","raza"];
guest.push("ali");
console.log(guest);

for(let i = 0; i<guest.length;i++){
    let message:string = `Dear ${guest[i]},

    I hope this message finds you well. I was wondering if you would like to join me for dinner on 15-2-23 at 8:00pm. It would be great to catch up and spend some quality time together over a delicious meal.
    
    Let me know if you're available and we can decide on a place to meet. I'm looking forward to seeing you soon!
    
    Best regards,
    Aoun Malik`

    
    console.log(message);

}
console.log("Hassan , raza and elia say that we are sorry to say that we are not coming due to some family issues");

guest[1] = "malik";
guest[2] = "aoun";
guest[3] = "guraha";

for(let i = 0; i<guest.length;i++){
    let message:string = `Dear ${guest[i]},

    I hope this message finds you well. I was wondering if you would like to join me for dinner on 15-2-23 at 8:00pm. It would be great to catch up and spend some quality time together over a delicious meal.
    
    Let me know if you're available and we can decide on a place to meet. I'm looking forward to seeing you soon!
    
    Best regards,
    Aoun Malik`

    
    console.log(message);
};
//   we add guest in the bigning of the array
console.log("Hi I am Happy to annouce that i am found a bigger table.so i want to invite more friends");
guest.unshift("awais");
// we add guest in the middle of the array

let newguest= Math.floor(guest.length/2);

guest.splice(newguest,0,"Hani"); // here 0 show we dont nedd to remove any existing value


// use append to add new guest in the end of the array
// append doesnot exist on type string
guest.push("mesum");

for(let i = 0; i<guest.length;i++){
    let message:string = `Dear ${guest[i]},

    I hope this message finds you well. I was wondering if you would like to join me for dinner on 15-2-23 at 8:00pm. It would be great to catch up and spend some quality time together over a delicious meal.
    
    Let me know if you're available and we can decide on a place to meet. I'm looking forward to seeing you soon!
    
    Best regards,
    Aoun Malik`

    
    console.log(message);


};
//  now q 17 start
console.log("q17 start ");

console.log("am Sorry to say that i can invite only 2 people  from my lsit");
for(let i =2 ; i<guest.length;){
    let left = guest.pop();
    console.log(`Dera ${left} Am Sorry We can not invite you for dinner`);
};

for(let a of guest){
    console.log(`Dear ${a} Happy to say thay you are invited`);
}


for(let i =0 ; i<=guest.length;i++){
    let left = guest.pop();
};

console.log(guest);