import React from 'react'
import Code from './Code';
import Documentation from './Documentation';
import classes from '../../Stylesheets/components/_template.module.scss';

interface Props {
    name: string,
    src: string,
    styles: string,
    usage: string,
    documentation: string
}

const Template: React.FunctionComponent<Props> = ({ name, src, styles, usage, documentation }) => {

    return (
        <div className={classes.Main}>
            <div className={classes.Main__container} >
                <Documentation
                    name={name}
                    description={documentation} />

                <div className={classes.Tutorial}>
                    <div>
                        <h2 className={classes.Tutorial__heading}>
                            Component
                        </h2>
                        <Code code={src} language="jsx" />
                    </div>

                    <div>
                        <h2 className={classes.Tutorial__heading}>
                            Styles
                        </h2>
                        <Code code={styles} language="scss" />
                    </div>

                    <div>
                        <h2 className={classes.Tutorial__heading}>
                            Usage
                        </h2>
                        <Code code={usage} language="jsx" />
                    </div>

                </div>
            </div>
        </div >
    )
}
export default Template