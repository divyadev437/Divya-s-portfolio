import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend Technologies",
      gradient: "from-neon-purple to-neon-cyan",
      skills: [
        "React.js", "Next.js", "TypeScript", "Tailwind CSS",
        "Three.js"
      ]
    },
    {
      title: "Backend & Database",
      gradient: "from-neon-cyan to-neon-green",
      skills: [
        "Node.js", "Python", "MongoDB",
      ]
    },
    {
      title: "Design & Tools",
      gradient: "from-electric-blue to-neon-purple",
      skills: [
        "Figma","Git",
        "VS Code"
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-orbitron font-bold mb-6 glow-text">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks 
              for building exceptional digital experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp}>
                <Card className="neon-card p-8 h-full group hover:scale-105 transition-all duration-300">
                  {/* Category Header */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-orbitron font-semibold mb-3 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                    <div className={`w-full h-1 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="relative"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-muted/20 backdrop-blur-sm rounded-lg p-3 text-center border border-primary/20 hover:border-primary/50 transition-colors group-hover:bg-muted/30">
                          <span className="text-sm font-rajdhani font-medium">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 border-2 border-primary/30 rotate-45 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary/50 rounded-full animate-bounce"></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Showcase */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;