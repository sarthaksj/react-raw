import React from 'react'
import { NextPage } from 'next';
import Head from 'next/head';
import Template from '../../Components/Template/index';

interface Props {
    Components: any
}

export const Toast: NextPage<Props> = ({ Components }) => {
    const comp = Components[2];
    return (
        <>
            <Head>
                <title>{`${comp.Name} | react-raw`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Template
                name={comp.Name}
                src={comp.src}
                styles={comp.styles}
                usage={comp.usage}
                documentation={comp.documentation} />
        </>
    )
}