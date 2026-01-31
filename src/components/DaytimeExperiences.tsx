import { motion } from "framer-motion";
import qawwaliImage from "@/assets/qawwali.jpg";
import artWorkshopImage from "@/assets/art-workshop.jpg";

const workshops = [
  "Clay Modelling",
  "Craft Making",
  "Pottery Making",
  "Watercolour Painting",
  "Portrait Making",
  "Sketching",
  "Calligraphy",
  "Live Conceptual Art",
];

const DaytimeExperiences = () => {
  return (
    <section id="daytime" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold text-lg mb-3 tracking-widest uppercase">11:30 AM – 5:00 PM</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Daytime Experiences
          </h2>
          <div className="divider-gold w-32 mx-auto mt-6" />
        </motion.div>

        {/* Qawwali Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-wine/20 to-gold/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <img
              src={qawwaliImage}
              alt="Live Qawwali Performance"
              className="relative rounded-lg w-full aspect-square object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-gold mb-6">
              Live Qawwali Performances
            </h3>
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Experience the soul-stirring melodies of traditional Qawwali at the heart of the festival. 
              Gather on royal carpets in circular formations as the music fills the air, 
              creating an atmosphere of deep spiritual connection and artistic appreciation.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Paint, sketch, or simply soak in the ambiance as talented artists perform 
              timeless compositions under the open sky.
            </p>
          </motion.div>
        </div>

        {/* Art Workshops Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="font-body text-wine-light text-sm mb-3 tracking-widest uppercase">
              Hosted by Shivamorphosis
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-gold mb-6">
              Art Workshops
            </h3>
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-8">
              Unleash your creativity through a diverse range of hands-on art workshops, 
              expertly curated and hosted by Shivamorphosis.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-gold rotate-45" />
                  <span className="font-body text-foreground/80">{workshop}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group order-1 lg:order-2"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-wine/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <img
              src={artWorkshopImage}
              alt="Art Workshops"
              className="relative rounded-lg w-full aspect-square object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DaytimeExperiences;
