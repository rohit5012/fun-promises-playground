const fs = require("fs/promises");

const findPet = (petname) => {
  return fs
    .readFile(`./data/${petname}.json`, "utf-8")
    .then((results) => {
      return JSON.parse(results);
    })
    .catch((err) => {
      return `soz couldnt find ${petname} :(`;
    });
};

module.exports = findPet;
