const getAnimal = require('./getAnimal.js');
const getAdjective = require('./getAdjective.js');

const get = () => {
  const animal = getAnimal();
  const adjective = getAdjective(animal.charAt(0));
  return `${adjective} ${animal}`;
};

module.exports = {
  get
};
