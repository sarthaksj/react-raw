import React, { useState } from "react";
import Toast from "../../../../../lib/Toast";

export default function Component() {
    const [isOpen, setIsOpen] = useState(true);
    return <Toast isOpen={isOpen} callback={() => setIsOpen(false)} />;
}
