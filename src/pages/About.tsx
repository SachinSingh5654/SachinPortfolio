import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Heart, Code, BookOpen, Coffee, Gamepad2, Music2Icon } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowingCard } from "@/components/ui/GlowingCard";
import profilePhoto from "@/assets/profile-photo.png";

const education = [
  {
    institution: "National Institute of Technology, Patna",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2022 - 2026",
    grade: "CGPA: 8.40",
    icon: GraduationCap,
  },
  {
    institution: "Sanskaar International School, UP",
    degree: "Intermediate Education (CBSE)",
    duration: "2020 - 2022",
    grade: "86.2%",
    icon: BookOpen,
  },
  {
    institution: "Vidya Vahini School, UP",
    degree: "Secondary Education (CBSE)",
    duration: "2018 - 2020",
    grade: "89.8%",
    icon: BookOpen,
  },
];

const interests = [
  { name: "Competitive Programming", icon: Code },
  { name: "Web Development", icon: Coffee },
  { name: "Music", icon: Music2Icon },
  { name: "Learning New Tech", icon: BookOpen },
];

const About = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="About Me"
            title="Know Who I Am"
            subtitle="A passionate developer on a mission to build impactful software"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
            {/* Profile Card */}
            <AnimatedSection direction="left">
              <div className="relative">
                <GlowingCard className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                        <img
                          src={profilePhoto}
                          alt="Sachin Singh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                      >
                        <span className="text-lg">👨‍💻</span>
                      </motion.div>
                    </div>

                    <h3 className="font-display text-2xl font-bold mb-2">Sachin Singh</h3>
                    <p className="text-primary font-medium mb-4">Full Stack Web Developer</p>

                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>NIT Patna, Bihar, India</span>
                    </div>

                    <div className="w-full space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="text-muted-foreground">Roll No.</span>
                        <span className="font-mono text-primary">2306114</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="text-muted-foreground">Phone</span>
                        <span className="font-mono">+91-9151821191</span>
                      </div>
                    </div>
                  </div>
                </GlowingCard>
              </div>
            </AnimatedSection>

            {/* About Text */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hello! I'm <span className="text-foreground font-medium">Sachin Singh</span>, 
                    a passionate Computer Science student at the prestigious 
                    <span className="text-primary font-medium"> National Institute of Technology, Patna</span>. 
                    Currently in my 3rd year of B.Tech, I'm deeply immersed in the world of 
                    <span className="text-secondary font-medium"> Full Stack Development</span> and 
                    <span className="text-secondary font-medium"> Competitive Programming</span>.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I recently secured an <span className="text-primary font-medium">internship at HSBC</span> through 
                    on-campus placement, where I'll be working as a Trainee Software Engineer. I'm also 
                    currently interning with <span className="text-primary font-medium">NPTEL</span>, 
                    contributing to educational technology initiatives.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My journey in tech began with a curiosity about how things work, which led me to 
                    explore various domains from web development to artificial intelligence. I believe 
                    in writing clean, efficient code and building solutions that make a real difference.
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border">
                    <Briefcase className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Current Status</span>
                    <p className="font-medium">HSBC Incoming Intern</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border">
                    <GraduationCap className="w-5 h-5 text-secondary mb-2" />
                    <span className="text-sm text-muted-foreground">Academic Year</span>
                    <p className="font-medium">3rd Year B.Tech</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Education"
            title="Academic Journey"
            subtitle="My educational background and achievements"
          />

          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex w-16 flex-shrink-0 items-start justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                      />
                    </div>

                    <GlowingCard className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <edu.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-semibold">{edu.institution}</h3>
                          <p className="text-muted-foreground">{edu.degree}</p>
                          <div className="flex flex-wrap gap-4 mt-2">
                            <span className="text-sm text-primary font-mono">{edu.duration}</span>
                            <span className="text-sm font-medium text-secondary">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </GlowingCard>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Beyond Code"
            title="My Interests"
            subtitle="What keeps me motivated and inspired"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {interests.map((interest, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-xl p-6 text-center cursor-pointer group"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <interest.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-medium">{interest.name}</h3>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
