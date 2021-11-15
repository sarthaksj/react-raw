import React from 'react'
import classes from '../../Stylesheets/components/_template.module.scss';

interface Props {
    name: string,
    description: string
}

const Description: React.FunctionComponent<Props> = ({ ...props }) => {
    const { children, name, description } = props
    return (
        <div className={classes.Description}>
            <h1 className={classes.Description__componentName}>
                {`<${name} />`}
            </h1>
            <span className={classes.Description__componentDescription}>
                {description}
            </span>
        </div>
    )
}

export default Description
