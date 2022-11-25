const { fetchBreedDescription } = require('./breedFetcher');

const userInput = process.argv[2];

fetchBreedDescription(userInput, (error, response) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(response);
  }
});