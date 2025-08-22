// let obj = {}; //objects
const username = {
            first_name : "Anshu",
            last_name : "Rathore",
            roll_num : "0833"
};
console.log(username);
console.log(username.first_name);
console.log(username["first_name"]);

//Array

let fruits = ["apple", "mango","banana",[],username]; ///can store anything
console.log(fruits);
console.log(fruits[0]);

//Types of conversion 
let sum =1+"a";
console.log(sum);//implicit\

//Explicit

let num ="1";
console.log(Number(num));
console.log(typeof Number(num));
console.log( Number(null));
console.log( typeof Number(null));
console.log(typeof Number(undefined));


