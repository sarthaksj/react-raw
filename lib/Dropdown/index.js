import React, { useRef, useState, useEffect } from "react";

import "./Styles/_dropdown.scss";

const Dropdown = ({ children }) => {
    const [visible, setVisible] = useState(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setVisible(false));


    return (
        <div ref={ref} className={`dropdown ${visible ? 'is-active' : ''}`}>
            <div className="dropdown-btn">
                <button onClick={() => setVisible(!visible)} className="button">
                    <span>Dropdown button</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </button>
            </div>
            <div className="dropdown-menu">
                <div className="dropdown-content">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Dropdown;

export { DropdownItem } from './Components/DropdownItem'
export { DropdownDivider } from './Components/DropdownDivider'



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
