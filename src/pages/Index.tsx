import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DaytimeExperiences from "@/components/DaytimeExperiences";
import EveningExperiences from "@/components/EveningExperiences";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <DaytimeExperiences />
      <EveningExperiences />
      <Team />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
