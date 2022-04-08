const { tableCreator } = require("./readmesections");

const templateCreator = (readMeData) => {
  const template = `# ${readMeData.title}

## Description

${readMeData.description}

${tableCreator(readMeData)}

## Installation

## Usage

## License

## Contributing

## Tests

## Questions
`;
  return template;
};

module.exports = templateCreator;
