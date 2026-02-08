import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2, MessageSquare } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sachinsingh291003@gmail.com",
    href: "mailto:sachinsingh291003@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9151821191",
    href: "tel:+919151821191",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "NIT Patna, Bihar, India",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/sachinsingh5654",
    color: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sachinsingh454/",
    color: "hover:bg-blue-600",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/sachinsingh8",
    color: "hover:bg-amber-600",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Contact"
            title="Get In Touch"
            subtitle="Have a project in mind or want to collaborate? Let's talk!"
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      placeholder="Project Collaboration"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      required
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          ⏳
                        </motion.span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-2xl font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-2xl font-bold mb-6">
                    Connect With Me
                  </h3>

                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-muted/50 border border-border ${social.color} hover:text-white transition-all`}
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="font-medium">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-primary/20 to-secondary/20"
                >
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-medium text-green-400">
                        Available for Opportunities
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">
                      Open to New Projects
                    </h3>
                    <p className="text-muted-foreground">
                      Whether it's a full-time position, internship, or freelance project,
                      I'm excited to hear about new opportunities.
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
