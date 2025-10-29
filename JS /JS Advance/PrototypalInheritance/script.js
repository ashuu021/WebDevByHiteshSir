function Person(name) {
    this.name=name;
}

Person.prototype.greet=function () {
console.log(`Hey there!! My name is ${this.name}`);

}
let anshu= new Person("Anshu");
anshu.greet()