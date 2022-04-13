const {
  renderTableOfContents,
  renderLicenseBadge,
  renderEmailandGithub,
} = require("../utils/generateMarkdown");

// Building general template for the readme, importing functions from generateMarkdown for sections that require more parsing
const templateCreator = (readMeData) => {
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

If you have questions about ${title}

${renderEmailandGithub(readMeData)}

## License

This project is licensed under ${license}

`;
  return template;
};

module.exports = templateCreator;
