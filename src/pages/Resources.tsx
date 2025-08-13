import "./Resources.css";

import _, { useRef, useState, useEffect, ComponentRef } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export function Resources() {
    type CarouselRefType = ComponentRef<typeof Carousel>;
    const carouselRef = useRef<CarouselRefType>(null);
    // Tracks which image is currently shown (carousel index)
    const [currentSlide, setCurrentSlide] = useState(0);
    // Holds all image paths
    const [images, setImages] = useState<string[]>([]);
    // Number of clones react-multi-carousel uses for infinite mode (default is 3 for single item)
    const cloneCount = 3;
    // Adjust index for thumbnail highlight
    const adjustedIndex = ((currentSlide - cloneCount + 1 + images.length) % images.length);

    // Load all slide images dynamically from public/slides
    useEffect(() => {
        const totalSlides = 9; // Change this if you add more slides
        const imgs = [];
        for (let i = 1; i <= totalSlides; i++) {
            imgs.push(`/slides/slide${i}.png`);
        }
        setImages(imgs);
    }, []);

    return (
        <div className="resources-page">
            <div className="resources-header">
                <h1>VEX Resources</h1>
                <p>Sponsoring our robotics team offers great visibility, positive branding, and community engagement.<br/>
                   Your support helps fuel future innovators and provides students with hands-on STEM experience.
                </p>
            </div>

            <section className="resources-content">
                <p>Here you can find a variety of resources related to VEX Robotics.</p>

                <div className="carousel-wrapper">
                    {/* React Multi Carousel for advanced features */}
                    <Carousel
                        ref={carouselRef}
                        responsive={responsive}
                        showDots={false}
                        arrows={true}
                        afterChange={(_, state) => setCurrentSlide(state.currentSlide)}
                        infinite
                    >
                        {images.map((img, i) => (
                            <div key={i} className="carousel-slide">
                                <img src={img} alt={`Slide ${i + 1}`} className="carousel-image"/>
                            </div>
                        ))}
                    </Carousel>

                    {/* Thumbnails for direct selection */}
                    <div className="thumbnail-container">
                        {images.map((thumb, i) => (
                            <img
                                key={i}
                                src={thumb}
                                alt={`Thumbnail ${i + 1}`}
                                onClick={() => carouselRef.current?.goToSlide(i)}
                                className={`thumbnail-image ${i === adjustedIndex ? "active-thumbnail" : ""}`}
                            />
                        ))}
                    </div>

                    {/* Download button */}
                    <div className="download-button-container">
                        <a href="/Blanson Robotics.pdf" download className="download-button">
                            Download Presentation
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}