"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import RegisterButton from "@/components/RegisterButton";
import Carousel from "@/components/Carousel";

export default function Home() {
  const [doorClosed, setDoorClosed] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const images = ["/1.jpg", "/2.jpg", "/3.jpeg"];

  useEffect(() => {
    const timeout = setTimeout(() => setDoorClosed(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTitle(true), 2800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1b1b1b]">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main content starts here */}
      <main className="h-full w-full">
        {/* Hero Section */}

        <section
          id="ignition hacks"
          className="h-[90vh] w-screen flex items-center justify-center text-center overflow-hidden"
        >
          <div className="basis-[24%] h-full z-45">
            <div className="h-full w-full">
              <div className="h-full w-full">
                <div className="h-full w-full bg-gradient-to-b from-[#E5DDFF] to-[#322C55] relative">
                  <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F]" />

                  <div className="relative w-[80%] h-[60%] mr-auto">
                    <Image
                      src="/LeftPoster.svg"
                      alt="Logo"
                      fill
                      className="absolute left-0 mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[52%] h-full flex relative">
            <div
              className={`relative bg-gradient-to-b from-[#E5DDFF] to-[#322C55] w-[50%] h-[90vh] z-30 [mask-image:linear-gradient(white,white),linear-gradient(black,black)]
                        [mask-size:100%_100%,60%_60%]
                        [mask-position:0_0,50%_25%]
                        [mask-repeat:no-repeat]
                        [mask-composite:exclude]
                        [mask-mode:alpha]
                        transition-[translate] duration-2000 ease-in-out ${doorClosed ? "-translate-x-full" : "translate-x-0"
                }
                        `}
            >
              <div className="absolute bg-transparent w-[70%] h-[66%] top-[7%] left-[15%] border-[10px] border-[#7072BF] z-40 rounded-[20px] bg-gradient-to-r from-[#8d8fce] to-[#8A87D5]" />
              <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F] z-30" />
              <div className="mt-[72vh] mx-auto px-4 pt-2 pb-0 bg-[#3A3358] w-fit text-white ">
                <div className="border-t-2 border-white py-2 text-[0.8rem]/[1rem] width-[100%]">
                  &lt; Hybrid Hackathon &gt;
                </div>
              </div>
            </div>
            <div
              className={`relative bg-gradient-to-b from-[#E5DDFF] to-[#322C55] w-[50%] h-[90vh] z-30   [mask-image:linear-gradient(white,white),linear-gradient(black,black)]
                        [mask-size:100%_100%,60%_60%]
                        [mask-position:0_0,50%_25%]
                        [mask-repeat:no-repeat]
                        [mask-composite:exclude]
                        [mask-mode:alpha]
                        transition-[translate] duration-2000 ease-in-out ${doorClosed ? "-translate-x-[-100%]" : "translate-x-0"
                }
                        `}
            >
              <div className="absolute bg-transparent w-[70%] h-[66%] top-[7%] left-[15%] border-[10px] border-[#7072BF] z-40 rounded-[20px] bg-gradient-to-r from-[#8d8fce] to-[#8A87D5]" />
              <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F] z-30" />
              <div className="mt-[72vh] mx-auto px-4 pt-2 pb-0 bg-[#3A3358] w-fit text-white ">
                <div className="border-t-2 border-white py-2 text-[0.8rem]/[1rem]">
                  &lt; Register Today &gt;
                </div>
              </div>
            </div>
            <div
              className={`absolute top-2/5 left-1/2 translate-x-[-50%] translate-y-[-50%] z-46 w-[55%] h-[55%] transition-opacity duration-1000 delay-0 ${showTitle ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image src="/Title.svg" alt="Logo" fill />
            </div>
            <div className="absolute bottom-0 w-full h-full opacity-[0.85] mb-[-4rem]">
              <Image src="/CityBackdrop.svg" alt="Logo" fill />
            </div>
          </div>
          <div className="basis-[24%] h-full z-45">
            <div className="h-full w-full">
              <div className="h-full w-full">
                <div className="h-full w-full bg-gradient-to-b from-[#E5DDFF] to-[#322C55] relative">
                  <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F]" />
                  <div className="relative w-[80%] h-[60%] ml-auto">
                    <Image
                      src="/RightPoster.svg"
                      alt="Logo"
                      fill
                      className="absolute right-0 mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Other Sections */}
        <section
          id="about"
          className="text-center flex flex-col items-center justify-center  static py-20">
          <h1 className="text-3xl font-bold mb-6">What is Ignition Hacks?</h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            Ignition Hacks is a student-led hackathon built to empower the next generation of innovative minds.</p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-6">   This year, we are creating more than just a hackathon, we want to use our platform to build an organization supporting education and opportunities for students to help. </p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">   Last year, we supported 600+ participants internationally offering 15+ workshops, 1-on-1 mentorship opportunities, and co-op fairs all while fostering a career-forward environment.</p>
          <div className="mt-8">
            <RegisterButton href="https://docs.google.com/forms/d/e/1FAIpQLSf3kNu2WlKENNfGuWwK9oLLSzKz31RFqZ-Qv_JbxU_unmjCPg/viewform" />
          </div>
          <img src="/About.svg" alt="About Statistics" className="w-full h-auto mt-8" />

        </section>

        <section
          id="past"
          className="h-[100vh] text-center flex items-center justify-center"
        >
          <Carousel images={images} />
        </section>

        <section
          id="faq"
          className="h-[100vh] text-center flex items-center justify-center"
        >
          <h2 className="text-3xl font-semibold m-auto">FAQ</h2>
        </section>

        <section
          id="sponsors"
          className="h-[100vh] text-center flex items-center justify-center"
        >
          <h2 className="text-3xl font-semibold m-auto">Sponsor/Team</h2>
        </section>
      </main>
    </div>
  );
}
