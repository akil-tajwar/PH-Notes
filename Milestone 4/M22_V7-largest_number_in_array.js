//first method
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


//second method
let num=[42, 53, 12, 71, 33];
let max = Math.max(...num);
console.log(max);
