/*
 * 4. Write a function named 'processTeaOrder' that takes
 * another function, 'makeTea', as a parameter and calls it
 * with the argument 'earl grey'.
 *
 * Return the result of calling 'makeTea'.
 *
 */
function makeTea(typeOfTea){
return `makeTea : ${typeOfTea}`;
}
function processTeaOrder(teaFunction){
return `earl grey`;
}
let orderTea = processTeaOrder(makeTea);
console.log(orderTea);
