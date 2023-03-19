/*map takes the elements of an array and works on the opperation that given in the function*/
const num = [3, 5, 2, 7];
const doubleIt = num => num*2;
console.log(num.map(doubleIt));

/*join takes the elements (strings) of an array and combines them together. 
it will convert the array into string*/
const names = ['sadia', 'kadia', 'padia', 'ladia'];
console.log(names.join(' '));
console.log(typeof names.join(' '));