/*we can't use for of on an object. so we have to use for in loop in order to capture an object.*/
const bottle = { color: 'yellow', price: 50, isClean: true, capacity: 1 };
for(key in bottle){
    console.log(key, bottle[key]);
}