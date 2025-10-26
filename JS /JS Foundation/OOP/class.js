

class Vehicle{
    constructor(model,make){
        this.make=make;
        this.model=model;
    }
    start(){
        return `${this.make} is a car from ${this.model}`
    }
}
let mycar=new Vehicle("Tata","Safari");
console.log(mycar.start());


