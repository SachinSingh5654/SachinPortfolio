import { AnimatedSection } from "./AnimatedSection";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <AnimatedSection delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            {badge}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title.split(" ").map((word, i) => (
            <span key={i}>
              {i === title.split(" ").length - 1 ? (
                <span className="gradient-text">{word}</span>
              ) : (
                <span>{word} </span>
              )}
            </span>
          ))}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
};
