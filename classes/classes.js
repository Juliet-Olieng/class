class Person{
    constructor(name,age,height){
        this.name=name
        this.age=age
        this.height=height
    }
    greet(){
        console.log('hello');
    }
}
let person =new Person('henry',26,'7fts')
console.log({person});

//inheritance
class Robot extends Person{
    constructor(name,age,height){
        super(name,age,height)
    }
};
let robot= new Robot('Elsa',3,'5ft')
console.log({robot});

class CrazyRobot extends Person{
    constructor(name,age,height,dominate){
        super(name,age,height)
        this.walk=true
        this.height='7ft'
        this.dominate=dominate
    }
    world(){
        console.log(`i will ${this.dominate}the world`);

    }
}
let Crazy=new CrazyRobot('Felix',4,'5ft','enslave')
Crazy.world
class LovingRobot extends CrazyRobot{
    constructor(name,age,height,dominate){
        super(name,age,height,dominate)
    }
}
let loving= new LovingRobot('Amanda',10,'5ft','love')
console.log({loving});