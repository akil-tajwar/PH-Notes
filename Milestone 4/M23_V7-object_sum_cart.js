let cart = [
    {name: "bag", price: 60, quantity: 1},
    {name: "shirt", price: 27, quantity: 4},
    {name: "pant", price: 38, quantity: 3},
    {name: "shoe", price: 72, quantity: 2},
]
function totalPrice(cart){
    let total = 0;
    for(let i=0; i<cart.length; i++){
        total = total+(cart[i].price*cart[i].quantity);
    }
    return total;
}
console.log(totalPrice(cart));