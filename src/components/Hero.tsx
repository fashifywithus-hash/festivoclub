import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-eiffel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Love Ambrosia Festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-semibold mb-4 md:mb-6 tracking-tight">
            <span className="text-love">Love</span>{" "}
            <span className="text-ambrosia">Ambrosia</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-lg sm:text-xl md:text-2xl text-champagne mb-3 md:mb-4 tracking-wide"
          >
            India's First Paris-Inspired Art & Cultural Festival
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-1"
          >
            A luxurious celebration of art, culture, music, and romance inspired by Paris.
          </motion.p>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 md:mb-10 text-foreground/90"
          >
            <div className="flex items-center gap-2 justify-center text-center">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" />
              <span className="font-body text-sm sm:text-base md:text-lg">Lohiya Park, Gomti Nagar, Lucknow</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gold/30" />
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" />
              <span className="font-body text-sm sm:text-base md:text-lg">13–14 February</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a
                href="https://in.bookmyshow.com/activities/love-ambrosia/ET00484022"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on BookMyShow
              </a>
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              asChild
            >
              <a
                href="https://link.district.in/DSTRKT/zctlgx7f"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on District
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
