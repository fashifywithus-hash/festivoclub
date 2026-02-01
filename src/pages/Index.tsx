import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DaytimeExperiences from "@/components/DaytimeExperiences";
import EveningExperiences from "@/components/EveningExperiences";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MusicButton from "@/components/MusicButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden min-w-0">
      <Navigation />
      <Hero />
      <About />
      <DaytimeExperiences />
      <EveningExperiences />
      <Team />
      <Footer />
      <MusicButton />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
