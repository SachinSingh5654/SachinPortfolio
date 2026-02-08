import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Mail, ChevronDown, Github, Linkedin, Code2 } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/ui/TypingText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowingCard } from "@/components/ui/GlowingCard";
import profilePhoto from "@/assets/profile-photo.png";

const roles = [
  "Full Stack Web Developer",
  "MERN Stack Expert",
  "AI/ML Enthusiast",
  "Problem Solver",
];

const stats = [
  { value: "1000+", label: "LeetCode Problems" },
  { value: "1669", label: "LeetCode Rating" },
  { value: "2+", label: "Internships" },
  { value: "8.40", label: "CGPA" },
];

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/SachinSingh5654" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sachinsingh454/" },
  { name: "LeetCode", icon: Code2, url: "https://leetcode.com/sachinsingh8" },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Floating orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <AnimatedSection delay={0}>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                  Available for Internships/Jobs
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                  Hi, I'm{" "}
                  <span className="gradient-text">Sachin Singh</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-[2em]">
                  <span className="text-foreground">I'm a </span>
                  <TypingText
                    texts={roles}
                    className="text-primary font-semibold"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto lg:mx-0">
                  3rd Year <span className="text-foreground font-medium">B.Tech</span> in <span className="text-foreground font-medium">Computer Science and Engineering</span> student at National Institute of Technology, Patna{" "}
                  <span className="text-foreground font-medium"> (NIT Patna) </span>,
                  passionate about building scalable web applications and solving
                  complex algorithmic problems.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Patna, Bihar, India</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link to="/projects">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group px-8"
                    >
                      View My Work
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="../resume.pdf" download>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 px-8"
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <AnimatedSection delay={0.2} direction="right">
                <div className="relative">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl scale-110" />
                  
                  {/* Main image container */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                      <img
                        src={profilePhoto}
                        alt="Sachin Singh"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />
                  </motion.div>

                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 px-4 py-2 rounded-lg glass-card border border-primary/30"
                  >
                    <span className="font-mono text-sm text-primary">HSBC Intern</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg glass-card border border-secondary/30"
                  >
                    <span className="font-mono text-sm text-secondary">NIT Patna</span>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Stats Section */}
          <AnimatedSection delay={0.7}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((stat, index) => (
                <GlowingCard
                  key={index}
                  className="text-center py-6"
                  glowColor={index % 2 === 0 ? "primary" : "secondary"}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </GlowingCard>
              ))}
            </div>
          </AnimatedSection>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center mt-16"
          >
            <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                Highlights
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                What I <span className="gradient-text">Bring</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <GlowingCard className="h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Full Stack Development</h3>
                <p className="text-muted-foreground">
                  Building end-to-end web applications using MERN stack with focus on scalability and clean architecture.
                </p>
              </GlowingCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlowingCard className="h-full" glowColor="secondary">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Problem Solving</h3>
                <p className="text-muted-foreground">
                  1000+ LeetCode problems solved with a peak rating of 1669. Strong in DSA and competitive programming.
                </p>
              </GlowingCard>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <GlowingCard className="h-full" glowColor="accent">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-muted-foreground">
                  Oracle Certified in Generative AI with 96% score. Exploring AI/ML applications in web development.
                </p>
              </GlowingCard>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/about">
                <Button
                  variant="ghost"
                  className="text-primary hover:bg-primary/10 group"
                >
                  Learn more about me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
