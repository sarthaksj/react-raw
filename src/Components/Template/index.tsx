import React, { Fragment } from "react";
import Head from "next/head";
import Code from "./Code";
import CodeWithTabs from "./Code/CodeWithTabs";
import Documentation from "./Documentation";
import classes from "../../Stylesheets/components/_template.module.scss";

interface Props {
    component: string;
    style: string;
    demo: string;
    docs: string;
    componentFiles: { name: string; data: string }[];
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
                            <CodeWithTabs componentFiles={componentFiles} language="jsx" />
                        </div>

                        <div>
                            <h2 className={classes.Tutorial__heading}>Styles</h2>
                            <Code code={style} language="scss" />
                        </div>

                        <div>
                            <h2 className={classes.Tutorial__heading}>Usage</h2>
                            <Code code={demo} language="jsx" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Template;
