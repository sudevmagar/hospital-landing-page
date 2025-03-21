import About from "./components/About";
import BookSection from "./components/BookSection";
import DoctorsSection from "./components/DoctorsSection";
import HeroSection from "./components/HeroSection";
import ReviewSection from "./components/ReviewSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <About />
      <DoctorsSection />
      <BookSection />
      <ReviewSection />
    </div>
  );
}