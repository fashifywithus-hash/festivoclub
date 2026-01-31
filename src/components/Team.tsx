import { motion } from "framer-motion";

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
              <div className="bg-charcoal-light rounded-xl p-6 border border-border hover:border-gold/30 transition-all duration-300 h-full">
                {/* Placeholder Portrait */}
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-wine/30 to-gold/30 flex items-center justify-center">
                  <span className="font-display text-2xl text-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-champagne text-center mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-gold text-center mb-1">
                  {member.role}
                </p>
                {member.subtitle && (
                  <p className="font-body text-sm text-muted-foreground text-center">
                    {member.subtitle}
                  </p>
                )}
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
