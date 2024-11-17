const fetchCatsByOwner = require("./1-fetch-cats-by-owner");
const fetchAllOwners = require("./2-fetch-all-owners");

const fetchAllCats = () => {
  return fetchAllOwners().then((owners) => {
    const catPromises = owners.map((owner) => fetchCatsByOwner(owner));
    return Promise.all(catPromises).then((cats) => {
      const allCats = cats.flat();
      allCats.sort();
      return allCats;
    });
  });
};

module.exports = fetchAllCats;

// WHY DIDN'T IT WORK WHEN WE MADE OUR OWN ARRAY?
// e.g. const allCats = []
// allCats.push
