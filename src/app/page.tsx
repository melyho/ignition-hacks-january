import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import FAQSection from "../components/FAQSection";
import SponsorsSection from "../components/SponsorsSection";
import MeetTheTeamSection from "../components/MeetTheTeamSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <FAQSection />
      <SponsorsSection />
      <MeetTheTeamSection />
    </div>
  );
}
