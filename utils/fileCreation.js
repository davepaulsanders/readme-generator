const fs = require("fs");

const createFolder = () => {
  const distFolder = "dist";
  return new Promise((resolve, reject) => {
    fs.mkdirSync(distFolder, (err) => {
      if (err) {
        reject(err);
        return "Sorry, folder could not be created!";
      }
      resolve({
        ok: tfs.runcate,
        message: "dist folder created...",
      });
    });
  });
};
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

module.exports = { createFolder, createFile };
