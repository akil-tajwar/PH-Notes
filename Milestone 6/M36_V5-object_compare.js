const first = {a:4, b:6, c:3};
const second = {a:4, c:3, b:5};
const compareObject =() =>{
    const firstKey = Object.keys(first); 
    const secondKey = Object.keys(second);
    if(firstKey.length === secondKey.length){
        for(const key of firstKey){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    } 
    else{
        return false;
    }
}
console.log(compareObject());