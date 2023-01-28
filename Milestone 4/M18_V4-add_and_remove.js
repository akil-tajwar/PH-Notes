//push() method insert a new element in the LAST position of an array
var num1 = [45, 12, 75, 63,72];
num1.push(28);
console.log(num1);


//pop() method delete LAST element from an array
var num2 = [23, 56, 12, 84, 17];
num2.pop();
console.log(num2);




//unshift() method insert a new element in the FIRST position an array
var num3 = [45, 12, 75, 63,72];
num3.unshift(28);
console.log(num3);


//shift() method delete FIRST element from an array
var num4 = [23, 56, 12, 84, 17];
num4.shift();
console.log(num4);


// slice(start position, end position) will copy the given array elements and make a shadow copy.
var names = ['sadia', 'nadia', 'kadia', 'chadia', 'padia'];
var names2 = names.slice(1,3);
console.log(names2);


// splice() will remove elements from the main array.
var cities = ['ctg', 'dhaka', 'komilla', 'rajshahi', 'khulna'];
console.log(cities.splice(1,3));


//For details search this link

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  *
                                                                                                                    *
 *   https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/ *
                                                                                                                    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  */
