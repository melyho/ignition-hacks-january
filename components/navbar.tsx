"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const iconClass = "w-[1.5rem] h-[1.5rem] hover:scale-110 transition-transform duration-300";
const sections = ["ignition hacks", "about", "past", "faq", "sponsors"];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = sections.indexOf(id);
            if (index !== -1) {
              setActiveIndex(index);
              if (progressRef.current) {
                const percentage = (index / (sections.length - 1)) * 80 + 10;
                console.log(percentage);
                progressRef.current.style.width = `${percentage}%`;
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-between items-center bg-gradient-to-b from-[#DDDDDD] via-[#FFFFFF] to-[#DDDDDD] shadow h-[12vh] border-[5px] border-[#6B6B6B]">
      <div className="basis-1/5 border-r-[5px] border-r-[#6B6B6B] flex justify-between items-center h-full">
        <div className="relative w-[2rem] h-[2rem] m-auto">
          <Image src="/Vector.svg" alt="Logo" fill className="object-contain" />
        </div>
      </div>
      <div className="basis-3/5 h-max w-full px-10 py-8 pt-4">
        <div className="relative w-full h-[0.8rem] bg-gray-400 rounded-full flex-col items-start justify-start">
          {/* Purple fill */}
          <div
            ref={progressRef}
            className="absolute h-full bg-[#A69DFF] rounded-full transition-[width] duration-800 ease-in-out"
            style={{ width: "10%" }}
          ></div>

          {/* Markers */}
          <div className="absolute top-[110%] left-0 w-full grid grid-cols-5 gap-0 transform -translate-y-[1.2rem]">
            {sections.map((id, idx) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex flex-col items-center w-full"
              >
                <div
                  className={`w-[1.3rem] h-[1.3rem] mb-1 border-[0.24rem] rounded-full hover:scale-110 transition-transform duration-300 ${
                    idx === activeIndex
                      ? "bg-white border-[#393939]"
                      : "bg-white border-[#393939]"
                  }`}
                />
                <span className="text-[0.8rem] capitalize text-center leading-tight font-[550] text-[#1b1b1b]">
                  {id === "past" ? "Past Events" : id === "faq" ? "FAQ" : id}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="basis-1/5 h-full border-l-[5px] border-l-[#6B6B6B] flex items-center justify-center">
        <div className="flex space-x-3 items-center">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ignitionhacks/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/instagram.svg"
              alt="Instagram"
              className={iconClass}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/ignition-hacks/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className={iconClass}
            />
          </a>

          {/* Mail */}
          <a
            href="mailto:info@ignitionhacks.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mail"
          >
            <img
              src="/mail.svg"
              alt="Mail"
              className= "w-[auto] h-[1.3rem] hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
