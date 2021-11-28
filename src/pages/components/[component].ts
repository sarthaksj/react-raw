import fs from "fs";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import Template from "../../templates";

export default Template;

const OUTPUT_DIR = path.resolve("./lib");
const DOCS_DIR = path.resolve("./src/components-docs");

export const getStaticPaths: GetStaticPaths = async () => {
      const files = fs.readdirSync(path.resolve(OUTPUT_DIR));

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
      const commonPath = path.resolve(`${OUTPUT_DIR}/${component}`);

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
            resolvePath(`${DOCS_DIR}/Docs/${component.toLowerCase()}.mdx`),
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

// const OUTPUT_DIR = path.join(process.cwd(), "generated");
// const DOCS_DIR = path.join(process.cwd(), "./src/components-docs");
// import { serialize } from "next-mdx-remote/serialize";

// export const getStaticProps: GetStaticProps = async ({
//       params: { component },
// }: any) => {
//       const style = fs.readFileSync(
//             path.resolve(`${OUTPUT_DIR}/styles/${component}.style.md`),
//             "utf-8"
//       );

//       const demo = fs.readFileSync(
//             path.resolve(`${OUTPUT_DIR}/componentDemos/${component}.demo.md`),
//             "utf-8"
//       );

//       const docs = fs.readFileSync(
//             path.resolve(`${DOCS_DIR}/Docs/${component.toLowerCase()}.mdx`),
//             "utf-8"
//       );

//       const commonPath = `${OUTPUT_DIR}/components/${component}`;
//       const componentFiles: { name: string; data: string }[] = [];

//       fs.readdirSync(commonPath).map((file: string) => {
//             if (file === "index.md") {
//                   const data = fs.readFileSync(
//                         path.resolve(`${commonPath}/${file}`),
//                         "utf-8"
//                   );
//                   componentFiles.unshift({
//                         name: file,
//                         data,
//                   });
//             }

//             if (file === "components") {
//                   fs.readdirSync(`${commonPath}/components`).map(
//                         (sub: string) => {
//                               const data = fs.readFileSync(
//                                     path.resolve(
//                                           `${commonPath}/components/${sub}`
//                                     ),
//                                     "utf-8"
//                               );
//                               componentFiles.push({
//                                     name: sub,
//                                     data,
//                               });
//                         }
//                   );
//             }
//       });

//       const s = await serialize(style);
//       return {
//             props: {
//                   component,
//                   style: s,
//                   demo,
//                   docs,
//                   componentFiles,
//             },
//       };
// };
