//with object literal
const player = {};
player.name = 'Shakib Al Hassan';
player.position = 'Allrounder';
player.speciality = function(){
    console.log('show your magic');
}

//with Class
class Student{
    name = 'sadia';
    roll = '53';
    result = 'failed';
    constructor(age){
        this.age = age;
    }
}
const student1 = new Student(23);
console.log(student1);