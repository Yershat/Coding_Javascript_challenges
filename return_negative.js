function makeNegative(num) {
    let neg = "-"
    if(num <= 0){
        return num;}
  
    else if(num > 0){
        let result = neg.concat(num);
        return parseInt(result);
    }
    }
  