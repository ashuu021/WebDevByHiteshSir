class Calculator { 
    static add(a, b) {
        return a + b;
    } 
}
// let calc = new Calculator();  // No need to create an instance
    // console.log(calc.add(5, 10));  // This would be incorrect
    
console.log(Calculator.add(5, 10)); 