import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const experiences = [
  {
    company: "HSBC",
    role: "Incoming Software Engineer",
    duration: "Summer 2026",
    location: "India",
    type: "Internship",
    status: "upcoming",
    description: [
      "Secured a competitive 10-week internship offer via on-campus recruitment",
      "Selected to collaborate within a cross-functional Agile team",
      "Will be utilizing strong communication and adaptability to drive enterprise software solutions",
    ],
    color: "primary",
  },
  {
    company: "NPTEL",
    role: "Technology Intern",
    duration: "Jan 2026 - Present",
    location: "Remote",
    type: "Internship",
    status: "ongoing",
    description: [
      "Contributing to educational technology initiatives",
      "Working on enhancing the learning experience through technology",
      "Collaborating with academic institutions across India",
    ],
    color: "secondary",
  },
];

const Experience = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Experience"
            title="Professional Journey"
            subtitle="My internship experiences and professional growth"
          />

          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <AnimatedSection
                  key={exp.company}
                  delay={index * 0.2}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={`w-4 h-4 rounded-full border-4 border-background ${
                          exp.status === "upcoming"
                            ? "bg-primary pulse-glow"
                            : exp.status === "ongoing"
                            ? "bg-secondary"
                            : "bg-muted-foreground"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 ml-8 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-card rounded-xl p-6"
                      >
                        {/* Status badge */}
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                            exp.status === "upcoming"
                              ? "bg-primary/20 text-primary"
                              : exp.status === "ongoing"
                              ? "bg-secondary/20 text-secondary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              exp.status === "upcoming"
                                ? "bg-primary animate-pulse"
                                : exp.status === "ongoing"
                                ? "bg-secondary animate-pulse"
                                : "bg-muted-foreground"
                            }`}
                          />
                          {exp.status === "upcoming"
                            ? "Upcoming"
                            : exp.status === "ongoing"
                            ? "Ongoing"
                            : "Completed"}
                        </div>

                        {/* Company & Role */}
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              exp.color === "primary"
                                ? "bg-primary/20"
                                : "bg-secondary/20"
                            }`}
                          >
                            <Building2
                              className={`w-6 h-6 ${
                                exp.color === "primary"
                                  ? "text-primary"
                                  : "text-secondary"
                              }`}
                            />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-bold">{exp.company}</h3>
                            <p
                              className={`font-medium ${
                                exp.color === "primary"
                                  ? "text-primary"
                                  : "text-secondary"
                              }`}
                            >
                              {exp.role}
                            </p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-sm text-muted-foreground ${
                                index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                              }`}
                            >
                              <ArrowRight
                                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                  exp.color === "primary"
                                    ? "text-primary"
                                    : "text-secondary"
                                }`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Looking for opportunities */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                Open to Opportunities
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Looking for <span className="gradient-text">New Challenges</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                I'm always eager to take on new challenges and contribute to impactful projects.
                If you have an exciting opportunity or project in mind, let's connect!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;
