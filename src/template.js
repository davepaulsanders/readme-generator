const {
  renderTableOfContents,
  renderLicenseBadge,
  renderEmailandGithub,
} = require("../utils/generateMarkdown");

const templateCreator = (readMeData) => {
  console.log(readMeData);
  const { title, description, installation, usage, license } = readMeData;
  const template = `
# ${title}

${renderLicenseBadge(readMeData)}

${renderTableOfContents(readMeData)}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License

This project is licensed under ${license}

## Contributing

## Tests

``````

## Questions

${renderEmailandGithub(readMeData)}
`;
  return template;
};

module.exports = templateCreator;
