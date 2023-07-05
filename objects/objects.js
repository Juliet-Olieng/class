// creating an object
let person={
    name:"juliet",
    age:25,
    height:"5ft3Inch",
    friend:{
        name:"amanda",
        age:20
    }
}
let student=new Object();
console.log(person.name);//log value
console.log(person['age']);
console.log(person.friend.name);
// console.log(person['friend'],[age]);
// adding a property
student.name="Mary"
student.age=14
console.log({student});
// changing 
person.age=27;
person.school="AkiraChix";
console.log({person});


let person2=Object.assign(person)//exact copy of person(cloning)
console.log({person2});

let keys=Object.keys(person)//key=property
console.log(keys);
let values=Object.values(person);
console.log({values})