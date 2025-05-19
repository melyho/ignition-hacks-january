import styles from "./page.module.css";
import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>

      {/* added background colors and set height to 100vh for now to differentiate the sections */}


      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" style={{ height: '100vh' }}>
        <h1>landing page</h1>
      </section>

      {/* About Section */}
      <section id="about" style={{ }}>
        <h1>about</h1>
      </section>

      {/* Statistics Section */}
      <section id="stats" style={{}}>
        <h1>past events</h1>
      </section>

      {/* Gallery Section */}
      <section id="gallery" style={{}}>
        <h1>sponsors</h1>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{}}>
        <h1>sponsors</h1>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
    
  );
}
