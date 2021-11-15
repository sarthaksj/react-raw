import React, { Fragment } from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Main from './Components/Main';
import useMediaQuery from '../../Hooks/useMediaQuery';
import classes from '../../Stylesheets/components/_layout.module.scss';

const SMALL = '640px'

const Layout = ({ ...props }) => {
    const { header, sidebar, main } = props.Components;

    // console.log(props)


    const isSmall = useMediaQuery(`(max-width:${SMALL})`)
    const sidebarIsRendered = sidebar.component !== null;
    // 

    const subLayoutStyles = {
        marginTop: header.height,
        minHeight: `calc(100vh - ${header.height})`
    }

    const sidebarProps = {
        sidebarWidth: sidebar.sidebarWidth,
        navbarHeight: sidebar.navbarHeight,
        sidebarIsRendered
    }

    const mainProps = {
        ...sidebarProps,
        headerHeight: header.height
    }

    return (
        <Fragment>

            <Header
                isSmall={isSmall}
                height={header.height}>
                {header.component}
            </Header>

            <div style={subLayoutStyles} className={classes.sub_layout}>

                <Sidebar
                    isSmall={isSmall}
                    sidebarProps={sidebarProps}>
                    {sidebar.component}
                </Sidebar>

                <Main
                    isSmall={isSmall}
                    mainProps={mainProps}>
                    {main.component}
                </Main>
            </div>
        </Fragment>
    )
}

export default Layout;

// Layout.defaultProps = {
//     Components: {
//         header: {
//             component: <></>,
//             height: '50px'
//         },
//         sidebar: {
//             component: <></>,
//             navbarHeight: '45px',
//             sidebarWidth: '275px'
//         },
//         main: {
//             component: <></>
//         },
//     }
// }



