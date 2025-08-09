import "./Resources.css";

import React, { useRef, useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export function Resources() {
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [images, setImages] = useState([]);

    // Load all slide images dynamically
    useEffect(() => {
        // Manually list files here if needed OR fetch them from public folder
        // Since React can't read public folder automatically at runtime without a server call,
        // you can store file names in an array and map over them
        const totalSlides = 9; // Change this if you add more slides
        const imgs = [];
        for (let i = 1; i <= totalSlides; i++) {
            imgs.push("/slides/slide${i}.png");
        }
        setImages(imgs);
    }, []);

    return (
        <div className="carousel-wrapper">
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                showDots={false}
                arrows={true}
                afterChange={(prevSlide: number, { currentSlide }: { currentSlide: number }) =>
                setCurrentSlide(currentSlide)
                }
                infinite
            >
                {images.map((img, i) => (
                <div key={i} className="carousel-slide">
                    <img src={img} alt={`Slide ${i + 1}`} className="carousel-image" />
                </div>
                ))}
            </Carousel>

            <div className="thumbnail-container">
                {images.map((thumb, i) => (
                <img
                    key={i}
                    src={thumb}
                    alt={`Thumbnail ${i + 1}`}
                    onClick={() => carouselRef.current.goToSlide(i)}
                    className={`thumbnail-image ${i === currentSlide ? "active-thumbnail" : ""}`}
                />
                ))}
            </div>

            <div className="download-button-container">
                <a href="/presentation.pdf" download className="download-button">
                    Download Presentation
                </a>
            </div>
        </div>
    );
}