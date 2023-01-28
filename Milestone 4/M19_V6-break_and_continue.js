//break stops the loop when matches the condition given
var colors = ['yellow', 'red', 'green', 'orange', 'blue'];
for(var i=0; i<=colors.length-1; i++){
    if(colors[i]=='orange'){
        break;
    }
    console.log(colors[i]);
}


//continue skips the element and go to the next element
var colors2 = ['yellow', 'red', 'green', 'orange', 'blue'];
for(var j=0; j<=colors2.length-1; j++){
    if(colors2[j]=='orange'){
        continue;
    }
    console.log(colors2[j]);
}