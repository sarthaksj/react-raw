import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Styles/_modal.scss";

Modal.defaultProps = {
    show: false,
    callback: () => { },
};

export default function Modal({ children, ...props }) {
    const { show, callback } = props;
    useLockedBody(show);

    const className = show ? "active" : "";

    return ReactDOM.createPortal(
        <Fragment>
            {show && <div className="Backdrop" onMouseDown={callback} />}
            <div className={"Modal " + className}>
                <div className="Modal__Close" onMouseDown={callback}>
                    Close
                </div>
                <div className="Modal__Content">{children}</div>
            </div>
        </Fragment>,
        document.getElementById("portals")
    );
}

export const ModalHeader = ({ children, ...props }) => {
    return <div className="Modal-Header">{children}</div>;
};

export const ModalBody = ({ children, ...props }) => {
    return <div className="Modal-Body">{children}</div>;
};

export const ModalFooter = ({ children, ...props }) => {
    return <div className="Modal-Footer">{children}</div>;
};

// Hooks For Adding Functionalities.
const useLockedBody = (initialLocked = false) => {
    const [locked, setLocked] = useState(initialLocked);

    // Do the side effect before render
    useLayoutEffect(() => {
        if (!locked) {
            return;
        }

        // Save initial body style
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        // Lock body scroll
        document.body.style.overflow = "hidden";

        // Get the scrollBar width
        const root = document.getElementById("root"); // or root
        const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

        // Avoid width reflow
        if (scrollBarWidth) {
            document.body.style.paddingRight = scrollBarWidth + 'px';
        }

        return () => {
            document.body.style.overflow = originalOverflow;

            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
            }
        };
    }, [locked]);

    // Update state if initialValue changes
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked]);

    return [locked, setLocked];
};
