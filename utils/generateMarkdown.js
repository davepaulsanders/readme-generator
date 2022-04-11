const renderTableOfContents = (readMeData) => {
  if (!readMeData) {
    return "";
  }

  return `
## Table of Contents

- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)
`;
};

const renderLicenseBadge = (readMeData) => {
  switch (readMeData.license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "CC":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    default:
      return "";
  }
};

const renderEmailandGithub = (readMeData) => {
  const gitHub = readMeData.githubUserName.split(" ");
  const emails = readMeData.email.split(" ");
  const gitHubLink = gitHub.map((user) => {
    return `<a href='https://github.com/${user}'>${user}</a><br>\n`;
  });
  const emailLineBreak = emails.map((email) => {
    return `${email}\n`;
  });
  return `
Find us on GitHub at: \n\n
${gitHubLink.join("")}
And email us at: \n\n
${emailLineBreak.join("")}`;
};

module.exports = {
  renderTableOfContents,
  renderLicenseBadge,
  renderEmailandGithub,
};
