import styles from "./page.module.css";
import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/past-events"

export default function Home() {
  return (
    <div>

      {/* added background colors and set height to 100vh for now to differentiate the sections */}


      {/* Header */}
      <Header />

      {/* Landing Page */}
      <section id="home" style={{ height: '100vh', background: '#f0f0f0' }}>
        <h1>landing page</h1>
      </section>

      {/* About Section */}
      <section id="about" style={{ height: '100vh', background: '#dcdcdc' }}>
        <h1>about</h1>
      </section>

      {/* Past Events Section */}
      <section id="services" style={{ height: 'fit-content', background: '#e0e0e0' }}>
        <Carousel />

      </section>

      {/* Sponsors Section */}
      <section id="contact" style={{ height: '100vh', background: '#ccc' }}>
        <h1>sponsors</h1>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
    
  );
}
