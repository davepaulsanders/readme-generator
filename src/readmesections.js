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

module.exports = {
  tableCreator,
};
