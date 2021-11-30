import React from "react";
import ImageGallery, { ImageGalleryItem } from "../Components/ImageGallery";

export default function ImageGalleryComponent() {
    const images = [
        {
            src: "https://source.unsplash.com/00VPCxkLBbo",
            alt: "nature",
        },
        {
            src: "https://source.unsplash.com/FjPLjD5cDDU",
            alt: "nature",
        },
        {
            src: "https://source.unsplash.com/mjP6MQz834E",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/tOOcPutnPVs",
            alt: "nature",
        },
        {
            src: "https://source.unsplash.com/_Fr3GfznvXg",
            alt: "nature",
        },
        {
            src: "https://source.unsplash.com/UdomBAQ1x0o",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/2JjdBanf_mE",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/5wxgvF8qkYY",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/gFPFxCDdX4A",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/j7nsDVn-3eI",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/lfAW14Oxh14",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/YX3jM5cdjw0",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/mUaIgOsXiFY",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/qrleIV6KkfI",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/g3zFJobFPVM",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/iiw-ThZCl-c",
            alt: "food",
        },

        {
            src: "https://source.unsplash.com/q8DovYzpoR8",
            alt: "food",
        },
        {
            src: "https://source.unsplash.com/84mVbrI-Ccg",
            alt: "food",
        },

    ];

    return (
        <ImageGallery>
            {images.map((image, idx) => (
                <ImageGalleryItem key={idx} src={image.src} alt={image.alt} />
            ))}
        </ImageGallery>
    );
}
