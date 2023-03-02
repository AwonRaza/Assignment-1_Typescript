let numb = [1,2,3,4,5,6,7,8,9];
let ordinal;
for(let i=0;i<numb.length;i++){
    if(numb[i] === 1 || numb[i]%10 === 1){
        ordinal ="st";
    }else if(numb[i] === 2 || numb[i]%10 === 2 ){
        ordinal ="nd";
    }else if(numb[i] === 3 || numb[i]%10 === 3 ){
        ordinal ="rd";
    }else{
        ordinal ="th";
    }
   




    console.log(numb[i]+ ordinal);
}

