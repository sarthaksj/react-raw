import React, { useRef, useEffect, useState } from "react";
import "../Styles/_imagegallery.scss";

export const ImageGalleryItem = ({ ...props }) => {
    const { src, alt, onImageChange, img } = props;
    const [span, setSpan] = useState();
    const imageRef = useRef();

    useEffect(() => {
        if (!imageRef.current) return;
        imageRef.current.addEventListener("load", setSpans);
    }, [imageRef]);

    const setSpans = () => {
        const height = imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        setSpan(spans);
    };

    return (
        <img
            style={{ gridRowEnd: `span ${span}` }}
            ref={imageRef}
            className={img.src === src ? "is-active" : ""}
            onClick={() => onImageChange({ src, alt })}
            src={src}
            alt={alt}
        />
    );
};
