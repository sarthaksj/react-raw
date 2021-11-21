import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Styles/_modal.scss";

export default function Modal({ children, ...props }) {
    const { show, callback } = props;
    useLockedBody(show);

    return ReactDOM.createPortal(
        <Fragment>
            {show && <div className="Backdrop" onClick={callback} />}
            <div className={`Modal ${show ? "active" : ""}`}>
                <div className="Modal__Close" onClick={callback}>
                    Close
                </div>
                <div className="Modal__Content">{children}</div>
            </div>
        </Fragment>,
        document.getElementById("portals")
    );
}

Modal.defaultProps = {
    show: false,
    callback: () => { },
};

export { ModalBody } from "./Components/ModalBody";
export { ModalHeader } from "./Components/ModalHeader";
export { ModalFooter } from "./Components/ModalFooter";

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
            document.body.style.paddingRight = `${scrollBarWidth}px`;
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
