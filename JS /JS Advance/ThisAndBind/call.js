function greet(city) {
this.city=city;
  console.log(`Hey, I'm ${this.name} from ${this.city}`);
}

const person = { name: "Anshu" };

greet.call(person, "Indore");

