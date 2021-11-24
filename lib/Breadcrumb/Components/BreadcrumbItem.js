import React, { Fragment } from "react";

export const BreadcrumbItem = ({ ...props }) => {
    const { title, link } = props;
    return (
        <Fragment>
            <li>
                <a href={link}>{title}</a>
            </li>
        </Fragment>
    );
};

