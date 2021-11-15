import React, { useEffect } from "react";
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

    const className = isOpen ? "active" : "";

    return ReactDOM.createPortal(
        <div className={"Toast " + className}>
            <span className="Toast-Close" onMouseDown={callback}>
                Close
            </span>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>,
        document.getElementById("portals")
    );
}
