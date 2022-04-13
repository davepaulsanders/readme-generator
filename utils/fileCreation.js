const fs = require("fs");

const folderExist = () => {
  if (fs.existsSync("dist")) {
    return true;
  } else {
    return false;
  }
};
const createFolder = () => {
  return new Promise((resolve, reject) => {
    fs.mkdirSync("dist", (err) => {
      if (err) {
        reject(err);
        return "Sorry, folder could not be created!";
      }
      resolve({
        ok: true,
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

module.exports = { folderExist, createFolder, createFile };
