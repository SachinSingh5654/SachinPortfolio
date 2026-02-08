import { Link } from "react-router-dom";
import { Terminal, Github, Linkedin, Mail, Code2, ExternalLink } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/SachinSingh5654" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sachinsingh454/" },
  { name: "LeetCode", icon: Code2, url: "https://leetcode.com/sachinsingh8" },
  { name: "Email", icon: Mail, url: "mailto:sachinsingh291003@gmail.com" },
];

const quickLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      {/* Glow effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-xl">
                <span className="text-primary">&lt;</span>
                Sachin
                <span className="text-primary">/&gt;</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full Stack Developer & CS Engineering student at NIT Patna, passionate about building scalable web applications.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coding Profiles */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Coding Profiles</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://leetcode.com/sachinsingh8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  LeetCode <span className="text-primary text-sm">(1669 Rating)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://codechef.com/users/sachhu114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  CodeChef <span className="text-primary text-sm">(2-Star)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://codeforces.com/profile/userNotExists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Codeforces
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sachin Singh. Crafted with{" "}
              <span className="text-primary">♥</span> and lots of{" "}
              <span className="font-mono text-primary">{"{ code }"}</span>
            </p>
            <p className="text-muted-foreground text-sm font-mono">
              <span className="text-primary">$</span> "Thanks for visiting!"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
