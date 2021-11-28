import React, { Fragment } from "react";
import Head from "next/head";
import Code from "../Components/Code";
import Documentation from "./Documentation";
import classes from "../Stylesheets/components/_template.module.scss";

// import { MDXProvider } from '@mdx-js/react';
// import { mdxComponents } from '../Components/MdxRenderer/mdxRenderer';
// import { MDXRemote } from 'next-mdx-remote'

interface Props {
    component: string;
    style: string | any;
    demo: string;
    docs: string;
    componentFiles: { name: string, data: string }[];
}

const Template: React.FunctionComponent<Props> = ({
    component,
    style,
    demo,
    docs,
    componentFiles,
}) => {
    return (
        <Fragment>
            <Head>
                <title>{`${component} | react-raw`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={classes.Main}>
                <div className={classes.Main__container}>
                    <Documentation name={component} description={docs} />

                    <div className={classes.Tutorial}>
                        <div>
                            <h2 className={classes.Tutorial__heading}>Component</h2>
                            <Code componentFiles={componentFiles} code="" language="jsx" />
                        </div>

                        <div>
                            <h2 className={classes.Tutorial__heading}>Styles</h2>
                            <Code
                                code={style}
                                componentFiles={[{ name: "", data: "" }]}
                                language="scss"
                            />
                            {/* <MDXRemote {...style} components={mdxComponents} /> */}
                        </div>

                        <div>
                            <h2 className={classes.Tutorial__heading}>Usage</h2>
                            <Code
                                code={demo}
                                componentFiles={[{ name: "", data: "" }]}
                                language="javascript"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Template;
