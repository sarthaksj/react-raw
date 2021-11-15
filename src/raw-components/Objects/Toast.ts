export const Toast = {
      Name: "Toast",
      src: `import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Styles/_toast.scss";

Toast.defaultProps = {
    title: "Title",
    message: "Message",
    timeout: 2000,
    isOpen: false,
    callback: () => { },
};

export default function Toast({ children, ...props }) {
    const { title, message, timeout, isOpen, callback } = props;

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                callback();
            }, timeout);
            return () => {
                clearTimeout(timer);
            };
        }
    }, []);

    const className = isOpen ? 'active' : '';

    return ReactDOM.createPortal(
        <div className={'Toast' + className}>
            <span className="Toast-Close" onMouseDown={callback}>
                Close
            </span>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>,
        document.getElementById("portals")
    );
};`,

      styles: `
    $small: 40em;

.Toast {
      position: fixed;
      z-index: 1000;
      padding: 0.5rem;
      transform: translate(-50%, -50%);
      bottom: 2%;
      left: 50%;
      width: 350px;
      border-radius: 5px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      will-change: transform;
      transition: all 0.3s linear;
      background-color: hsl(145, 100%, 39%);

      &-Close {
            position: absolute;
            top: 0;
            right: 5px;
            cursor: pointer;
            color: white;
      }

      @media only screen and (min-width: $small) {
            width: 365px;
            bottom: 0;
      }
}`,
      usage: `import React, { useState } from 'react'
import Toast from './';

export default function Component() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Toast
            isOpen={isOpen}
            callback={() => setIsOpen(false)} />
    )
}
`,
      documentation:
            "Push notifications to your visitors with a Toast, a lightweight and easily customizable alert message",
};
