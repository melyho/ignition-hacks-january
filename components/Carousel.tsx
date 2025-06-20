import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-auto flex items-center justify-center h-fit w-full">
      <div className="overflow-hidden relative w-[30vw] h-[13rem] rounded-[32px] bg-gradient-to-b from-[#898989] to-[#E5E5E5] p-2 mb-[30vh] z-40">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover transition-all duration-500 rounded-[24px] bg-none"
        />
      </div>

      <div className="absolute flex items-center justify-center w-[60%]">
        {/* <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-none text-white p-2 z-30 hover:scale-110 transition-transform duration-300"
        onClick={prevSlide}
      >
        <img src="/leftcarousel.svg" alt="Previous" className="h-[5rem]" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-none text-white p-2 z-30 hover:scale-110 transition-transform duration-300"
        onClick={nextSlide}
      >
        <img src="/rightcarousel.svg" alt="Next" className="h-[5rem]" />
      </button> */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1614 1419"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto z-30 absolute"
        >
          {/* Left button */}
          <g
            className="cursor-pointer hover:-translate-y-1 transition-transform"
            onClick={nextSlide}
          >
            <path
              d="M197.685 431.645c-.318-7.612 6.98-13.165 14.459-11.715 9.884 1.916 18.482 1.984 28.607.046 7.513-1.439 14.868 4.134 14.553 11.777-2.821 68.32-1.865 111.237.167 176.432.246 7.925-7.728 13.404-15.5 11.831-9.271-1.876-17.685-1.529-27.73.704-7.486 1.665-14.885-3.883-14.577-11.545 2.727-67.844 2.779-111.405.021-177.53"
              fill="url(#a)"
            />
            <path
              d="M236.285 501.938c3.334-1.924 7.5.481 7.5 4.33v29.819c0 3.849-4.166 6.255-7.5 4.33l-25.823-14.909c-3.334-1.925-3.334-6.736 0-8.661z"
              fill="url(#c)"
            />
          </g>

          {/* Right button */}
          <g
            className="cursor-pointer hover:-translate-y-1 transition-transform"
            onClick={prevSlide}
          >
            <path
              d="M1355.68 431.645c-.31-7.612 6.98-13.165 14.46-11.715 9.89 1.916 18.49 1.984 28.61.046 7.51-1.439 14.87 4.134 14.55 11.777-2.82 68.32-1.86 111.237.17 176.432.25 7.925-7.73 13.404-15.5 11.831-9.27-1.876-17.68-1.529-27.73.704-7.48 1.665-14.88-3.883-14.58-11.545 2.73-67.844 2.78-111.405.02-177.53"
              fill="url(#b)"
            />
            <path
              d="M1401.93 516.886c3.33 1.924 3.33 6.735 0 8.66l-25.82 14.909c-3.34 1.925-7.5-.481-7.5-4.33v-29.819c0-3.849 4.16-6.254 7.5-4.33z"
              fill="url(#d)"
            />
          </g>

          <defs>
            <linearGradient
              id="a"
              x1="251"
              y1="521"
              x2="197"
              y2="521"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".5" stopColor="#4E3FBE" />
              <stop offset="1" stopColor="#2F1DC9" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="1355"
              y1="521"
              x2="1409"
              y2="521"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".5" stopColor="#4E3FBE" />
              <stop offset="1" stopColor="#2F1DC9" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="261.422"
              y1="521.492"
              x2="198.933"
              y2="520.863"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".49" stopColor="#fff" />
              <stop offset="1" stopColor="#C1C1C1" />
            </linearGradient>
            <linearGradient
              id="d"
              x1="1349.5"
              y1="494"
              x2="1429"
              y2="494"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".353" stopColor="#fff" />
              <stop offset="1" stopColor="#C1C1C1" />
            </linearGradient>
          </defs>
        </svg>
        <img src="/subwaycarousel-nobuttons.svg" alt="Carousel" className="w-full h-auto z-10" />
      </div>


    </div>
  );
};

export default Carousel;