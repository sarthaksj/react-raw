import React from "react";
import "./Styles/_tabs.scss";

export default function Tabs({ children }) {
    return (
        <div className="tabs">
            <ul>{children}</ul>
        </div>
    )
}

export { TabItem } from "./Components/TabItem";
