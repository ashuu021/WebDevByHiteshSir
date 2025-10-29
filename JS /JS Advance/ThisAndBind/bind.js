const person={
   name: "Anshu",
   greet(){
 console.log(`Hey , My name is ${this.name}`);
 }
}
person.greet();
let greetPerson1=person.greet;
greetPerson1();
let bindPerson= person.greet.bind({name:"Rahul"})
bindPerson()

