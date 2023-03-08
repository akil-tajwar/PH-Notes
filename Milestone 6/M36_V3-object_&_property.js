const bottle = { color: 'yellow', price: 50, isClean: true, capacity: 1 };

//capturing keys and variables separately and together
const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

const pair = Object.entries(bottle);
console.log(pair);

//property delete
console.log(bottle);
Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isClean;
console.log(bottle);
/*if i seal an object, i won't be able to add or delete any property.
but i can modify it. but if i use freeze it will allow me neither
modify or delete and add any property in the object.*/