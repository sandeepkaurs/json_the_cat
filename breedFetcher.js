const request = require('request');

const userInput = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {
  // console.log(breedName)
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response) => {
    if (error) {
      callback(`Request not made: ${error}`, null);
      return;
    }
    const body = response.body;
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);

    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Request failed to find breed ${breedName}`, null);
    }

  });
};

fetchBreedDescription(userInput, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

