const adjectives = require('./data/adjectives.js');
const getRandomItemFromArray = require('./lib/getRandomItemFromArray.js');

const getAdjective = (letter) => getRandomItemFromArray(adjectives[letter]);

module.exports = getAdjective;
