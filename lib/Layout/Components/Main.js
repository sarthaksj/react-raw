import React from "react";
import "../Styles/_layout.scss";

export default function Main({ children, ...props }) {
    const { visible, type } = props;

    let attachedClasses = "Main ";

    if (visible) {
        if (type === "PERSISTENT") {
            attachedClasses = attachedClasses + "persitent-active";
        }
    } else {
        if (type === "PERSISTENT") {
            attachedClasses = attachedClasses + "persitent-inactive";
        }
    }

    return <main className={attachedClasses}>{children}</main>;
}
