import React, { useState } from "react";
import "./Styles/_imagegallery.scss";

export default function ImageGallery({ ...props }) {
    const { children } = props;

    const firstChild = children[0].props;

    const [img, setImg] = useState({ src: firstChild.src, alt: firstChild.alt });

    const onImageChange = (props) => {
        const { src, alt } = props;
        setImg({ ...img, src, alt });
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { onImageChange, img });
        }
        return child;
    });

    return (
        <div className="Image-Gallery">
            <div>
                <img src={img.src} alt={img.alt} />
            </div>
            <div>{childrenWithProps}</div>
        </div>
    );
}

export { ImageGalleryItem } from "./Components/ImageGalleryItem";
