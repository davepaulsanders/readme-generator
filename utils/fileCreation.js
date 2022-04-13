const fs = require("fs");

const createFile = (pageString) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", pageString, (err) => {
      if (err) {
        reject(err);
        return "File couldn't be created!";
      }
      resolve({
        ok: true,
        message: "README created in dist folder!",
      });
    });
  });
};

module.exports = createFile;
