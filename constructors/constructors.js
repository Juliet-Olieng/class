function Person(name,age,height){
    this.name=name
    this.age=age
    this.height=height
};
let person=new Person('agnes',23,'4ft');
console.log(person);
let person2=new Person('ann',20,'6ft');
console.log(person2);

Person.prototype.weight=50;
console.log({person});
console.log(person.weight);
person2.weight=60
console.log({person2});
console.log('weight2',person2.weight);
//
console.log(person instanceof(Person))



