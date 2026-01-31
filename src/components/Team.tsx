import { motion } from "framer-motion";

import shivamImage from "@/assets/team/shivam-singh.jpg";
import shubhImage from "@/assets/team/shubh-srivastava.jpg";
import abdulImage from "@/assets/team/abdul-mueez.jpg";
import vanshajImage from "@/assets/team/vanshaj-chandel.jpg";
import raghuvanshImage from "@/assets/team/raghuvansh-chandel.jpg";
import aqiqImage from "@/assets/team/aqiq-ali.jpg";
import kartikeyImage from "@/assets/team/kartikey-kumar.jpg";

const teamMembers = [
  {
    name: "Dr. Shivam Singh",
    role: "Founder & Art Director",
    subtitle: "Founder of Shivamorphosis",
    image: shivamImage,
  },
  {
    name: "Shubh Srivastava",
    role: "CEO",
    image: shubhImage,
  },
  {
    name: "Abdul Mueez",
    role: "Managing Director",
    image: abdulImage,
  },
  {
    name: "Vanshaj Singh Chandel",
    role: "Production Executive",
    image: vanshajImage,
  },
  {
    name: "Raghuvansh Singh Chandel",
    role: "Chief Growth & Marketing Strategist",
    image: raghuvanshImage,
  },
  {
    name: "Aqiq Ali",
    role: "Production Manager",
    image: aqiqImage,
  },
  {
    name: "Kartikey Kumar",
    role: "CTO",
    subtitle: "IIT Roorkee, Batch of 2024",
    image: kartikeyImage,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-dark relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            The Faces Behind
          </h2>
          <p className="font-display text-2xl md:text-3xl text-gold">
            Shivamorphosis & Festivo Club
          </p>
          <div className="divider-gold w-32 mx-auto mt-8" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-300">
                {/* Full Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-champagne mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-gold text-sm mb-1">
                    {member.role}
                  </p>
                  {member.subtitle && (
                    <p className="font-body text-xs text-muted-foreground">
                      {member.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shivamorphosis Credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-4 border border-gold/20 rounded-lg bg-charcoal/50">
            <p className="font-display text-lg text-champagne mb-1">
              Shivamorphosis Pvt. Ltd.
            </p>
            <p className="font-body text-muted-foreground mb-3">
              Creative & Artistic Partner
            </p>
            <a
              href="https://shivamorphosis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-gold hover:text-gold-light transition-colors"
            >
              shivamorphosis.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
