import React, { useRef, useState, useEffect } from "react";
import "./Styles/_dropdown.scss";

export default function Dropdown({ }) {
    const [visible, setVisible] = useState(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setVisible(false));

    return (
        <div ref={ref} className={`Dropdown ${visible ? "active" : ""}`}>
            <button className="Dropdown__btn" onClick={() => setVisible(!visible)}>
                Dropdown
            </button>
            <div className="Dropdown__menu">Dropdown Content</div>
        </div>
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
