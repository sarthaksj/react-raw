var path = require("path");
var fs = require("fs");


const componentsDir = path.resolve("./lib");
const outputDir = path.resolve("./react-raw/generated");

createDirIfNeeded(outputDir);
createDirIfNeeded(`${outputDir}/components/`);
createDirIfNeeded(`${outputDir}/styles/`);
createDirIfNeeded(`${outputDir}/componentDemos/`);


// Copy Component as markdown files
readDir(componentsDir, "COMPONENT");
// Copy Component Styles as markdown files
readDir(componentsDir, "STYLE");
// Copy Component Demo  as markdown files
readDir(componentsDir, "DEMO");



function readDir(dir, fileType) {
      fs.readdir(dir, (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                  copyHook({
                        sourceFile: pathDefinition("SOURCE", fileType, file),
                        destFile: pathDefinition("DEST", fileType, file),
                  });
            });
      });
}

function pathDefinition(pathType, fileType, fileName) {
      if (pathType === "SOURCE") {
            const commonPath = path.resolve(`${componentsDir}/${fileName}`);
            switch (fileType) {
                  case "COMPONENT":
                        return path.resolve(`${commonPath}/index.js`);
                  case "DEMO":
                        return path.resolve(`${commonPath}/${fileName}.demo.js`);
                  case "STYLE":
                        return path.resolve(
                              `${commonPath}/Styles/_${fileName.toLowerCase()}.scss`
                        );
            }
      } else if ("DEST") {
            switch (fileType) {
                  case "COMPONENT":
                        return path.resolve(`${outputDir}/components/${fileName}.component.md`);
                  case "DEMO":
                        return path.resolve(`${outputDir}/componentDemos/${fileName}.demo.md`);
                  case "STYLE":
                        return path.resolve(
                              `${outputDir}/styles/${fileName}.style.md`
                        );
            }
      }
};

function getFileName(pathname) {
      return pathname.split("/").reverse()[0];
}

function createDirIfNeeded(dir) {
      if (!fs.existsSync(path.resolve(dir))) {
            fs.mkdirSync(dir);
      }
}

function copyHook({ sourceFile, destFile, useSandbox }) {
      // Check source file
      if (!fs.existsSync(sourceFile)) {
            console.log(`${getFileName(sourceFile)} doesn't exist`);
            return;
      }

      // If destination file exists, remove it
      let existingFile = false;

      if (fs.existsSync(destFile)) {
            fs.unlinkSync(destFile);
            existingFile = true;
      }

      // Read source then create markdown hook file
      fs.readFile(sourceFile, "utf8", (err, data) => {
            if (err) {
                  console.log(`Cannot read ${sourceFile}`);
                  return;
            }

            const extension = sourceFile.split(".").reverse()[0];

            const writeStream = fs.createWriteStream(destFile);

            let preCode = "```" + extension;

            writeStream.write(preCode + "\r");
            writeStream.write(data);
            writeStream.write("```\r");
            writeStream.end();

            console.log(
                  `${getFileName(destFile)} ${existingFile ? "updated" : "created"}`
            );
      });
}