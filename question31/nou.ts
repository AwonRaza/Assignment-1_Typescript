
let list:string[]=["ali","farhan","raza"];
console.log(list); 

list.splice( 0,list.length); // here we remove values form array 
if (list.length === 0){
    console.log("we need some user!");
}
