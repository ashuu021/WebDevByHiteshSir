class Vehicle{
    constructor(model,make){
        this.make=make;
        this.model=model;
    }
    start(){
        return `${this.make} is a car from ${this.model}`
    }
}
class Car extends Vehicle{
 drive(){
    return ` ${this.model}:  is a example of inheritance.`
 }
}
let mycar=new Car("Tata","Safari");
console.log(mycar.drive());
