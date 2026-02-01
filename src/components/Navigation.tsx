import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-[100vw]">
        <div className="flex items-center justify-between">
          {/* Organizer logos + Logo */}
          <div className="flex items-center gap-3">
            {/* Two organizer logos */}
            <div className="flex items-center gap-2 shrink-0">
              <img
                src="/festivoclub/images/shivamorphosis.jpg"
                alt="Organizer"
                className="w-9 h-9 rounded-full object-cover border border-gold/40 bg-muted"
              />
              <img
                src="/festivoclub/images/festivo.jpeg"
                alt="Organizer"
                className="w-9 h-9 rounded-full object-cover border border-gold/40 bg-muted"
              />
            </div>
            <a href="#" className="font-display text-xl font-semibold">
              <span className="text-love">Love</span>{" "}
              <span className="text-ambrosia">Ambrosia</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
