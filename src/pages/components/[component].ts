import fs from "fs";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import Template from "../../Components/Template";

export default Template;

const COMPONENTS_DIR = path.resolve("./lib");
const DOCS_DIR = path.resolve("./src/components-docs");

export const getStaticPaths: GetStaticPaths = async () => {
      const files = fs.readdirSync(COMPONENTS_DIR);

      const paths = files.map((filename) => ({
            params: {
                  component: filename,
            },
      }));

      return {
            paths,
            fallback: false,
      };
};

export const getStaticProps: GetStaticProps = async ({
      params: { component },
}: any) => {
      const commonPath = path.resolve(`${COMPONENTS_DIR}/${component}`);

      const componentFiles: { name: string; data: string }[] = [];

      const style = fs.readFileSync(
            resolvePath(
                  `${commonPath}/Styles/_${component.toLowerCase()}.scss`
            ),
            "utf-8"
      );

      const demo = fs.readFileSync(
            resolvePath(
                  `${DOCS_DIR}/JavaScript/${component}/${component.toLowerCase()}.demo.js`
            ),
            "utf-8"
      );

      const docs = fs.readFileSync(
            resolvePath(
                  `${DOCS_DIR}/Docs/${component}/${component.toLowerCase()}.mdx`
            ),
            "utf-8"
      );

      fs.readdirSync(commonPath).map((file: string) => {
            if (file === "index.js") {
                  const data = fs.readFileSync(
                        resolvePath(`${commonPath}/${file}`),
                        "utf-8"
                  );
                  componentFiles.unshift({
                        name: file,
                        data,
                  });
            }

            if (file === "Components") {
                  fs.readdirSync(`${commonPath}/Components`).map(
                        (sub: string) => {
                              const data = fs.readFileSync(
                                    resolvePath(
                                          `${commonPath}/Components/${sub}`
                                    ),
                                    "utf-8"
                              );
                              componentFiles.push({
                                    name: sub,
                                    data,
                              });
                        }
                  );
            }
      });

      return {
            props: {
                  component,
                  style,
                  demo,
                  docs,
                  componentFiles,
            },
      };
};

const resolvePath = (location: string) => {
      return path.resolve(location);
};

// const arr = [];
// const files = trial.map((file) => {
//       const data = fs.readFileSync(
//             `${COMPONENTS_DIR}/trial/components/${file}`,
//             "utf-8"
//       );
//       arr.push({ [file.replace(".js", "")]: data });
// });

// const OUTPUT_DIR = path.resolve("./generated");
// const COMPONENTS_DIR = path.resolve("../lib");

// export const getStaticPaths: GetStaticPaths = async () => {
//       const files = fs.readdirSync(path.join("generated/components"));

//       const paths = files.map((filename) => ({
//             params: {
//                   components: filename.replace(".component.md", ""),
//             },
//       }));

//       return {
//             paths,
//             fallback: false,
//       };
// };

// export const getStaticProps: GetStaticProps = async ({ params: { components } }) => {
//       const component = fs.readFileSync(`${COMPONENTS_DIR}/components/${components}.component.md`, 'utf-8');

//       const style = fs.readFileSync(`${COMPONENTS_DIR}/styles/${components}.style.md`, 'utf-8');

//       const demo = fs.readFileSync(`${COMPONENTS_DIR}/componentDemos/${components}.demo.md`, 'utf-8');

//       return {
//             props: {
//                   component,
//                   // style,
//                   demo
//             },
//       };
// };
