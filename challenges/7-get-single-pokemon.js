const inquirer = require("inquirer");
const axios = require("axios");

let number;
inquirer
  .prompt([
    {
      name: "id",
      message: "Please enter the number!",
    },
  ])
  .then((answers) => {
    console.info("Your number is :", answers.id);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${answers.id}`)
      .then((response) => {
        console.log(response.data.name);
      })
      .catch((error) => {
        console.log("Pokemon does not exist");
      });
  });
