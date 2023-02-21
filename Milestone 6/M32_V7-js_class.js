class Students {
    name;
    department = 'cse';
    section = '6cm';
    id;
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    gotToLibrary(time){
        console.log(`go to library at ${time}`);
    }
    makeDonation(amount){
        console.log(`make a ${amount} taka donation for jashim uncle`)
    }
}
const akil = new Students('akil', 'c201115');
console.log(akil);

const robin = new Students('robin', 'c201108');
console.log(robin);


robin.gotToLibrary('11:00 am');
akil.makeDonation(100);