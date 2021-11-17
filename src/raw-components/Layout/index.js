import React, { Fragment, useState, useEffect, useRef, useMemo } from "react";
import ReactDOM from "react-dom";
import "./Styles/_layout.scss";

export default function Layout({ children, ...props }) {
    const { type, header, sidebar, main } = props.Components;

    const [visible, setVisible] = useState(type === "PERSISTENT" ? true : false);

    const isLarge = useMediaMatch("(min-width: 1040px)");

    const sideDrawerCloseHandler = () => {
        setVisible(false);
    };

    const sideDrawerToggleHandler = () => {
        setVisible(!visible);
    };

    return (
        <Fragment>
            <Header callback={sideDrawerToggleHandler}>{header.component}</Header>

            <div className="Layout">
                <Sidebar
                    callback={sideDrawerCloseHandler}
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

// Header
const Header = ({ children, ...props }) => {
    const { callback } = props;

    return (
        <header className="Header">
            {children}
            <div className="Drawer__Toggle" onClick={callback}>
                <i className="fas fa-bars" />
            </div>
        </header>
    );
};

// Main
function Main({ children, ...props }) {
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

// Sidebar
function Sidebar({ children, ...props }) {
    const { visible, callback, type, backdrop, isLarge } = props;

    if (type === "PERSISTENT") {
        if (!isLarge) {
            return (
                <TemporaryDrawer
                    visible={visible}
                    callback={callback}
                    backdrop={backdrop}>
                    {children}
                </TemporaryDrawer>
            );
        }
        return <PersistentDrawer visible={visible}>{children}</PersistentDrawer>;
    } else if (type === "TEMPORARY") {
        return (
            <TemporaryDrawer
                visible={visible}
                callback={callback}
                backdrop={backdrop}>
                {children}
            </TemporaryDrawer>
        );
    }
}

const PersistentDrawer = ({ children, ...props }) => {
    const { visible } = props;
    const attachedClasses = !visible ? "close" : "";

    return (
        <Fragment>
            <aside className={"Persistent " + attachedClasses}>{children}</aside>
        </Fragment>
    );
};

const TemporaryDrawer = ({ children, ...props }) => {
    const { visible, callback, backdrop } = props;
    const attachedClasses = visible ? "open" : "";

    const ref = useRef();
    useOnClickOutside(ref, callback);

    return ReactDOM.createPortal(
        <Fragment>
            {backdrop && visible && (
                <div className="Drawer__Backdrop" onClick={callback} />
            )}
            <aside ref={ref} className={"Temporary " + attachedClasses}>
                {children}
            </aside>
        </Fragment>,
        document.getElementById("portals")
    );
};

// Hooks For Adding Functionalities.
const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
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
