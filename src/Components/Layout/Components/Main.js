import React from 'react'
import classes from '../../../Stylesheets/components/_layout.module.scss';

const Main = ({ children, ...props }) => {
    const {
        isSmall,
        mainProps
    } = props;

    const { sidebarWidth, sidebarIsRendered, navbarHeight } = mainProps

    const inRegular = {
        ...(
            sidebarIsRendered ? {
                width: `calc(100vw - ${sidebarWidth})`,
                marginLeft: sidebarWidth,
            } : {
                width: '100%',
                margin: '0'
            }
        )
    }

    const inSmall = {
        width: '100%',
        marginLeft: '0px',
        ...(
            sidebarIsRendered ? {
                marginBottom: navbarHeight
            } : {
                marginBottom: '0px'
            }
        )
    }

    return (
        <main className={classes.Main} style={isSmall ? inSmall : inRegular}>
            {children}
        </main>
    )
}

export default Main
