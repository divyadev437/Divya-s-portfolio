import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code, Palette, Rocket, Zap } from 'lucide-react';

const AboutSection = () => {
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

  const stats = [
    { icon: Code, label: "Projects Completed", value: "1" },
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
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* About Text */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl font-orbitron font-semibold text-secondary glow-text-secondary">
                Passionate AI Data Science Undergraduate
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A passionate and results-driven AI Data Science undergraduate with hands-on experience in automation and AI-based projects. Equipped with strong analytical skills and the ability to learn quickly. Seeking opportunities to contribute to impactful real-world solutions while continuing to grow as a data professional.
              </p>
            </motion.div>

            {/* Skills Highlights */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="neon-card p-6">
                <h4 className="text-xl font-orbitron font-semibold mb-4 text-primary">
                  Core Expertise
                </h4>
                <div className="space-y-4">
                  {[
                    { skill: "Frontend Development", level: 95 },
                    { skill: "Backend Architecture", level: 90 },
                    { skill: "3D Graphics & WebGL", level: 85 },
                    { skill: "UI/UX Design", level: 88 },
                    { skill: "DevOps & Cloud", level: 82 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-rajdhani font-medium">{item.skill}</span>
                        <span className="text-primary">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-neon rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="neon-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
                  <h4 className="text-3xl font-orbitron font-bold mb-2 glow-text">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;