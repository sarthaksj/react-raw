import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Styles/_toast.scss";

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

    return ReactDOM.createPortal(
        <div className={`Toast ${isOpen ? "active" : ""}`}>
            <span className="Toast-Close" onMouseDown={callback}>
                Close
            </span>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>,
        document.getElementById("portals")
    );
}

Toast.defaultProps = {
    title: "Title",
    message: "Message",
    timeout: 2000,
    isOpen: false,
    callback: () => { },
};
