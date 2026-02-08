import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "C", level: 80 },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React.js", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "MongoDB Atlas", level: 85 },
      { name: "Cloudinary", level: 80 },
      { name: "Render", level: 85 },
    ],
  },
];

const csFundamentals = [
  {
    title: "Object-Oriented Programming",
    topics: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
  },
  {
    title: "Software Engineering",
    topics: ["SDLC", "Design Patterns", "UML", "Testing (Unit, Integration, System)"],
  },
  {
    title: "Operating Systems",
    topics: ["Process Scheduling", "Memory Management", "File Systems", "Concurrency"],
  },
  {
    title: "Database Management",
    topics: ["SQL", "Normalization", "Transactions", "ACID Properties"],
  },
  {
    title: "Computer Networks",
    topics: ["TCP/IP Stack", "HTTP/HTTPS", "DNS", "Socket Programming"],
  },
  {
    title: "Data Structures & Algorithms",
    topics: ["Arrays & Linked Lists", "Trees & Graphs", "Dynamic Programming", "Sorting & Searching"],
  },
];

const Skills = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Skills"
            title="Technical Expertise"
            subtitle="Technologies and tools I work with to bring ideas to life"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {skillCategories.map((category, catIndex) => (
              <AnimatedSection key={category.title} delay={catIndex * 0.1}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category.title}
                  </h3>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-primary font-mono text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: catIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CS Fundamentals Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Fundamentals"
            title="Computer Science Core"
            subtitle="Strong foundation in core CS concepts"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {csFundamentals.map((fundamental, index) => (
              <AnimatedSection key={fundamental.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl p-6 h-full"
                >
                  <h3 className="font-display text-lg font-semibold mb-4 text-primary">
                    {fundamental.title}
                  </h3>
                  <ul className="space-y-2">
                    {fundamental.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <AnimatedSection>
            <h3 className="font-display text-2xl font-bold text-center">
              Technologies I <span className="gradient-text">Love</span>
            </h3>
          </AnimatedSection>
        </div>

        <div className="relative">
          <div className="flex space-x-8 animate-marquee">
            {[
              "React", "Node.js", "MongoDB", "Express", "TypeScript", "JavaScript",
              "Tailwind", "Git", "Docker", "Python", "Java", "Socket.IO",
              "JWT", "REST API", "PostgreSQL", "Redis",
            ].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-lg bg-muted/30 border border-border text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>
    </PageLayout>
  );
};

export default Skills;
