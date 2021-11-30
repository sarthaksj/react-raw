import React, { useState } from "react";
import "../Styles/_sortablelist.scss";

export const SortableListItem = ({ ...props }) => {
    const { name, index } = props;
    const [className, setClassName] = useState("");

    const dragStart = () => setClassName("dragging");

    const dragEnd = () => setClassName("");

    return (
        <li
            draggable="true"
            className={`draggable ${className}`}
            onDragEnd={dragEnd}
            onDragStart={dragStart}
        >
            <span>{index + 1}</span>
            <div>
                <p>{name}</p>
                <i className="fas fa-grip-lines" aria-hidden="true" />
            </div>
        </li>
    );
};
