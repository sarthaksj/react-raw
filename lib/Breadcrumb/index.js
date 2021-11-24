import React from "react";
import "./Styles/_breadcrumb.scss";

export default function Breadcrumb({ children }) {
    return (
        <nav className="breadcrumb">
            <ul>{children}</ul>
        </nav>
    );
}

export { BreadcrumbItem } from "./Components/BreadcrumbItem";
