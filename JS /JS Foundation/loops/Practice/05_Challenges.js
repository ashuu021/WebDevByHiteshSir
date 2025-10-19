/*
 * 5. Use a 'for-in' loop to loop through an object
 * containing city populations.
 *
 * Stop the loop when the population of "Berlin" is
 * found and store all previous cities' populations in a
 * new object named 'cityPopulations'.
 *
 */const populations = {
  London: 8900000,
  Paris: 2140000,
  Berlin: 3769000,
  Madrid: 3266000,
  Rome: 2873000
};

const cityPopulations = {};

for (let city in populations) {
  if (city === "Berlin") {
    break; // stop when Berlin is found
  }
  cityPopulations[city] = populations[city];
}

console.log(cityPopulations);
