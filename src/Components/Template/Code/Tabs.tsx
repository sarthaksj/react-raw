import React, { FunctionComponent } from "react";
import classes from "../../../Stylesheets/components/_tabs.module.scss";

type Props = {
    componentFiles?: { name: string; data: string }[];
    callback: (src: string) => void;
    // src: { name: string; data: string };
};

const Tabs: FunctionComponent<Props> = ({ componentFiles, callback }) => {
    return (
        <div className={classes.Bar}>
            {componentFiles?.map((file) => {
                return (
                    <button
                        className={classes.Tabs}
                        key={file.name}
                        onClick={() => callback(file.data)}>
                        {file.name}
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;
