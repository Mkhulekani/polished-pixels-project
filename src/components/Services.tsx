import { 
  BookOpen, 
  Calculator, 
  Monitor, 
  Palette, 
  Music, 
  Compass, 
  Sprout, 
  Brain, 
  Trophy,
  Heart
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "English Lessons",
    items: ["Functional English", "Reading and Writing"],
    color: "primary",
  },
  {
    icon: Calculator,
    title: "Extra Classes & Support",
    items: ["Mathematics", "Physical Sciences", "Life Sciences", "Accounting", "Economics"],
    color: "secondary",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    items: ["Career Counseling", "University Applications", "Registration Assistance"],
    color: "accent",
  },
  {
    icon: Monitor,
    title: "Computer Lessons",
    items: ["Computer Literacy", "Computer Science", "Digital Skills"],
    color: "primary",
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    items: ["Creative Arts", "Digital Arts", "Fashion Design", "Carpentry", "Architecture"],
    color: "secondary",
  },
  {
    icon: Music,
    title: "Music",
    items: ["Choral/Vocal", "Sound Engineering", "Music Production", "Rhythm And Poetry"],
    color: "accent",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    items: ["Farming Basics", "Sustainable Practices", "Local Cultivation"],
    color: "primary",
  },
  {
    icon: Brain,
    title: "Philosophy",
    items: ["Critical Thinking", "Ethics & Values", "Love and Peace Concepts"],
    color: "secondary",
  },
  {
    icon: Trophy,
    title: "Sports",
    items: ["Soccer", "Netball", "Team Building"],
    color: "accent",
  },
  {
    icon: Heart,
    title: "Fitness & Health",
    items: ["Physical Wellness", "Health Education", "Mental Wellbeing"],
    color: "primary",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return {
        bg: "bg-primary/10",
        icon: "text-primary",
        tag: "bg-primary/10 text-primary",
      };
    case "secondary":
      return {
        bg: "bg-secondary/10",
        icon: "text-secondary",
        tag: "bg-secondary/10 text-secondary",
      };
    case "accent":
      return {
        bg: "bg-accent/10",
        icon: "text-accent",
        tag: "bg-accent/10 text-accent",
      };
    default:
      return {
        bg: "bg-primary/10",
        icon: "text-primary",
        tag: "bg-primary/10 text-primary",
      };
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Programs
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive Learning Areas
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Our curriculum covers diverse learning areas designed to nurture both academic 
            excellence and practical skills for real-world success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-6 w-6 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <li
                      key={idx}
                      className="font-body text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')} mt-1.5 shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.items.length > 3 && (
                  <p className={`text-xs mt-2 ${colors.icon}`}>
                    +{service.items.length - 3} more
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Revenue Services */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Supporting Services
            </h3>
            <p className="font-body text-secondary-foreground/80 mb-8">
              To sustain our free education mission, we offer professional services to the community.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Internet Café & Printing",
                "Website Design & IT",
                "Accounting Services",
                "Financial Consulting",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-secondary-foreground font-medium hover:bg-secondary-foreground/20 transition-colors"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
