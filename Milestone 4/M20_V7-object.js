var shop = {
    book: 3,
    pen: 5,
    calculator: 1,
    pencil: 2
}
console.log(shop);


//with this method we can see properties and values of an object separately
var properties = Object.keys(shop);
var propertyValues = Object.values(shop);
console.log(properties);
console.log(propertyValues);


//first method to change a value of an object
shop.pen = 6;
console.log(shop, 'pen value has changed');


//second method to change a value of an object
shop['book'] = 8;
console.log(shop, 'book value has changed');


//third method to change a value of an object
var valueUpdate = 'pencil';
shop[valueUpdate] = 4;
console.log(shop, 'pencil value has changed');