// Use a for-in loop to loop through an object containing city populations.
//  Stop the loop when the population of "Berlin" is found and store all previous cities' populations in a new object named cityPopulations.
let citiesPopulation = {
  "London": 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000
};
let cityPopulations = {};  // new object to store previous cities

for (let city in citiesPopulation) {
    if (city === "Berlin") {
        break; // stop the loop when Berlin is found
    }
    cityPopulations[city] = citiesPopulation[city]; // copy population
}

console.log(cityPopulations);
