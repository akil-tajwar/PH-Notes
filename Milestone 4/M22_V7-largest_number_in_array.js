function largestNumber(numbers){
    let largest=numbers[0];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i]>largest){
            largest=numbers[i];
        }
    }
    return largest;
}
let numbers=[23, 14, 52, 32, 64, 25];
let highest = largestNumber(numbers);
console.log(highest);