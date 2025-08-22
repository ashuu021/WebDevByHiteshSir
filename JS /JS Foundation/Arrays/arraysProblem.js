// Make an array and acess the first element 

let teaTypes = ["Green tea","Lemon tea","Oolong tea","Black tea"];
console.log(teaTypes[0]);

//// Make an array for cities and acess the third element and store this to new variable called favCities
let cities = new Array("London","Tokyo","Paris"," New York");
let favCities =cities[3];
console.log(favCities);
// Push and pop
let teaType = ["Green tea","Lemon tea","Oolong tea","Black tea"];
teaType.push("Massala tea")

console.log(teaType);
const popTea =teaType.pop();

console.log(teaType);
// Insert a new element in the array and remove one 
let otherTeaType = ["Green tea","Lemon tea","Oolong tea","Black tea"];
otherTeaType.splice(1,1,"Massala tea")
console.log(otherTeaType);


//Softcopy of an array
let otherTeaType1 = ["Green tea","Lemon tea","Oolong tea","Black tea"];
let Softcopy=otherTeaType1;
otherTeaType1.pop();
console.log(Softcopy);

//hardcopy of an array
let popularCities=["Indore","kanpur","Dhar"]
let hardcopyCities =[...popularCities];
popularCities.pop();
console.log(hardcopyCities);
// // or
// let hardcopyCities = popularCities.slice()

// console.log(hardcopyCities);


// lenght of array and check the city is in list or not

let lenOfpopularCites = popularCities.length;
console.log(lenOfpopularCites);
let isCityinList = popularCities.includes("Indore");
console.log(isCityinList);


// Merge to aaray using concat

let someName = ["anshu","ansh"];
let moreName = ["vansh","ganesh"];

const allNames = someName.concat(moreName);
console.log(allNames);


