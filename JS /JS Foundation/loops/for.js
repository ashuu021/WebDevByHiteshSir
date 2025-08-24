let multiplyArray = [];
let array = [1,2,3,4];

while (array.length > 0) {
    let firstElement = array.shift();   
    multiplyArray.push(firstElement);   
}

console.log(multiplyArray); // [1, 2, 3, 4]