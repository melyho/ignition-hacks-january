import styles from "./page.module.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div>
      {/* added background colors and set height to 100vh for now to differentiate the sections */}

      {/* Header */}
      <Header />

      {/* Landing Page */}
      <section
        id="home"
        style={{ height: `calc(100vh - 131px)`, background: "black" }}
      >
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
      <section id="about" style={{ height: "100vh", background: "black" }}>
        <About />
      </section>

      {/* Past Events Section */}
      <section id="services" style={{ height: "100vh", background: "#e0e0e0" }}>
        <h1>past events</h1>
      </section>

      {/* Sponsors Section */}
      <section id="contact" style={{ height: "100vh", background: "#ccc" }}>
        <h1>sponsors</h1>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
