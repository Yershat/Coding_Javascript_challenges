function countPositivesSumNegatives(input) {
    let negative = [];
    let positive = [];
    let whole = [];
    
    for(let i = 0 ; i < input.length; i++){
        if(input[i]<0){
            negative.push(input[i]);
        }
        else if(input[i] >0){
            positive.push(i);
        }
    }
    console.log(negative);
 
}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])