import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "divyaramanaboina@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 7981995921",
      description: "Available Mon-Fri 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Guntur, India",
      description: "Open to remote work"
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
              Let's <span className="text-primary">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can 
              create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="neon-card p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-orbitron font-semibold mb-4 text-primary glow-text-secondary">
                    Send Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-rajdhani font-medium">Name</label>
                      <Input
                        placeholder="Your name"
                        className="bg-muted/20 border-primary/20 focus:border-primary glow-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-rajdhani font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-muted/20 border-primary/20 focus:border-primary glow-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-rajdhani font-medium">Subject</label>
                    <Input
                      placeholder="Project discussion"
                      className="bg-muted/20 border-primary/20 focus:border-primary glow-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-rajdhani font-medium">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-muted/20 border-primary/20 focus:border-primary glow-border resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full glow-button font-orbitron">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <Card className="neon-card p-8">
                <h3 className="text-2xl font-orbitron font-semibold mb-6 text-secondary glow-text-secondary">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-3 rounded-lg bg-gradient-neon">
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-orbitron font-semibold text-primary">
                          {info.title}
                        </h4>
                        <p className="text-lg font-rajdhani font-medium">
                          {info.detail}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="neon-card p-8">
                <h3 className="text-xl font-orbitron font-semibold mb-6 text-accent glow-text-accent">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <Button variant="outline" size="lg" className="w-full justify-start glow-border">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start glow-border">
                    <Mail className="w-5 h-5 mr-3" />
                    Download Resume
                  </Button>
                </div>
              </Card>

              {/* Availability */}
            
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;