export const Dropdown = {
      Name: "Dropdown",
      src: `import React, { useRef, useState, useEffect } from "react";
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
};`,
      styles: `.Dropdown {
      position: relative;
      margin: 1rem;

      &__menu {
            position: absolute;
            left: 0;
            top: calc(100% + 0.2rem);
            background-color: white;
            padding: 0.75rem;
            border-radius: 0.25rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                  rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
      }

      &.active > .link + &__menu {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
      }

      &.active > .link,
      .link:hover {
            color: black;
      }
}
`,
      usage: `import React from "react";
import Dropdown from "./";

export default function Component() {
    return <Dropdown />;
}
`,
      documentation:
            "Toggle contextual overlays for displaying lists of links and more with Dropdowns.",
};
