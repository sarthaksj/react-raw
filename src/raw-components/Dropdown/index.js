import React, { useRef, useState, useEffect } from "react";
import "./Styles/_dropdown.scss";

const Dropdown = ({ }) => {
    const [visible, setVisible] = useState(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setVisible(false));

    const className = visible ? "active" : "";

    return (
        <div ref={ref} className={"Dropdown " + className}>
            <button className="link" onMouseDown={() => setVisible(!visible)}>
                Dropdown
            </button>
            <div className="Dropdown__menu">Dropdown Content</div>
        </div>
    );
};
export default Dropdown;

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
