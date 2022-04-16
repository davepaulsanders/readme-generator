const inquirer = require("inquirer");
const templateCreator = require("./src/template");
const {
  folderExist,
  createFolder,
  createFile,
} = require("./utils/fileCreation");

// lists of questions to create readme
const readMeQuestions = () => {
  return inquirer
    .prompt([
      {
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
        name: "description",
        message: "Please enter a description of your project!",
        validate: (projectInfo) => {
          if (projectInfo) {
            return true;
          } else {
            console.log("Please enter a description");
            return false;
          }
        },
      },
      {
        name: "installation",
        message: "Please enter the command to install dependencies",
        validate: (installation) => {
          if (installation) {
            return true;
          } else {
            console.log("Please enter installation commands!");
            return false;
          }
        },
      },
      {
        name: "usage",
        message: "Please enter command to run program",
        validate: (usage) => {
          if (usage) {
            return true;
          } else {
            console.log("Please enter commands to run!");
            return false;
          }
        },
      },
      {
        name: "email",
        message: "Please enter the emails of contributers separated by spaces",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter at least one email!");
            return false;
          }
        },
      },
      {
        name: "githubUserName",
        message:
          "Please enter the github usernames of contributers separated by spaces",
        validate: (gitHub) => {
          if (gitHub) {
            return true;
          } else {
            console.log("Please enter at least one github username!");
            return false;
          }
        },
      },
      {
        name: "contributions",
        message: "Please enter details about contributions to the project",
        validate: (contributions) => {
          if (contributions) {
            return true;
          } else {
            console.log("Please enter instructions for contributers");
            return false;
          }
        },
      },
      {
        name: "tests",
        message: "Please enter the command used to run tests",
        validate: (tests) => {
          if (tests) {
            return true;
          } else {
            console.log("You must enter a command to run tests!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "Please choose a licence",
        choices: ["MIT", "ISC", "CC", "Apache", "IBM"],
      },
    ])
    .then((answers) => {
      return answers;
    });
};

// asks questions
readMeQuestions()
  .then((answers) => {
    // Create template from project answers
    return templateCreator(answers);
  })
  .then((fileTemplate) => {
    // check if dist folder has already been built
    const exists = folderExist();
    if (exists) {
      createFile(fileTemplate);
    } else {
      // if it hasn't, build the folder first
      createFolder().then(createFile(fileTemplate));
    }
  });
