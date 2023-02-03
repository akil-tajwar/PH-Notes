let names = ["sadia", "nadia", "ladia", "sadia", "padia", "kadia", "ladia"];
function removeDuplicate(names){
    let sortedNames = [];
    for(let i=0; i<names.length; i++){
        if(sortedNames.includes(names[i]) === false){
            sortedNames.push(names[i]);
        }
    }
    return sortedNames;
}
console.log(removeDuplicate(names));