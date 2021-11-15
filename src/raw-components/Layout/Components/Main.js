import React from 'react'
import '../Styles/_layout.scss'

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
        <main className="Main" style={isSmall ? inSmall : inRegular}>
            {children}
        </main>
    )
}

export default Main
