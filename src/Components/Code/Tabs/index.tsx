import React from "react";
import classes from "../../../Stylesheets/components/_tabs.module.scss";

const Tabs: React.FunctionComponent = ({ children }) => {
    return (
        <div className={classes.tabs}>
            <ul>{children}</ul>
        </div>
    )
}

export default Tabs;

export { TabItem } from "./Components/TabItem";
