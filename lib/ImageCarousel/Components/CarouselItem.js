import React from "react";
import "../Styles/_imagecarousel.scss";

export const CarouselItem = ({ ...props }) => {
    const { src, alt, currentImg, index } = props;
    return (
        <li className={currentImg === index ? 'isActive' : ''}>
            <img src={src} alt={alt} />
        </li>
    );
};
