const inquirer = require("inquirer");
const { tableCreator } = require("./src/readmegenerator");
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

projectNameDescription()
  .then(tableOfContents)
  .then((answers) => {
    tableCreator(answers);
  });
