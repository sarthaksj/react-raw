import React, { Fragment, useState } from "react";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "./";

export default function Component() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <button onClick={() => setIsOpen(true)}>Toggle Modal</button>
            <Modal show={isOpen} callback={() => setIsOpen(false)}>
                <ModalHeader>I'm Modal Header</ModalHeader>
                <ModalBody>
                    <p style={{ textAlign: "justify" }}>{para}</p>
                </ModalBody>
                <ModalFooter>I'm Modal Footer </ModalFooter>
            </Modal>
        </Fragment>
    );
};
