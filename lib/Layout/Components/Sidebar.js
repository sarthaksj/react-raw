import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import "../Styles/_layout.scss";

export default function Sidebar({ children, ...props }) {
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

    return (
        <Fragment>
            <aside className={`Persistent ${!visible ? "close" : ""}`}>
                {children}
            </aside>
        </Fragment>
    );
};

const TemporaryDrawer = ({ children, ...props }) => {
    const { visible, callback, backdrop } = props;

    const ref = useRef();
    useOnClickOutside(ref, callback);

    return ReactDOM.createPortal(
        <Fragment>
            {backdrop && visible && (
                <div className="Drawer__Backdrop" onClick={callback} />
            )}
            <aside ref={ref} className={`Temporary ${visible ? "open" : ""}`}>
                {children}
            </aside>
        </Fragment>,
        document.getElementById("portals")
    );
};

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
