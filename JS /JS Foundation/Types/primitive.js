let num = 42;
let anotherNum = new Number(42);
console.log(typeof num);//num
console.log(typeof anotherNum);//objects

//null and undefined

let first_name =null;
let last_name =undefined;
console.log(first_name);
console.log(last_name);

//Strings

let myString = "Hello";
let myStringOne = "Hola";
let username = "ashu002";
let oldGreet = myString + "anshu";
console.log(oldGreet);
let newGreet = `hello ${username} !` ;
console.log(newGreet);

//Symbol

let sm1 = Symbol("anshu"); //always unique
let sm2 = Symbol();
console.log(sm1==sm2);
console.log(sm1);


