import React, { useState } from "react";
import "./Styles/_imagecarousel.scss";

export default function ImageCarousel({ ...props }) {
    const { children } = props;
    const [currentImg, setCurrentImage] = useState(0);

    const childrenWithProps = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { currentImg, index });
        }
        return child;
    });

    const prev = () => setCurrentImage((currentImg) => currentImg - 1);
    const next = () => setCurrentImage((currentImg) => currentImg + 1);

    return (
        <div className="Image-Carousel">
            {currentImg > 0 && (
                <button onClick={prev} className="prev">
                    <i className="fas fa-chevron-circle-left" />
                </button>
            )}

            {currentImg < children.length - 1 && (
                <button onClick={next} className="next">
                    <i className="fas fa-chevron-circle-right" />
                </button>
            )}

            <div>
                {children.map((element, idx, array) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={idx === currentImg ? "isActive" : ""}
                    />
                ))}
            </div>
            <ul>{childrenWithProps}</ul>
        </div>
    );
}

export { CarouselItem } from "./Components/CarouselItem";
