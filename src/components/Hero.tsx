import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nokuvela Academy Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in">
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary-foreground/90">
              Empowering Through Education
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up px-2">
            Nokuvela Academy
          </h1>

          <p className="font-display text-lg sm:text-xl md:text-2xl italic text-primary-foreground mb-6 sm:mb-8 animate-fade-in-up px-4" style={{ animationDelay: "0.1s" }}>
            "Indlela Ibuzwa Kwabaphambili"
          </p>

          <p className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
            A community education centre supporting schools in Zululand by providing 
            access to tutelage, mentorship, and skills training for self-sufficient futures.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="gold"
              size="xl"
              onClick={() => scrollToSection("#services")}
              className="group w-full sm:w-auto"
            >
              Explore Programs
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto"
            >
              <Users className="h-5 w-5" />
              Join Our Community
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-primary-foreground/10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">15+</p>
              <p className="font-body text-xs sm:text-sm text-primary-foreground/70 mt-1">Programs</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">7</p>
              <p className="font-body text-xs sm:text-sm text-primary-foreground/70 mt-1">Facilitators</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Free</p>
              <p className="font-body text-xs sm:text-sm text-primary-foreground/70 mt-1">Education</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
