"use strict";
/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a
list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

 */
let guest = ["murtajis", "hassan", "elia", "raza"];
guest.push("ali");
console.log(guest);
for (let i = 0; i < guest.length; i++) {
    let message = `Dear ${guest[i]},

    I hope this message finds you well. I was wondering if you would like to join me for dinner on 15-2-23 at 8:00pm. It would be great to catch up and spend some quality time together over a delicious meal.
    
    Let me know if you're available and we can decide on a place to meet. I'm looking forward to seeing you soon!
    
    Best regards,
    Aoun Malik`;
    console.log(message);
}
