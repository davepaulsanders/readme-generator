const inquirer = require("inquirer");
const templateCreator = require("./src/template");
const createFile = require("./utils/fileCreation");

const readMeQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your project name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description of your project!",
        validate: (projectInfo) => {
          if (projectInfo) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter the command to install dependencies",
        validate: (heading) => {
          if (heading) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter command to run program",
        validate: (heading) => {
          if (heading) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the emails of contributers separated by spaces",
        validate: (heading) => {
          if (heading) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUserName",
        message:
          "Please enter the github usernames of contributers separated by spaces",
        validate: (heading) => {
          if (heading) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "contributions",
        message: "Please enter details about contributions to the project",
        validate: (heading) => {
          if (heading) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "tests",
        message: "Please enter the command used to run tests",
        validate: (heading) => {
          if (heading) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "Please choose a licence",
        choices: ["MIT", "ISC", "CC", "Apache", "IBM"],
        validate: (heading) => {
          if (heading) {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      return answers;
    });
};

readMeQuestions()
  .then((answers) => {
    // Create template from project answers
    console.log(answers);
    return templateCreator(answers);
  })
  .then((fileTemplate) => {
    // Build the file
    createFile(fileTemplate);
  });
