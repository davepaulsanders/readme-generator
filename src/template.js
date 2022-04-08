const { tableCreator, badgeGenerator } = require("./readmesections");
const templateCreator = (readMeData) => {
  console.log(readMeData);
  const { title, description, installation, usage, license } = readMeData;
  const template = `

# ${title}

${badgeGenerator(readMeData)}

## Description

${description}

${tableCreator(readMeData)}

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing

## Tests

## Questions

If you have any questions, you can reach us at:

`;
  return template;
};

module.exports = templateCreator;
