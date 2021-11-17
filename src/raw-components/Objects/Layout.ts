export const Layout = {
      Name: "Layout",
      src: `import React, { Fragment, useState, useEffect, useRef, useMemo } from "react";
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
`,
      styles: `$properties: (
      breakpoints: (
            medium: 65em,
      ),
      header: (
            min-height: 50px,
            height: 50px,
            bgclr: hsl(156, 7%, 14%),
      ),
      sidebar: (
            width: 280px,
            max-width: 70%,
            bgclr: hsl(40, 89%, 61%),
            zIndex: 150,
      ),
      main: (
            bgclr: hsl(199, 53%, 79%),
      ),
      navbar: (
            min-height: 40px,
            height: 45px,
            max-height: 50px,
      ),
);

.Layout {
      display: flex;
      margin-top: map-get($properties, header, height);
      min-height: calc(100vh - map-get($properties, header, height));

      @media only screen and (min-width: map-get($properties, breakpoints, medium)) {
      }
}

.Header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 100;
      min-height: map-get($properties, header, min-height);
      height: map-get($properties, header, height);
      background: map-get($properties, header, bgclr);

      @media only screen and (min-width: map-get($properties, breakpoints, medium)) {
      }
}

.Drawer {
      position: fixed;
      left: 0px;
      height: 100%;
      width: map-get($properties, sidebar, width);
      max-width: map-get($properties, sidebar, max-width);
      background: map-get($properties, sidebar, bgclr);
      z-index: map-get($properties, sidebar, zIndex);

      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0s linear 0.25s;

      &__Toggle {
            height: 100%;
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            & > i {
                  color: white;
                  font-size: x-large;
                  cursor: pointer;
            }
      }

      &__Backdrop {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 100;
            background-color: hsla(0, 0%, 96%, 0.502);

            @media only screen and (min-width: map-get($properties, breakpoints, medium)) {
                  display: none;
            }
      }
}

.Persistent,
.Temporary {
      @extend .Drawer;
}

.Persistent {
      transform: translateX(0);
      &.close {
            transform: translateX(-100%);
      }
}

.Temporary {
      top: 0px;
      transform: translateX(-100%);

      &.open {
            transform: translateX(0);
            transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                  visibility 0s linear 0s;
      }
}

.Main {
      background: map-get($properties, main, bgclr);
      margin-left: 0;
      width: 100%;

      @media only screen and (min-width: map-get($properties, breakpoints, medium)) {
      }

      &.persitent-active {
            transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                  visibility 0s linear 0s;
            @media only screen and (min-width: map-get($properties, breakpoints, medium)) {
                  margin-left: map-get($properties, sidebar, width);
            }
      }

      &.persitent-inactive {
            transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                  visibility 0s linear 0.25s;
      }
}
`,
      usage: `import React from "react";
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
`,
      documentation:
            "A responsive layout that adapts to screen size and orientation, ensuring consistency. Comes with an flexible Side Drawer out of the box.",
};
