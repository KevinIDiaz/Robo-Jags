import "./Sponsors.css";
import Mc from '../assets/McD.png'
import ramp from '../assets/ramp.png'
import ismael from '../assets/ismael.jpeg'

import _, { useRef, useState, useEffect, ComponentRef } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export function Sponsors() {
    // Carousel setup (same as in Resources.tsx)
    type CarouselRefType = ComponentRef<typeof Carousel>;
    const carouselRef = useRef<CarouselRefType>(null);
    // Tracks which image is currently shown (carousel index)
    const [, setCurrentSlide] = useState(0);
    // Holds all image paths
    const [images, setImages] = useState<string[]>([]);
    // Number of clones react-multi-carousel uses for infinite mode (default is 3 for single item)
    // const cloneCount = 3;
    // Adjust index for thumbnail highlight
    // let adjustedIndex = ((currentSlide - cloneCount + 1 + images.length) % images.length);

    // To remove thumbnails, uncomment this line, otherwise, leave it commented out
    // adjustedIndex = 0;

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
        <div className="sponsors-page">
            <div className="sponsors-header">
                <h1>Our Sponsors</h1>
                <p>We are deeply grateful for the support of our generous sponsors.</p>
            </div>

            <section className="current-sponsors">
                <h2>Current Sponsors</h2>
                <div className="sponsor-logos">
                    {/* Replace with actual logos or names */}
                    <div className="sponsor"><img src={Mc}/><p>- Rose & Alexa -</p></div>
                    <div className="sponsor"><img src={ramp}/></div>
                    <div className="sponsor"><img src={ismael}/><p>- Ismael Diaz -</p></div>
                </div>
            </section>

            <section className="why-sponsor">
                <h2>Why Sponsor Us?</h2>
                <p>Sponsoring our robotics team offers great visibility, positive branding, and community engagement. Your support helps fuel future innovators and provides students with hands-on STEM experience.</p>
            </section>
            <h2>Sponsorship Tiers</h2>
            <section className="sponsorship-tiers">
                
                <div className="tier bronze">
                    <h3>Bronze<br/><span>Under $1000</span></h3>
                    <ul>
                        <li>Logo on team website</li>
                        <li>Logo on t-shirts</li>
                        <li>Letter of gratitude</li>
                    </ul>
                </div>
                <div className="tier silver">
                    <h3>Silver<br/><span>$1000 - $2499</span></h3>
                    <ul>
                        <li>Link to company page on team website</li>
                        <li>All bronze benefits</li>
                    </ul>
                </div>
                <div className="tier gold">
                    <h3>Gold<br/><span>$2500 - $4999</span></h3>
                    <ul>
                        <li>Logo displayed prominently on team shirt during competitions</li>
                        <li>Logo displayed on robots</li>
                        <li>All Bronze and Silver benefits</li>
                    </ul>
                </div>
                {/* <div className="tier diamond">
                    <h3>Diamond<br/><span>$500 - $1,000</span></h3>
                    <ul>
                        <li>Logo on team robots</li>
                        <li>Medium logo on banners/shirts</li>
                        <li>Team shoutout video</li>
                        <li>Name on “Thank You” section</li>
                        <li>Digital/Physical thank you note</li>
                    </ul>
                </div> */}
                <div className="tier platinum">
                    <h3>Platinum<br/><span>$5,000+</span></h3>
                    <ul>
                        <li>Social media promotion</li>
                        <li>Any other negotiated requests for company recognition</li>
                        <li>All Bronze, Silver, and Gold benefits</li>
                    </ul>
                </div>
            </section>

            <section className="cta">
                <h2>Become a Sponsor</h2>
                <p>Support our team and help us build the future of robotics!</p>
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
    
                        {/* Thumbnails for direct selection
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
                        </div> */}
                    </div>
                </section>

                {/* Download button */}
                    <div className="download-button-container">
                        <a href="/Blanson Robotics.pdf" download className="sponsor-button">Download Sponsorship Info</a>
                    </div>
            </section>
        </div>
    );
}