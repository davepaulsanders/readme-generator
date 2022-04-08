const tableCreator = (readMeData) => {
  let tableHeading = `## Table of Contents`;
  const arr = readMeData.tableOfContents;
  arr.forEach((heading) => {
    tableHeading = `${tableHeading} \n - ${heading}`;
  });
  console.log(tableHeading);
};

module.exports = {
  tableCreator,
};
