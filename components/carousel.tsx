import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const images = ["/cat.jpeg", "/cat2.jpg"];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative mt-[6%] w-[76.5%] mx-auto aspect-[1.8/1] overflow-hidden rounded-2xl border-[8px] border-[#898989]">
      <Image
        src={images[current]}
        alt={`Slide ${current + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
        priority
      />

      <button
        onClick={prev}
        className="absolute top-1/2 left-[4.5%] transform -translate-y-1/2 -translate-x-1/2 w-[4.5%] h-[23%] rounded-xl bg-[linear-gradient(90deg,#2F1DC9,#4E3FBE)] bg-opacity-50 p-2 text-white hover:bg-opacity-75 z-40 cursor-pointer"
      >
        <Play className="w-full h-full text-white fill-white rotate-180 mx-auto" />
      </button>

      <button
        onClick={prev}
        className="absolute top-1/2 right-[4.5%] transform -translate-y-1/2 -translate-x-[-50%] w-[4.5%] h-[23%] rounded-xl bg-[linear-gradient(90deg,#2F1DC9,#4E3FBE)] bg-opacity-50 p-2 text-white hover:bg-opacity-75 z-40 cursor-pointer"
      >
        <Play className="w-full h-full text-white fill-white mx-auto" />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
