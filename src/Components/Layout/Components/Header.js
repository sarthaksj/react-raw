import React from 'react';
import classes from '../../../Stylesheets/components/_layout.module.scss';

const Header = ({ children, ...props }) => {
    const { height } = props

    const headerStyles = {
        height: height
    }

    return (
        <header style={headerStyles} className={classes.Header}>
            {children}
        </header>
    )
}

export default Header
