class Bird{
    fly(){
        return "Bird is flying"
    }
}
class Airplane{
    fly(){
        return "Airplane is flying"
    }
}

let bird=new Bird();
let airplane=new Airplane();
console.log(bird.fly());
console.log(airplane.fly());