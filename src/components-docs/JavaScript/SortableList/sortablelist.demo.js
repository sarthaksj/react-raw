import React from "react";
import SortableList, { SortableListItem } from '../Components/SortableList';

export default function SortableListComponent() {
    const People = [
        'Jeff Bezos',
        'Bill Gates',
        'Warren Buffett',
        'Bernard Arnault',
        'Carlos Slim Helu',
        'Amancio Ortega',
        'Larry Ellison',
        'Mark Zuckerberg',
        'Michael Bloomberg',
        'Larry Page'
    ];

    return (
        <SortableList>
            {People.map((p, idx) => (
                <SortableListItem key={idx} name={p} index={idx} />
            ))}
        </SortableList>
    );

}



