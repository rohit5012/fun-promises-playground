const request = require("../utils/request");

const fetchAllOwners = () => {
    return request(`/owners`)
        .then((result) => {
            return result.map((owner) => owner.toLowerCase())
        })
        .catch((err) => {
            return err
        })
};

module.exports = fetchAllOwners;

// This function should make a request to the server at the /owners endpoint
// The server will respond with an array of capitalised owner names
// Your function should return a promise that resolves to an array of lowercase owner names