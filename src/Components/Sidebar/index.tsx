import React from 'react'
import SidebarRow from './SidebarRow';
import { Components } from '../../components-docs/List';
import classes from '../../Stylesheets/layouts/_sidebar.module.scss';

interface Props { }

const index: React.FunctionComponent<Props> = ({ }) => {
    return (
        <div className={classes.Sidebar}>
            {
                Components.map((row) => {
                    return (
                        <SidebarRow
                            key={row.name}
                            type="components"
                            name={row.name}>
                        </SidebarRow>
                    )
                })
            }
        </div>
    )
}

export default index
