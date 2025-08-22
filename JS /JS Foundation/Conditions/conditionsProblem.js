//check num1 is greater than num2
if (num1 > num2) {
    console.log("num1 is greater than num2");
} else if (num1 < num2) {
    console.log("num1 is less than num2");
} else {
    console.log("num1 is equal to num2");
}

//Check if the string is equal to another string
let str1 = "Hello";
let str2 = "Hello";
if (str1 === str2) {
    console.log("str1 is equal to str2");
} else {
    console.log("str1 is not equal to str2");
}
//Check if the this a number

let num1 = 10;
if (typeof num1 === "number") {
    console.log("num1 is a number");
} else {
    console.log("num1 is not a number");
}


// Check if the this a boolean value is true or false
let bool1 = true;
if (bool1 === true) {
    console.log("bool1 is true");
} else {
    console.log("bool1 is false");
}

// or 

if (bool1) {
    console.log("bool1 is true");
} else {
    console.log("bool1 is false");
}


// check if the array is empty
let arr = [];
if (arr.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}