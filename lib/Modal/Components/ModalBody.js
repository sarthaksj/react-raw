import React from "react";
import "../Styles/_modal.scss";

export const ModalBody = ({ children, ...props }) => {
    return <div className="Modal-Body">{children}</div>;
};
