// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    x= str.split(" ");
    l =[];
    
    for(let i = 0; i < x.length; i++ ){
        l.push(x[i].split("").reverse().join(""));
    }
    return l.join(" ");
}
reverseWords("abc cba dae")