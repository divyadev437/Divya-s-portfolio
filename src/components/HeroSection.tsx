import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import developerPortrait from '@/assets/developer-portrait.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          {/* Developer Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-primary glow-border overflow-hidden float">
                <img 
                  src={"/mypic.jpg"} 
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating geometric shapes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-neon-cyan rotate-45 float-delayed"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-neon-green rounded-full float"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-orbitron font-bold mb-6 glow-text"
          >
            Alex <span className="text-primary">Johnson</span>
          </motion.h1>

          {/* Animated Tagline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-rajdhani font-light text-muted-foreground mb-4">
              Full-Stack Developer & 
              <span className="text-secondary glow-text-secondary"> Digital Architect</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting immersive digital experiences with cutting-edge technology, 
              innovative design, and seamless user interactions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" className="glow-button font-orbitron text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="font-orbitron text-lg px-8 py-6 glow-border">
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center gap-6 mb-12"
          >
            <Button variant="ghost" size="icon" className="glow-border hover:glow-border">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="glow-border hover:glow-border">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="glow-border hover:glow-border">
              <Mail className="w-6 h-6" />
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="animate-bounce"
          >
            <ArrowDown className="w-8 h-8 mx-auto text-primary" />
            <p className="text-sm text-muted-foreground mt-2 font-rajdhani">Scroll to explore</p>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;