const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "teamName",
    },
  ])
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    throw new Error(err.message);
  });
