'use client'
import React, { useState } from 'react';
import './past-events.css';
import Image from "next/image";

const Carousel: React.FC = () => {
  
  const images: string[] = [
    "/past-events/9D8B2ACC-21AA-49DA-9989-9BECDEB7DCBF.jpeg",
    "/past-events/788DEE9E-CAB3-4991-9263-52A041197359_1_102_o.jpeg",
    "/past-events/965EBE4F-C2BE-4153-BB6B-2FB7AEDFC745_1_102_o.jpeg",
    "/past-events/IMG_1032.jpg",
    "/past-events/IMG_3758.jpg",
    "/past-events/IMG_3761.jpg",
    "/past-events/IMG_3779.jpg",
    "/past-events/IMG_3787.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="events">
        
        <div className="carousel">
            <div className='carousel-title' style={{color: "#FFFFFF" }}>A blast to the past!</div>
            <div className="carousel-content">
                <Image
                        key={currentIndex}
                        className="image"
                        width={600}
                        height={400}
                        src={images[currentIndex]}
                        alt="carousel image"

                      />
                <div className="navigation">
                <button onClick={prevSlide} className="arrow">&#10094;</button>
                <div className="dots">
                    {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                    ))}
                </div>
                <button onClick={nextSlide} className="arrow">&#10095;</button>
                </div>
            </div>
        </div>
                    
        <div className="about-container">
            <h5 className="about-title" style={{color: "#FFFFFF"}}>In 2023 we had:</h5>
            <div className="about-wrapper">
                <ul className="about-items">
                <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>

                        <Image
                        className='about-item-img'
                        width={100}
                        height={100}
                        src={"/past-events/workshops.svg"}
                        alt="workshops"

                        />
                           
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                            8 workshops and panels
                        </h5>
                    </div>
                        </div>
                    </li>
                    <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>
                    <Image
                        className='about-item-img'
                        width={100}
                        height={100}
                        src={"/past-events/hackers.svg"}
                        alt="hackers"

                        />
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                           500+ hackers
                        </h5>
                    </div>

                        </div>
                    </li>
                    <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>
                    <Image
                        className='about-item-img'
                        width={100}
                        height={100}
                        src={"/past-events/projects.svg"}
                        alt="projects"

                        />
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                            75+ projects submitted
                        </h5>
                    </div>

                        </div>
                    </li>
                    <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>
                    <Image
                        className='about-item-img'
                        width={100}
                        height={100}
                        src={"/past-events/panelists.svg"}
                        alt="panelists"

                        />
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                            13 panelists
                        </h5>
                    </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <div className="event-footer-container">
            <div className="event-footer">There&apos;s more to come!</div>
            <div className="event-footer-text">Follow our Instagram to keep up with all updates and be the first to know when hacker applications are open!</div>
            <a href="https://www.instagram.com/ignitionhacks" target="_blank" className="instagram-button">
                <span>Visit our Instagram</span>
            </a>

        </div>
    </div>
    
  );
};

export default Carousel;