// Abstraction example in JavaScript

class Animal {
    constructor(name) {
        this.name = name;
    }

    // Abstract method
    makeSound() {
        throw new Error("This method must be overridden!");
    }
}

class Dog extends Animal {
    makeSound() {
        return `${this.name} says Woof!`;
    }
}

class Cat extends Animal {
    makeSound() {
        return `${this.name} says Meow!`;
    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

console.log(dog.makeSound()); // Buddy says Woof!
console.log(cat.makeSound()); // Whiskers says Meow!