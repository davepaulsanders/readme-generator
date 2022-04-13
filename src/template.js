const {
  renderTableOfContents,
  renderLicenseBadge,
  renderEmailandGithub,
} = require("../utils/generateMarkdown");

const templateCreator = (readMeData) => {
  console.log(readMeData);
  const {
    title,
    description,
    installation,
    usage,
    license,
    tests,
    contributions,
  } = readMeData;
  const template = `
# ${title}

${renderLicenseBadge(readMeData)}

${renderTableOfContents(readMeData)}

## Description

${description}

## Installation

\`\`\`

${installation}

\`\`\`

## Usage

To run this program, open a terminal in the root directory and enter

\`\`\`

${usage}

\`\`\`


## Tests

To run tests, open a terminal in the root directory and enter

\`\`\`

${tests}

\`\`\`

## Contributing

${contributions}

## Questions

${renderEmailandGithub(readMeData)}

## License

This project is licensed under ${license}

`;
  return template;
};

module.exports = templateCreator;
