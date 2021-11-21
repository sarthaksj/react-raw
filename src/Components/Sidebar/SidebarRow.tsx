import React from 'react'
import Link from 'next/link'
import classes from '../../Stylesheets/layouts/_sidebar.module.scss';

interface Props {
    type: "hooks" | "components",
    name: string
}

const SidebarRow: React.FunctionComponent<Props> = ({ type, name }) => {
    const link = `/components/${name}`;

    return (
        <Link href={link}>
            <a className={classes.Sidebar__row}>
                <div>
                    {name}
                </div>
            </a>
        </Link >
    )
}

export default SidebarRow
