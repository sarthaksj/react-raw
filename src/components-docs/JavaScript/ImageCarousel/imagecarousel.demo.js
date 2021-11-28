import React from "react";
import ImageCarousel, { CarouselItem } from "../Components/ImageCarousel";

export default function ImageCarouselComponent() {
    const images = [
        {
            src: "https://source.unsplash.com/00VPCxkLBbo",
            alt: "nature"
        },
        {
            src: "https://source.unsplash.com/FjPLjD5cDDU",
            alt: "nature"
        },
        {
            src: "https://source.unsplash.com/Vdv_3HmV-tk",
            alt: "nature"
        },
        {
            src: "https://source.unsplash.com/rOaDZwvsIDs",
            alt: "nature"
        },
        {
            src: "https://source.unsplash.com/UdomBAQ1x0o",
            alt: "food"
        },
        {
            src: "https://source.unsplash.com/5wxgvF8qkYY",
            alt: "food"
        },
        {
            src: "https://source.unsplash.com/W3oEeVdOMp8",
            alt: "food"
        }
    ]

    return (
        <ImageCarousel>
            {images.map((image, idx) => (
                <CarouselItem
                    key={idx}
                    src={image.src}
                    alt={image.alt} />
            ))}
        </ImageCarousel>
    );
};
