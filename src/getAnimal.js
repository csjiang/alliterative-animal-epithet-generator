const getRandomItemFromArray = require('./lib/getRandomItemFromArray.js');
const ANIMALS = require('./data/animals.js');

const getAnimal = () => {
  return getRandomItemFromArray(ANIMALS);
};

module.exports = getAnimal;
