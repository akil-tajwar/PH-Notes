//"..."(spread operator) is used to get the elements of an array
const ar1 = [32, 53, 12];
const ar2 = [71, ...ar1, 85, 23];
console.log(ar2);

//for numbers we get max value by applying this method
const num = Math.max(43, 12, 32);
console.log(num);

//for array elements we have to get those elements first, to get the max element
const ar3 = [43, 13, 32];
console.log(Math.max(...ar3));