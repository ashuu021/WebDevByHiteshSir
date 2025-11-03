function outer() {
    let counter =2;
   return function () {
    counter++;
    return counter;
   } ;
}

let count=outer();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
