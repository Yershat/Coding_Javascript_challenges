// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
    let v = []; 
    for(let i =0; i < x.length ; i++){
        if(x[i]<5){
            v.push(0);
        } 
        else if(x[i] >= 5){
            v.push(1);
        }
  }
  return v.join("");
}

fakeBin('45385593107843568')