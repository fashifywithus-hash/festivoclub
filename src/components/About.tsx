import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
            <span className="text-champagne">About the</span>{" "}
            <span className="text-gold">Festival</span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          {/* Description */}
          <p className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
            Step into an enchanting world where Parisian elegance meets Indian artistry. 
            Love Ambrosia is a two-day immersive experience celebrating the finest in art, 
            culture, and live performances—set against the backdrop of a grand Eiffel Tower installation.
          </p>

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            From soulful Qawwali mornings to electrifying DJ nights, from hands-on art workshops 
            to spectacular fire shows—every moment is curated to inspire romance, creativity, 
            and unforgettable memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
