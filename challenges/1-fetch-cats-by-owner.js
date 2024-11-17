const request = require("../utils/request");

const fetchCatsByOwner = (owner) => {
    return request(`/owners/${owner}/cats`)
        .then((result) => {
            return result
        })
        .catch((err) => {
            return err
        })
    }

module.exports = fetchCatsByOwner;