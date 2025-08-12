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
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [images, setImages] = useState<string[]>([]);
        // Adjust for react-multi-carousel clones in infinite mode
        const cloneCount = 3;
        const adjustedIndex = ((currentSlide - cloneCount + images.length) % images.length);
    
    // Load all slide images dynamically
    useEffect(() => {
        // Manually list files here if needed OR fetch them from public folder
        // Since React can't read public folder automatically at runtime without a server call,
        // you can store file names in an array and map over them
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
                <p>Explore our resources to learn more about our team and projects.</p>
            </div>

            <section className="resources-content">
                <p>Here you can find a variety of resources related to VEX Robotics.</p>

                <div className="carousel-wrapper">
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
                            onClick={() => carouselRef.current?.goToSlide(i)}
                                className={`thumbnail-image ${i === adjustedIndex ? "active-thumbnail" : ""}`}
                        />
                        ))}
                    </div>

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