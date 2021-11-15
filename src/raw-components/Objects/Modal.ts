export const Modal = {
      Name: "Modal",
      src: `import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
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
`,
      styles: `$modal-maxHeight: 85vh;
$small: 40em;
$backdrop-bgclr: hsla(0, 0%, 96%, 0.502);

.Modal {
      position: fixed;
      display: grid;
      grid-template-rows: auto;
      background-color: white;
      z-index: 600;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 350px;
      transition: all 0.3s ease-out;
      padding: 1.5rem 0.5rem;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      max-height: $modal-maxHeight;
      overflow-y: scroll;

      &::-webkit-scrollbar {
            display: none;
      }

      &-Header {
      }

      &-Body {
      }

      &-Footer {
      }

      &-Close {
            position: absolute;
            top: 0;
            right: 5px;
            cursor: none;
            color: red;

            @media only screen and (min-width: $small) {
                  cursor: pointer;
            }
      }

      @media only screen and (min-width: $small) {
            width: auto;
      }
}

.Backdrop {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 500;
      background-color: $backdrop-bgclr;
}`,
      usage: `import React, { Fragment, useState } from "react";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "./";

export default function Component() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <button onClick={() => setIsOpen(true)}>Toggle Modal</button>
            <Modal show={isOpen} callback={() => setIsOpen(false)}>
                <ModalHeader>I'm Modal Header</ModalHeader>
                <ModalBody>
                    <p style={{ textAlign: "justify" }}>{para}</p>
                </ModalBody>
                <ModalFooter>I'm Modal Footer </ModalFooter>
            </Modal>
        </Fragment>
    );
};
`,
      documentation:
            "Add dialogs to your web application for lightboxes, user notifications, or completely custom content.",
};
