import React from "react";
import "../Styles/_modal.scss";

export const ModalFooter = ({ children, ...props }) => {
    return <div className="Modal-Footer">{children}</div>;
};
