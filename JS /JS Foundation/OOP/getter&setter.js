class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(newSalary) {
        this.salary = newSalary;
    }
}
let emp = new Employee("John Doe", 50000);
console.log(emp.getName()); // John Doe
console.log(emp.getSalary()); // 50000

emp.setSalary(60000);
console.log(emp.getSalary()); // 60000