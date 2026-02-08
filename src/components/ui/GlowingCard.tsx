import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent";
  hover?: boolean;
}

export const GlowingCard = ({
  children,
  className = "",
  glowColor = "primary",
  hover = true,
}: GlowingCardProps) => {
  const glowStyles = {
    primary: "hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.2)]",
    secondary: "hover:shadow-[0_0_30px_hsl(var(--glow-secondary)/0.2)]",
    accent: "hover:shadow-[0_0_30px_hsl(var(--glow-accent)/0.2)]",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300",
        hover && glowStyles[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
};
