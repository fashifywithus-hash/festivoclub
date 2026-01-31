import { motion } from "framer-motion";
import { Palette, PenTool, Droplets, User, Pencil, Type, Sparkles } from "lucide-react";
import qawwaliImage from "@/assets/qawwali.png";
import artWorkshopImage from "@/assets/art-workshop.jpg";

const workshops = [
  { name: "Clay Modelling", icon: Sparkles, description: "Shape your imagination with hands-on clay sculpting" },
  { name: "Craft Making", icon: Sparkles, description: "Create beautiful handmade crafts and decorations" },
  { name: "Pottery Making", icon: Palette, description: "Learn the ancient art of pottery on the wheel" },
  { name: "Watercolour Painting", icon: Droplets, description: "Express yourself through fluid watercolors" },
  { name: "Portrait Making", icon: User, description: "Capture faces and emotions on canvas" },
  { name: "Sketching", icon: Pencil, description: "Master the fundamentals of drawing" },
  { name: "Calligraphy", icon: Type, description: "The elegant art of beautiful writing" },
  { name: "Live Conceptual Art", icon: PenTool, description: "Watch artists create live masterpieces" },
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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
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
              className="relative rounded-lg w-full aspect-video object-cover"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="font-body text-wine-light text-sm mb-3 tracking-widest uppercase text-center">
            Hosted by Shivamorphosis
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-gold mb-4 text-center">
            Art Workshops
          </h3>
          <p className="font-body text-lg text-foreground/90 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            Unleash your creativity through a diverse range of hands-on art workshops, 
            expertly curated and hosted by Shivamorphosis.
          </p>
        </motion.div>

        {/* Workshop Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((workshop, index) => {
            const IconComponent = workshop.icon;
            return (
              <motion.div
                key={workshop.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-charcoal-light rounded-xl p-6 border border-border hover:border-gold/40 transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-wine/20 to-gold/20 flex items-center justify-center mb-4 group-hover:from-wine/30 group-hover:to-gold/30 transition-all">
                    <IconComponent className="w-6 h-6 text-gold" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-display text-lg font-semibold text-champagne mb-2">
                    {workshop.name}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                    {workshop.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DaytimeExperiences;
