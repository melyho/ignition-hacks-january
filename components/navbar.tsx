"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const iconClass = "w-8 h-8 hover:opacity-80";
const iconColor = "565093";
const sections = ["ignition", "about", "past", "faq", "sponsors"];

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
    <nav className="sticky top-0 z-50 w-full flex justify-between items-center bg-gradient-to-b from-[#DDDDDD] via-[#FFFFFF] to-[#DDDDDD] shadow h-[10vh] border-[5px] border-[#6B6B6B]">
      <div className="basis-1/5 h-full border-r-[5px] border-r-[#6B6B6B] flex justify-between items-center">
        <div className="relative w-13 h-13 m-auto">
          <Image src="/Vector.svg" alt="Logo" fill className="object-contain" />
        </div>
      </div>
      <div className="basis-3/5 h-full w-full px-10 pt-5">
        <div className="relative w-full h-4 bg-gray-400 rounded-full">
          {/* Purple fill */}
          <div
            ref={progressRef}
            className="absolute h-full bg-purple-400 rounded-full transition-[width] duration-800 ease-in-out"
            style={{ width: "10%" }}
          ></div>

          {/* Markers */}
          <div className="absolute top-[120%] left-0 w-full grid grid-cols-5 gap-0 transform -translate-y-1/2">
            {sections.map((id, idx) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex flex-col items-center w-full"
              >
                <div
                  className={`w-6 h-6 mb-1 border-4 rounded-full ${
                    idx === activeIndex
                      ? "bg-white border-black"
                      : "bg-white border-black"
                  }`}
                />
                <span className="text-sm capitalize text-center leading-tight">
                  {id === "past" ? "Past Events" : id === "faq" ? "FAQ" : id}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="basis-1/5 h-full border-l-[5px] border-l-[#6B6B6B] flex items-center justify-center">
        <div className="flex space-x-6 items-center">
          {/* Email */}
          <a href="mailto:your.email@example.com" aria-label="Email">
            <img
              src={`https://img.icons8.com/ios-filled/50/${iconColor}/new-post.png`}
              alt="Email"
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
              src={`https://img.icons8.com/ios-filled/50/${iconColor}/linkedin.png`}
              alt="LinkedIn"
              className={iconClass}
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ignitionhacks/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={`https://img.icons8.com/ios-filled/50/${iconColor}/instagram-new.png`}
              alt="Instagram"
              className={iconClass}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
