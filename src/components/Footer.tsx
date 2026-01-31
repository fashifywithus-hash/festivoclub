import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-charcoal border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h3 className="font-display text-3xl font-semibold mb-2">
            <span className="text-love">Love</span>{" "}
            <span className="text-ambrosia">Ambrosia</span>
          </h3>

          <p className="font-body text-muted-foreground mb-8">
            Presented by Festivo Club
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/festivoclub.2026?igsh=bHJsYzd3azFrbnFz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://festivoclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-gold hover:text-gold-light transition-colors"
            >
              festivoclub.com
            </a>
          </div>

          {/* Divider */}
          <div className="divider-gold w-full max-w-md mb-8" />

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © 2025 Shivamorphosis Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
