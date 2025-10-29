
 function timeFn() {
    console.log("hey this is a time fn");
    
} 
setTimeout(() => {
    timeFn();
}, 4000);
for (let i = 0; i < 10; i++) {
console.log(i);
}