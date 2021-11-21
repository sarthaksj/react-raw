import React from "react";
import "../Styles/_layout.scss";

export default function Header({ children, ...props }) {
    const { callback } = props;

    return (
        <header className="Header">
            {children}
            <div className="Drawer__Toggle" onClick={callback}>
                <i className="fas fa-bars" />
            </div>
        </header>
    );
}
