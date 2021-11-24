import React, { useState } from "react";
import "../Styles/_tabs.scss";

export const TabItem = ({ ...props }) => {
    const [isActive, setIsActive] = useState(false)
    const { title } = props;

    return (
        <li onClick={() => setIsActive(true)} className={isActive ? 'is-active' : ''}>
            <a>{title}</a>
        </li>
    );
};
