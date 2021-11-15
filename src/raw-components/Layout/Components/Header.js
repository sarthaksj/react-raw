import React from 'react';
import '../Styles/_layout.scss'

const Header = ({ children, ...props }) => {
    const { height } = props

    const headerStyles = {
        height: height
    }

    return (
        <header style={headerStyles} className="Header">
            {children}
        </header>
    )
}

export default Header
