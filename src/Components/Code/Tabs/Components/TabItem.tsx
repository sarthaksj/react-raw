import React, { ComponentPropsWithoutRef } from "react";
import classes from '../../../../Stylesheets/components/_tabs.module.scss';
interface Props extends ComponentPropsWithoutRef<"li"> {
    title: string,
    callback: () => void
}

export const TabItem: React.FunctionComponent<Props> = ({ ...props }) => {
    const { title, callback, className } = props;

    return (
        <li onClick={callback} className={className}>
            <a>
                <span className={classes.icon}>
                    <i className="fab fa-js-square" aria-hidden="true" />
                </span>
                <span>{title}</span>
            </a>
        </li>
    );
};
