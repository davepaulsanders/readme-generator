const fs = require("fs");

const createFile = (pageString) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", pageString, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Created",
      });
    });
  });
};

module.exports = createFile;
