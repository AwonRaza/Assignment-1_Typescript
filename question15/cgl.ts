
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