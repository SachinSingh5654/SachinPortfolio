import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Server, Database, Shield, Zap, Map } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ReeShal - Hotel & Tourism Platform",
    subtitle: "Full Stack Web Application",
    description:
      "An interactive tourism information portal featuring hotels, restaurants, and local attractions with advanced search and role-based access control.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "MapBox"],
    features: [
      "Secure RBAC using JWT for 100% data privacy",
      "Optimized media delivery with 40% faster load time",
      "Advanced search with 300ms faster queries",
      "MapBox integration for location visualization",
    ],
    icon: Map,
    gradient: "from-primary to-secondary",
    github: "https://github.com/SachinSingh5654/FinalMajorProject/",
    live: "https://reeshal.onrender.com/listings",
  },
  {
    title: "Whispr - Real-Time Chat Application",
    subtitle: "Full Stack MERN Application",
    description:
      "A high-concurrency messaging platform with real-time communication, user authentication, and responsive design.",
    techStack: ["React.js", "Node.js", "Socket.IO", "MongoDB", "JWT", "Tailwind CSS", "Zustand"],
    features: [
      "Sub-100ms latency using Socket.IO",
      "Secure JWT auth with bcrypt hashing",
      "Real-time online/offline status tracking",
      "99.9% uptime during stress testing",
    ],
    icon: Zap,
    gradient: "from-secondary to-accent",
    github: "https://github.com/SachinSingh5654/ChatApp",
    live: "https://whisprchatapp.onrender.com/",
  },
];

const Projects = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Projects"
            title="Featured Work"
            subtitle="Real-world applications showcasing my technical skills and problem-solving abilities"
          />

          <div className="space-y-16 mt-12">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                delay={index * 0.2}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Visual */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Gradient background */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}
                      />

                      <div className="relative glass-card rounded-2xl p-8 aspect-video flex items-center justify-center overflow-hidden">
                        {/* Grid pattern */}
                        <div className="absolute inset-0 grid-pattern opacity-20" />

                        {/* Icon */}
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                        >
                          <project.icon className="w-16 h-16 text-background" />
                        </motion.div>

                        {/* Floating tech badges */}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm text-xs font-mono text-primary border border-primary/30"
                        >
                          <Database className="w-3 h-3 inline mr-1" />
                          MongoDB
                        </motion.div>

                        <motion.div
                          animate={{ x: [0, -5, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                          className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm text-xs font-mono text-secondary border border-secondary/30"
                        >
                          <Server className="w-3 h-3 inline mr-1" />
                          Node.js
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                          className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm text-xs font-mono text-accent border border-accent/30"
                        >
                          <Shield className="w-3 h-3 inline mr-1" />
                          JWT
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="text-primary font-mono text-sm mb-2 block">
                      {project.subtitle}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-muted border border-border hover:border-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 max-w-2xl mx-auto">
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions to open source.
              </p>
              <a
                href="https://github.com/sachinsingh5654"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                  <Github className="w-4 h-4 mr-2" />
                  Visit GitHub Profile
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
