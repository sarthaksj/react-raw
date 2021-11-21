import React from "react";
import "../Styles/_modal.scss";

export const ModalHeader = ({ children, ...props }) => {
    return <div className="Modal-Header">{children}</div>;
};
