import React from 'react';
import '../Styles/_layout.scss'

const Sidebar = ({ children, ...props }) => {
    const { isSmall, sidebarProps } = props;
    const { sidebarWidth, navbarHeight, sidebarIsRendered } = sidebarProps

    if (!sidebarIsRendered) return null;

    const inRegular = {
        width: `${sidebarWidth}`
    }

    const inSmall = {
        width: '100%',
        height: `${navbarHeight}`
    }

    return (
        <aside style={isSmall ? inSmall : inRegular} className={`Sidebar__left`}>
            <h3>
                {children}
            </h3>
        </aside>
    )
}

export default Sidebar
