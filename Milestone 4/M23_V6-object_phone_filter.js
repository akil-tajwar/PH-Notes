const phones = [
    {name: "symphony", color: "blue", price: 12000, storage: "32gb"},
    {name: "oppo", color: "black", price: 24000, storage: "64gb"},
    {name: "xaomi", color: "white", price: 14000, storage: "32gb"},
    {name: "nokia", color: "purple", price: 10000, storage: "16gb"}
]
function filter(phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){
        // console.log(phones[i]);
        if(phones[i].price<cheapest.price){
            cheapest = phones[i];
        }
    }
    return cheapest;
}
console.log(filter(phones));