const {
  renderTableOfContents,
  renderLicenseBadge,
  renderEmailandGithub,
} = require("../utils/generateMarkdown");

// Building general template for the readme, importing functions from generateMarkdown for sections that require more parsing
const templateCreator = (readMeData) => {
  // destructing data from inquirer prompt
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

\`\`\`zsh

${installation}

\`\`\`

## Usage

To run this program, open a terminal in the root directory and enter

\`\`\`zsh

${usage}

\`\`\`

## Tests

To run tests, open a terminal in the root directory and enter

\`\`\`zsh

${tests}

\`\`\`

## Contributing

${contributions}

## Questions

If you have questions about ${title}
${renderEmailandGithub(readMeData)}\n
## License

This project is licensed under ${license}
`;
  return template;
};

module.exports = templateCreator;
