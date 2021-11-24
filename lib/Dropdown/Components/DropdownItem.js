import React, { Fragment, useState } from "react";
import "../Styles/_dropdown.scss";

export const DropdownItem = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, link } = props;

    return (
        <Fragment>
            <a
                onClick={() => setIsOpen(!isOpen)}
                href={link}
                className={`dropdown-item ${isOpen ? "is-active" : ""}`}>
                {title}
            </a>
        </Fragment>
    );
};
