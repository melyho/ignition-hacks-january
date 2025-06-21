"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import FaqSection from "@/components/faqSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [doorClosed, setDoorClosed] = useState(true);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDoorClosed(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTitle(true), 2800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main content starts here */}
      <main className="h-full w-full">
        {/* Hero Section */}
        <section
          id="ignition"
          className="h-[90vh] w-screen flex items-center justify-center text-center"
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
              className={`relative bg-gradient-to-b from-[#E5DDFF] to-[#322C55] w-[50%] h-[90vh] z-30   [mask-image:linear-gradient(white,white),linear-gradient(black,black)]
                        [mask-size:100%_100%,60%_60%]
                        [mask-position:0_0,50%_25%]
                        [mask-repeat:no-repeat]
                        [mask-composite:exclude]
                        [mask-mode:alpha]
                        transition-[translate] duration-2000 ease-in-out ${
                          doorClosed ? "-translate-x-[70%]" : "translate-x-0"
                        }
                        `}
            >
              <div className="absolute bg-transparent w-[70%] h-[66%] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[10px] border-[#7072BF] z-40 rounded-[20px] bg-gradient-to-r from-[#8d8fce] to-[#8A87D5]" />
              <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F] z-30" />
              <div className="mt-[72vh] mx-auto px-4 pt-2 pb-0 bg-[#3A3358] w-fit text-white ">
                <div className="border-t-2 border-white py-2">
                  Please do not lean on doors
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
                        transition-[translate] duration-2000 ease-in-out ${
                          doorClosed ? "-translate-x-[-70%]" : "translate-x-0"
                        }
                        `}
            >
              <div className="absolute bg-transparent w-[70%] h-[66%] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[10px] border-[#7072BF] z-40 rounded-[20px] bg-gradient-to-r from-[#8d8fce] to-[#8A87D5]" />
              <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-b from-[#6C6C6C] to-[#100F0F] z-30" />
              <div className="mt-[72vh] mx-auto px-4 pt-2 pb-0 bg-[#3A3358] w-fit text-white ">
                <div className="border-t-2 border-white py-2">
                  Please do not lean on doors
                </div>
              </div>
            </div>
            <div
              className={`absolute top-2/5 left-1/2 translate-x-[-50%] translate-y-[-50%] z-46 w-[55%] h-[55%] transition-opacity duration-1000 delay-0 ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src="/Title.svg" alt="Logo" fill />
            </div>
            <div className="absolute bottom-0 w-full h-full">
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

        <section className="w-full h-[40vh]">
          <div className="relative w-full h-full bg-[linear-gradient(180deg,#605471,#010101)]">
            <div className="absolute top-0 left-0 h-full w-[24%] transform origin-top-left skew-x-[-30deg] border-r-[8px] bg-black border-r-transparent [border-image:linear-gradient(180deg,#393045,#010101)_1]" />
            <div className="absolute top-0 right-0 h-full w-[24%] transform origin-top-right skew-x-[30deg] bg-black border-l-[8px] border-l-transparent [border-image:linear-gradient(180deg,#393045,#010101)_1]" />
            <div className="absolute top-0 right-[50%] translate-x-[50%] h-[14px] w-[calc(52%+14px)] bg-[#393045]" />
          </div>
        </section>

        {/* Other Sections */}
        <section
          id="about"
          className="text-center flex flex-col items-center justify-center  py-[7vh]"
        >
          <div className="flex flex-col gap-[4vh] text-white max-w-[70vw] mx-auto px-4 text-[1.5vw]">
            <h2 className="text-[3vw] font-semibold m-auto text-white">
              What is Ignition Hacks?
            </h2>
            <p>
              Ignition Hacks is a student-led hackathon built to empower the
              next generation of innovative minds.
            </p>

            <p>
              This year, we are creating more than just a hackathon, we want to
              use our platform to build an organization supporting education and
              opportunities for students to help.
            </p>

            <p>
              Last year, we supported 600+ participants internationally offering
              15+ workshops, 1-on-1 mentorship opportunities, and co-op fairs
              all while fostering a career-forward environment.
            </p>

            <button className="w-[40%] mx-auto mt-6 px-8 py-3 border-2 border-white rounded-xl text-white font-bold text-[2vw] hover:bg-white cursor-pointer hover:text-black transition">
              Register Here
            </button>
          </div>

          <div className="relative w-full aspect-[2.5/1] mt-[20vh] bg-[url('/Stats.svg')] bg-cover bg-center">
          </div>
        </section>

        <section
          id="past"
          className="text-center flex items-center justify-center"
        >
          <div className="relative w-[70%] aspect-[1.2/1] mt-[20vh] bg-[linear-gradient(180deg,#000000,#434343,#2B2B2B)]">
            <Carousel />
            <Image src="/Carousel.svg" alt="Logo" fill className="absolute" />
          </div>
        </section>

        <section
          id="faq"
          className="w-full text-center flex items-center justify-center"
        >
          <div className="relative w-full aspect-[1.2/1] bg-[url('/FAQ.svg')] bg-cover bg-center">
            <FaqSection />
          </div>
        </section>

        <section
          id="sponsors"
          className="h-[100vh] text-center flex items-center justify-center border px-6"
        >
          <h2 className="text-3xl font-semibold m-auto">Sponsor/Team</h2>
        </section>
      </main>
    </div>
  );
}
