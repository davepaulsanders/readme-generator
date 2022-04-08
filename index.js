const inquirer = require("inquirer");
const templateCreator = require("./src/template");
const createFile = require("./utils/fileCreation");
const projectNameDescription = () => {
  return inquirer.prompt([
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
  ]);
};

const tableOfContents = (readMeData) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "tableHeadings",
        message:
          "Please enter your table of contents headings (spaces in between)!",
        validate: (heading) => {
          if (heading) {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((tableOfContentsData) => {
      readMeData.tableOfContents = tableOfContentsData.tableHeadings.split(" ");
      return readMeData;
    });
};

const remainingQuestions = (readMeData) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "installation",
      message: "Please enter installation instructions for the project",
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
      message: "Please enter example usages",
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
  ]);
};

projectNameDescription()
  .then(tableOfContents)
  .then((answers) => {
    return templateCreator(answers);
  })
  .then((fileTemplate) => {
    createFile(fileTemplate);
  });
