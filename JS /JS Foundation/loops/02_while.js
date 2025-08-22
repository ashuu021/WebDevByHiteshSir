// Write a program in JavaScript that uses a while loop to calculate the sum of all even numbers between 1 and 50.
let i = 1;
let sum =0;
 while (i<=50) {
    if (i%2==0) {
        sum +=i;
   }
    i++
  }
  console.log(sum);

