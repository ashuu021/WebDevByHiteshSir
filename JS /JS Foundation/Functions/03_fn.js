/*
 * 3. Write an arrow function named 'calculateTotal' that
 * takes two parameters: 'price' and 'quantity'. The
 * function should return the total cost by multiplying the
 * 'price' and 'quantity'.
 *
 * Store the result in a variable named 'totalCost'.
 *
 */
const calculateTotal = (price, quantity) => {
    let total=price*quantity;
    return total;
};
let totalCost=calculateTotal(10,20);
console.log(totalCost);
