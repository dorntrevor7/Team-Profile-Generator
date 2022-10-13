const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "checkbox",
      name: "teamType",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ])
  .then(function (data) {
    // const dataStr = JSON.stringify(data, null, 2);
    const teamPicked = data.teamType;
    teamPicked.forEach((team) => {
      switch (team) {
        case "Manager":
          managerAdd();
          break;
        case "Engineer":
          engineerAdd();
          break;
        case "Intern":
          internAdd();
          break;
      }
    });
  })
  .catch(function (err) {
    throw new Error(err.message);
  });
