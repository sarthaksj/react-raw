import React, { useRef } from "react";
import "./Styles/_sortablelist.scss";

export default function SortableList({ ...props }) {
    const { children } = props;
    const ref = useRef();

    const dragOver = (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(ref.current, e.clientY);
        const draggable = ref.current.querySelector(".dragging");

        if (afterElement === null) {
            ref.current.appendChild(draggable);
        } else {
            ref.current.insertBefore(draggable, afterElement);
        }
    };

    const getDragAfterElement = (container, y) => {
        const draggableElements = Array.from(
            container.querySelectorAll(".draggable:not(.dragging)")
        );

        return draggableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;

                if (offset < 0 && offset > closest.offset) {
                    return { offset, element: child };
                } else {
                    return closest;
                }
            },
            { offset: Number.NEGATIVE_INFINITY }
        ).element;
    };

    return (
        <ul ref={ref} onDragOver={dragOver} className="Sortable-List">
            {children}
        </ul>
    );
}

export { SortableListItem } from "./Components/SortableListItem";
