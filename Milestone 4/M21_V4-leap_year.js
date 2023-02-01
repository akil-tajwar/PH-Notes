function checkLeapYear(year){
    var ans=year%4;
    if(ans==0){
        console.log('this year is leap year');
    }
    else{
        console.log('this year is not a leap year');
    }
}
checkLeapYear(2020);