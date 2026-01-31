import { motion } from "framer-motion";
import djNightImage from "@/assets/dj-night.jpg";
import fireShowImage from "@/assets/fire-show.jpg";

const EveningExperiences = () => {
  return (
    <section id="evening" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-gold/30 rotate-45" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-wine/30 rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Evening & Night <span className="text-gold">Experiences</span>
          </h2>
          <div className="divider-gold w-32 mx-auto mt-6" />
        </motion.div>

        {/* Day 1 - 13th February */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 border border-gold/50 rounded-full font-display text-gold text-lg">
              13th February
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Jaisalmer Night */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal-light rounded-xl p-8 border border-border hover:border-gold/30 transition-colors group"
            >
              <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">5:00 – 7:30 PM</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-champagne mb-4">
                Jaisalmer Night
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                Immerse yourself in the royal desert-inspired décor with warm golden hues, 
                evoking the majestic beauty of Rajasthan's golden city.
              </p>
            </motion.div>

            {/* DJ Night - Ravetek */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-charcoal-light rounded-xl overflow-hidden border border-border hover:border-wine/30 transition-colors group"
            >
              <img
                src={djNightImage}
                alt="DJ Night"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <p className="font-body text-wine-light text-sm tracking-widest uppercase mb-2">7:30 – 10:00 PM</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-champagne mb-2">
                  DJ Night
                </h3>
                <p className="font-body text-gold text-lg mb-3">DJ Ravetek</p>
                <a
                  href="https://instagram.com/ravetek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-muted-foreground hover:text-gold transition-colors"
                >
                  @ravetek
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Day 2 - 14th February */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 border border-wine/50 rounded-full font-display text-wine-light text-lg">
              14th February — Valentine's Day
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cultural Performances */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal-light rounded-xl p-8 border border-border hover:border-gold/30 transition-colors"
            >
              <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">5:00 – 7:00 PM</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-champagne mb-4">
                Cultural Performances
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                Witness captivating cultural dance performances and golden-era melodies 
                that transport you to a time of timeless elegance and romance.
              </p>
            </motion.div>

            {/* Grand Night Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-charcoal-light rounded-xl overflow-hidden border border-border hover:border-wine/30 transition-colors"
            >
              <img
                src={fireShowImage}
                alt="Fire Show"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <p className="font-body text-wine-light text-sm tracking-widest uppercase mb-2">7:30 – 10:00 PM</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-champagne mb-4">
                  Grand Night Experience
                </h3>
                <div className="space-y-2">
                  <p className="font-body text-foreground/80">
                    <span className="text-gold">DJ Teddy</span> — Electrifying beats
                  </p>
                  <p className="font-body text-foreground/80">
                    <span className="text-amber">International Mexican Fire Show</span> — A spectacular finale
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EveningExperiences;
