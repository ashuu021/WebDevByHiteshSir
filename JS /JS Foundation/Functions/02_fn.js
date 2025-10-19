/*
 * 2. Create a function named 'orderTea' that takes one
 * parameter, 'teaType'. Inside this function, create
 * another function named 'confirmOrder' that returns a
 * message like "Order confirmed for chai".
 *
 * Call 'confirmOrder' from within 'orderTea' and return the
 * result.
 *
 */
function orderTea(teaType) {
    
    function confirmOrder() {
        return `${teaType} Orderd confirmed`
    }
return confirmOrder();
}

let Order=orderTea("Oolong tea !");
console.log(Order);
