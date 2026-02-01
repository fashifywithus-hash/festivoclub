import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Shivam Singh",
    role: "Founder & Art Director",
    subtitle: "Founder of Shivamorphosis",
  },
  {
    name: "Shubh Srivastava",
    role: "CEO",
  },
  {
    name: "Abdul Mueez",
    role: "Managing Director",
  },
  {
    name: "Vanshaj Singh Chandel",
    role: "Production Executive",
  },
  {
    name: "Raghuvansh Singh Chandel",
    role: "Chief Growth & Marketing Strategist",
  },
  {
    name: "Aqiq Ali",
    role: "Production Manager",
  },
  {
    name: "Kartikey Kumar",
    role: "CTO",
    subtitle: "IIT Roorkee, Batch of 2024",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-dark relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
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
              <div className="relative rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-300 bg-charcoal-light">
                {/* Placeholder Card */}
                <div className="aspect-[3/4] flex flex-col items-center justify-center p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-wine/20 to-gold/20 flex items-center justify-center mb-6 group-hover:from-wine/30 group-hover:to-gold/30 transition-all">
                    <User className="w-12 h-12 text-gold" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
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
