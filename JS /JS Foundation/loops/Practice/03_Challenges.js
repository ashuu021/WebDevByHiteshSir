/*
 * 3. Use a 'for-of' loop to iterate through the array [1,
 * 2, 3, 4, 5] and stop when the number '4' is found.
 *
 * Store the numbers before '4' in an array named
 * 'smallNumbers'.
 *
 */
let numbers=[1, 2, 3, 4, 5];
let smallNumbers =[];
for (const nums of numbers) {
    if (nums===4) {
        break
    }
    smallNumbers.push(nums);
}
console.log(smallNumbers);
