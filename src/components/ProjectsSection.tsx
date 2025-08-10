import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "NeuroSpace VR",
      description: "Immersive virtual reality platform for brain training and cognitive enhancement using WebXR and Three.js.",
      tags: ["React", "Three.js", "WebXR", "TensorFlow.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop",
      gradient: "from-neon-purple to-neon-cyan",
      featured: true
    },

    {
      id: 2,
      title: "CryptoTracker Pro",
      description: "Real-time cryptocurrency tracking dashboard with advanced analytics and portfolio management.",
      tags: ["Next.js", "TypeScript", "Chart.js", "WebSocket", "Redis"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      gradient: "from-neon-cyan to-neon-green"
    },
    {
      id: 3,
      title: "AI Content Studio",
      description: "Content creation platform powered by AI with real-time collaboration and smart editing features.",
      tags: ["Vue.js", "Python", "OpenAI", "Docker", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      gradient: "from-neon-green to-electric-blue"
    },
    {
      id: 4,
      title: "Quantum Dashboard",
      description: "Interactive data visualization platform for quantum computing research with 3D particle simulations.",
      tags: ["React", "D3.js", "WebGL", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      gradient: "from-electric-blue to-neon-purple"
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
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-orbitron font-bold mb-6 glow-text">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest work showcasing innovative solutions, 
              cutting-edge technology, and exceptional user experiences.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <Card className="neon-card overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Overlay with gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-4 h-4 border-2 border-white/50 rotate-45 animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
                    
                    {/* Project actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <Button size="sm" className="glow-button">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                        <Button size="sm" variant="outline" className="glow-border">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`text-2xl font-orbitron font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.title}
                      </h3>
                      <Button variant="ghost" size="icon" className="opacity-70 hover:opacity-100">
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-rajdhani font-medium bg-muted/20 backdrop-blur-sm rounded-full border border-primary/20"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project Stats */}
                    <div className="flex justify-between text-sm text-muted-foreground border-t border-primary/20 pt-4">
                      <span>★ 4.9 Rating</span>
                      <span>⚡ Live Project</span>
                      <span>🏆 Award Winner</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="glow-border font-orbitron">
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;