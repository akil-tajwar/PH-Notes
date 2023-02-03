//first method
function stringReverse(oldString){
    let newString = "";
    for(let i=oldString.length-1; i>=0; i--){
        newString += oldString[i];
    }
    return newString;
}
let oldString = "my name is akil";
let reverseString = stringReverse(oldString);
console.log(reverseString);


//second method
function stringReverse2(oldString2){
    let newString2 = oldString2.split('').reverse().join('');
    return newString2;
}
let oldString2 = "i am from bangladesh";
let reverseString2 = stringReverse2(oldString2);
console.log(reverseString2);