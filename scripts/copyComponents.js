const path = require("path");
const fs = require("fs");

const COMPONENTS_DIR = path.resolve("./lib");
const DEMOS_DIR = path.resolve("./src/components-docs");
const OUTPUT_DIR = path.resolve("./generated");

const createDirIfNeeded = (dir) => {
      if (!fs.existsSync(path.resolve(dir))) {
            fs.mkdirSync(dir);
      }
};

const getFileName = (pathname) => {
      return pathname.split("/").reverse()[0];
};

const copyData = ({ sourceFile, destFile }) => {
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
};

const copyComponent = (__dir) => {
      createDirIfNeeded(`${OUTPUT_DIR}/components`);

      fs.readdir(__dir, (err, dirs) => {
            if (err) throw err;
            dirs.map((dir) => {
                  createDirIfNeeded(`${OUTPUT_DIR}/components/${dir}`);
                  fs.readdir(path.resolve(`${__dir}/${dir}`), (err, files) => {
                        if (err) throw err;
                        files.map((file) => {
                              console.log(file);
                              if (file === "index.js") {
                                    copyData({
                                          sourceFile: path.resolve(`${__dir}/${dir}/index.js`),
                                          destFile: path.resolve(
                                                `${OUTPUT_DIR}/components/${dir}/index.md`
                                          ),
                                    });
                              }
                              if (file === "Components") {
                                    createDirIfNeeded(`${OUTPUT_DIR}/components/${dir}/components`);
                                    fs.readdir(
                                          path.resolve(`${__dir}/${dir}/Components`),
                                          (err, files) => {
                                                files.map((file) => {
                                                      copyData({
                                                            sourceFile: path.resolve(
                                                                  `${__dir}/${dir}/Components/${file}`
                                                            ),
                                                            destFile: path.resolve(
                                                                  `${OUTPUT_DIR}/components/${dir}/components/${file.replace(
                                                                        ".js",
                                                                        ""
                                                                  )}.md`
                                                            ),
                                                      });
                                                });
                                          }
                                    );
                              }
                        });
                  });
            });
      });
};

const copyDemoJs = (__dir) => {
      createDirIfNeeded(`${OUTPUT_DIR}/componentDemos`);
      const cmnPath = path.resolve(`${__dir}/JavaScript`);
      fs.readdir(cmnPath, (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                  copyData({
                        sourceFile: path.resolve(
                              `${cmnPath}/${file}/${file.toLowerCase()}.demo.js`
                        ),
                        destFile: path.resolve(`${OUTPUT_DIR}/componentDemos/${file}.demo.md`),
                  });
            });
      });
};

const copyStylesScss = (__dir) => {
      createDirIfNeeded(`${OUTPUT_DIR}/styles`);
      fs.readdir(__dir, (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                  copyData({
                        sourceFile: path.resolve(
                              `${__dir}/${file}/Styles/_${file.toLowerCase()}.scss`
                        ),
                        destFile: path.resolve(`${OUTPUT_DIR}/styles/${file}.style.md`),
                  });
            });
      });
};

createDirIfNeeded(OUTPUT_DIR);
copyComponent(COMPONENTS_DIR);
copyStylesScss(COMPONENTS_DIR);
copyDemoJs(DEMOS_DIR);

// function pathDefinition(pathType, fileType, fileName) {
//       if (pathType === "SOURCE") {
//             const commonPath = path.resolve(`${COMPONENTS_DIR}/${fileName}`);
//             switch (fileType) {
//                   case "COMPONENT":
//                         return path.resolve(`${commonPath}/index.js`);
//                   case "DEMO":
//                         return path.resolve(`${commonPath}/${fileName}.demo.js`);
//                   case "STYLE":
//                         return path.resolve(
//                               `${commonPath}/Styles/_${fileName.toLowerCase()}.scss`
//                         );
//             }
//       } else if ("DEST") {
//             switch (fileType) {
//                   case "COMPONENT":
//                         return path.resolve(`${outputDir}/components/${fileName}.component.md`);
//                   case "DEMO":
//                         return path.resolve(`${outputDir}/componentDemos/${fileName}.demo.md`);
//                   case "STYLE":
//                         return path.resolve(
//                               `${outputDir}/styles/${fileName}.style.md`
//                         );
//             }
//       }
// };
