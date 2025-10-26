//1st way to use prototype
let computer ={cpu:12};
console.log(`computer ` , computer.__proto__);
let lenovo ={
    screen:"HD",
    __proto__:computer,

};
console.log(lenovo.__proto__);
//2nd way to use prototype
let car={
    wheel:4,
};
let tesla={
    driver:"ai"
};
Object.setPrototypeOf(tesla,car);
console.log(car);
console.log(tesla);
console.log(tesla.__proto__);
console.log(Object.getPrototypeOf(tesla));

