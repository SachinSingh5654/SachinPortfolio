import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Zap, Code, Brain, BookOpen, Link } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const achievements = [
  {
    title: "Meta Hacker Cup Round 2",
    description: "Advanced to Round 2, ranking among top global competitive programmers",
    icon: Trophy,
    category: "Competitive Programming",
    color: "primary",
    url: "https://drive.google.com/file/d/1wMuxNNhyJGFVMHgwAW8PCZia6CMXRT52/view?usp=sharing",
  },
  {
    title: "Oracle Certified Professional - Generative AI",
    description: "Earned certification with a distinction score of 96%",
    icon: Brain,
    category: "Certification",
    color: "secondary",
    url: "https://drive.google.com/file/d/1Ifg4E1qas7qtkaqZNaJp5GmkfbmPsbHJ/view?usp=sharing",
  },
  {
    title: "LeetCode Rating: 1669",
    description: "Peak rating in Top 15% globally with 400+ problems solved",
    icon: Code,
    category: "Competitive Programming",
    color: "primary",
    url: "https://leetcode.com/u/sachinsingh8/",
  },
  {
    title: "DSA JAVA Certification - Apna College",
    description: "Certified in Data Structure and Algorithm in Java",
    icon: BookOpen,
    category: "Certification",
    color: "secondary",
    url: "https://drive.google.com/file/d/1bGXUsFdxP8PalLM6KB3PbEHcmNuKdKC1/view?usp=sharing",
  },
  {
    title: "NPTEL Elite Gold - Joy of Computing using Pyhton",
    description: "Achieved 98% score in 'The Joy of Computing using Python'",
    icon: Star,
    category: "Certification",
    color: "secondary",
    url: "https://drive.google.com/file/d/1zo75yGCiNbLH-WiD-a4EClkAjz5QzctS/view?usp=sharing",
  },
  {
    title: "NPTEL Java Programming",
    description: "Certified in Java Programming by NPTEL",
    icon: BookOpen,
    category: "Certification",
    color: "secondary",
    url: "https://drive.google.com/file/d/1NzugoGPAy3Rh0nF5kO67tR1JycSjZugG/view?usp=sharing",
  },
  {
    title: "NTSE Stage 2 Qualifier",
    description: "Qualified for 2nd stage of National Talent Search Examination (2020)",
    icon: Award,
    category: "Academic",
    color: "accent",
    // url: "",
  },
  {
    title: "National Science Olympiad",
    description: "Three-time NSO Level 1 qualifier (2015, 2016, 2018)",
    icon: Medal,
    category: "Academic",
    color: "accent",
    // url: "",
  },
  {
    title: "LIC Academic Excellence Award",
    description: "Cash prize and certificate for securing first rank (2016, 2018)",
    icon: Zap,
    category: "Academic",
    color: "accent",
    // url: "",
  },
];

const codingProfiles = [
  {
    platform: "LeetCode",
    handle: "sachinsingh8",
    rating: "1669",
    highlight: "1000+ Problems Solved",
    url: "https://leetcode.com/sachinsingh8",
    color: "from-amber-500 to-orange-500",
  },
  {
    platform: "CodeChef",
    handle: "sachhu114",
    rating: "1511",
    highlight: "2-Star Rating",
    url: "https://codechef.com/users/sachhu114",
    color: "from-amber-700 to-yellow-600",
  },
  {
    platform: "Codeforces",
    handle: "userNotExists",
    rating: "-",
    highlight: "Problem Solving",
    url: "https://codeforces.com/profile/userNotExists",
    color: "from-blue-500 to-cyan-500",
  },
  {
    platform: "GeeksforGeeks",
    handle: "sachinsinxlm3",
    // rating: "1669",
    highlight: "100+ Problems Solved",
    url: "https://www.geeksforgeeks.org/profile/sachinsinxlm3?tab=activity",
    color: "from-amber-500 to-orange-500",
  },
];

const Achievements = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Achievements"
            title="Awards & Recognition"
            subtitle="Milestones that mark my journey in tech and academics"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={achievement.title} delay={index * 0.1}>
                <a
                  href={achievement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card rounded-xl p-6 h-full relative overflow-hidden group"
                  >
                    {/* Background glow */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity ${achievement.color === "primary"
                        ? "bg-primary"
                        : achievement.color === "secondary"
                          ? "bg-secondary"
                          : "bg-accent"
                        }`}
                    />

                    <div className="relative z-10">
                      {/* Category badge */}
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${achievement.color === "primary"
                          ? "bg-primary/20 text-primary"
                          : achievement.color === "secondary"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-accent/20 text-accent"
                          }`}
                      >
                        {achievement.category}
                      </span>

                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${achievement.color === "primary"
                          ? "bg-primary/20"
                          : achievement.color === "secondary"
                            ? "bg-secondary/20"
                            : "bg-accent/20"
                          }`}
                      >
                        <achievement.icon
                          className={`w-7 h-7 ${achievement.color === "primary"
                            ? "text-primary"
                            : achievement.color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                            }`}
                        />
                      </div>

                      <h3 className="font-display text-lg font-semibold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Coding Profiles"
            title="Competitive Programming"
            subtitle="My journey in algorithmic problem solving"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {codingProfiles.map((profile, index) => (
              <AnimatedSection key={profile.platform} delay={index * 0.15}>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card rounded-xl p-6 h-full relative overflow-hidden group cursor-pointer"
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    <div className="relative z-10">
                      <h3 className="font-display text-2xl font-bold mb-1">
                        {profile.platform}
                      </h3>
                      <p className="text-muted-foreground font-mono mb-4">
                        @{profile.handle}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Rating</span>
                          <span
                            className={`font-bold text-xl bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                          >
                            {profile.rating}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Highlight</span>
                          <span className="text-primary font-medium">
                            {profile.highlight}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                        View Profile
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Achievements;
