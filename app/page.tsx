import styles from "./page.module.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About/About";
import Carousel from "@/components/past-events/past-events"
import Sponsors from "@/components/Sponsors/Sponsors";

export default function Home() {
  
  return (
    <div>

      {/* Header */}
      <Header />

      {/* Landing Page */}
      <section id="home" style={{ height: `calc(100vh - 131px)` }}>
        <Hero />
        <div style={{ position: "relative", width: "100%", height: "30%" }}>
          <img
            style={{
              position: "absolute",
              width: "100%",

              bottom: "0vh",
            }}
            src={"landing-page/skyline.svg"}
            alt={"Skyline"}
            color="white"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ height: "100vh" }}>
        <About />
      </section>

      <section id="events" style={{ height: 'fit-content'}}>
        <Carousel/>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" style={{ height: "fit-content"}}>
       <Sponsors/>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
