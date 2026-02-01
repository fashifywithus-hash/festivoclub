import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Daytime", href: "#daytime" },
    { label: "Evening", href: "#evening" },
    { label: "Team", href: "#team" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-foreground/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/festivoclub.2026?igsh=bHJsYzd3azFrbnFz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button variant="gold" size="sm" asChild>
              <a
                href="https://in.bookmyshow.com/activities/love-ambrosia/ET00484022"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-border pt-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-foreground/80 hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/festivoclub.2026?igsh=bHJsYzd3azFrbnFz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <Button variant="gold" size="sm" asChild className="flex-1">
                  <a
                    href="https://in.bookmyshow.com/activities/love-ambrosia/ET00484022"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
