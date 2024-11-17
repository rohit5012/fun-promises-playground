const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "Name",
      message: "What is your name?",
    },
  ])
  .then((answers) => {
    console.info("Hello ", answers.Name);
  });
