/*we can use filter or find to put conditions on the elements of an array. 
But the difference is filter will show all the elements that matches the conditoin. 
And find  will show only the first element that matches the condition.*/

const numbers = [12, 33, 17, 42, 23, 64, 24];
const bigNumbers = numbers.filter(numbers => numbers > 30);
console.log(bigNumbers);

const odd1 = numbers.filter(numbers => numbers % 2 !== 0);
const odd2 = numbers.find(numbers => numbers % 2 !== 0);
console.log(odd1);
console.log(odd2);



const students = [
    { id: 1, name: 'sadia', department: 'english', result: 'fail' },
    { id: 2, name: 'nadia', department: 'cse', result: 'pass' },
    { id: 3, name: 'kadia', department: 'eee', result: 'fail' },
    { id: 4, name: 'padia', department: 'physocology', result: 'fail' },
    { id: 5, name: 'ladia', department: 'mechanical', result: 'pass' }
]

const graduates = students.filter(students => students.result === 'pass');
console.log(graduates);