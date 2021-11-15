import React from 'react'
import SidebarRow from './SidebarRow';
import { Components } from '../../raw-components';
import classes from '../../Stylesheets/layouts/_sidebar.module.scss';

interface Props { }

const index: React.FunctionComponent<Props> = ({ }) => {
    return (
        <div className={classes.Sidebar}>
            {
                Components.map((row) => {
                    return (
                        <SidebarRow
                            key={row.Name}
                            type="components"
                            name={row.Name}>
                        </SidebarRow>
                    )
                })
            }
        </div>
    )
}

export default index
