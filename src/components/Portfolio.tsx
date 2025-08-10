import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import CustomCursor from './CustomCursor';
import ThreeDBackground from './ThreeDBackground';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import InternshipSection from './InternshipSection'; // ✅ NEW
import ContactSection from './ContactSection';

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <motion.div
      className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* 3D Background */}
      <Suspense fallback={null}>
        <ThreeDBackground />
      </Suspense>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div id="home">
          <Suspense fallback={<LoadingSpinner />}>
            <HeroSection />
          </Suspense>
        </div>

        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <SkillsSection />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <ProjectsSection />
        </div>

        {/* ✅ Internship Section */}
        <div id="internships">
          <InternshipSection />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground font-rajdhani">
              © 2025 Divya Shree. Built with innovation and a vision for intelligent systems.
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <span className="text-sm text-primary">•</span>
              <span className="text-sm text-secondary">•</span>
              <span className="text-sm text-accent">•</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
