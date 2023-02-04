let cart = [
    {name: "bag", price: 600},
    {name: "shirt", price: 270},
    {name: "pant", price: 380},
    {name: "shoe", price: 720},
]
function totalPrice(cart){
    let total = 0;
    for(let i=0; i<cart.length; i++){
        total = total+cart[i].price;
    }
    return total;
}
console.log(totalPrice(cart));