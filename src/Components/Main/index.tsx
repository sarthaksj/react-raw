import React, { Fragment } from "react";
import {
    HEADER_TITLE,
    HEADING,
    WHAT_RAW_COMPONENTS_MEAN,
    WHAT_RAW_COMPONENTS_MEAN_ANS,
    MOTIVATION,
    MOTIVATION_ANS,
} from "../../helpers/Conventions";
import Head from 'next/head'
import classes from "../../Stylesheets/components/_main.module.scss";

interface Props { }

const index: React.FunctionComponent<Props> = ({ }) => {
    return (

        <Fragment>

            <Head>
                <title>{`${HEADER_TITLE}`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className={classes.Main}>
                <div className={classes.heading}>
                    <h1>{HEADER_TITLE}</h1>
                    <p>{HEADING}</p>
                </div>

                <div className={classes.description}>
                    <h2>{WHAT_RAW_COMPONENTS_MEAN}</h2>
                    <p>{WHAT_RAW_COMPONENTS_MEAN_ANS}</p>
                </div>

                <div className={classes.description}>
                    <h2>{MOTIVATION}</h2>
                    <p>{MOTIVATION_ANS}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default index;