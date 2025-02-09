'use client'
import React, { useState } from 'react';
import './past-events.css';
import image1 from '../public/past-events/hackers.svg'

const Carousel: React.FC = () => {
  // Emails stored in an array inside the component
  const emails: string[] = [
    "../assets/image1.jpg",
    "../assets/image1.jpg",
    "../assets/image1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emails.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + emails.length) % emails.length);
  };

  return (
    <div className="events">

        <div className="carousel">
            <div className='carousel-title'>A blast to the past!</div>
            <div className="carousel-content">
                <img className="image" src={emails[currentIndex]} />
                <div className="navigation">
                <button onClick={prevSlide} className="arrow">&#10094;</button>
                <div className="dots">
                    {emails.map((_, index) => (
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
            <h5 className="about-title">In 2023 we had:</h5>
            <div className="about-wrapper">
                <ul className="about-items">
                <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>
                            <img
                            className='about-item-img'
                            alt='StoneImage'
                            src={emails[0]}
                            />
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                            title
                        </h5>
                    </div>
                        </div>
                    </li>
                    <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>
                            <img
                            className='about-item-img'
                            alt='StoneImage'
                            src={emails[0]}
                            />
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                            title
                        </h5>
                    </div>

                        </div>
                    </li>
                    <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>
                            <img
                            className='about-item-img'
                            alt='StoneImage'
                            src={emails[0]}
                            />
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                            title
                        </h5>
                    </div>

                        </div>
                    </li>
                    <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>
                            <img
                            className='about-item-img'
                            alt='StoneImage'
                            src={emails[0]}
                            />
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                            title
                        </h5>
                    </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <div className="event-footer-container">
            <div className="event-footer">There’s more to come!</div>
            <div className="event-footer-text">Follow our Instagram to keep up with all updates and be the first to know when hacker applications are open!</div>
            <button className="instagram-button">
            <span>Instagram</span>
                </button>
        </div>
    </div>
    
  );
};

export default Carousel;