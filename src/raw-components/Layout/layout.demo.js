import React from "react";
import Layout from "./";

export default function LayoutComponent() {
    const types = ["PERSISTENT", "TEMPORARY"];

    const Props = {
        type: types[1],
        header: {
            component: <></>,
        },
        sidebar: {
            component: <></>,
        },
        main: {
            component: <></>,
        },
    };

    return <Layout Components={Props} />;
}
