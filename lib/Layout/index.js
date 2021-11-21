import React, { Fragment, useState, useEffect, useMemo } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import "./Styles/_layout.scss";

export default function Layout({ children, ...props }) {
    const { type, header, sidebar, main } = props.Components;

    const [visible, setVisible] = useState(type === "PERSISTENT" ? true : false);

    const isLarge = useMediaMatch("(min-width: 1040px)");

    return (
        <Fragment>
            <Header callback={() => setVisible((visible) => !visible)}>
                {header.component}
            </Header>
            <div className="Layout">
                <Sidebar
                    callback={() => setVisible(false)}
                    isLarge={isLarge}
                    type={type}
                    backdrop={false}
                    visible={visible}>
                    {sidebar.component}
                </Sidebar>

                <Main type={type} visible={visible}>
                    {main.component}
                </Main>
            </div>
        </Fragment>
    );
}

Layout.defaultProps = {
    Components: {
        type: "PERSISTENT",
        header: {
            component: <></>,
        },
        sidebar: {
            component: <></>,
        },
        main: {
            component: <></>,
        },
    },
};

function useMediaMatch(query) {
    const matchMedia = useMemo(() => window.matchMedia(query), [query]);
    const [matches, setMatches] = useState(() => matchMedia.matches);

    useEffect(() => {
        setMatches(matchMedia.matches);
        const listener = (event_) => setMatches(event_.matches);

        if (matchMedia.addEventListener) {
            matchMedia.addEventListener("change", listener);

            return () => matchMedia.removeEventListener("change", listener);
        } else {
            matchMedia.addEventListener(listener);

            return () => matchMedia.removeListener(listener);
        }
    }, [matchMedia]);

    return matches;
}
