function greet(city) {
  console.log(`Hey, I'm ${this.name} from ${city}`);
}

const person = { name: "Anshu" };

greet.apply(person, ["Indore"]);
