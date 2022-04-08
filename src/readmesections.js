const tableCreator = (readMeData) => {
  if (!readMeData.tableOfContents) {
    return "";
  }
  let tableHeading = `## Table of Contents\n`;
  const arr = readMeData.tableOfContents;
  arr.forEach((heading) => {
    tableHeading = `${tableHeading}\n- ${heading}`;
  });
  return tableHeading;
};

const badgeGenerator = (readMeData) => {
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
module.exports = {
  tableCreator,
  badgeGenerator,
};
