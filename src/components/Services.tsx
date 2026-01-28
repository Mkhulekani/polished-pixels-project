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
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import studyArea from "@/assets/study-area.jpg";

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
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Our Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Comprehensive Learning Areas
          </h2>
          <p className="font-body text-base sm:text-lg text-muted-foreground px-2">
            Our curriculum covers diverse learning areas designed to nurture both academic 
            excellence and practical skills for real-world success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className="group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${colors.bg} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <li
                      key={idx}
                      className="font-body text-xs sm:text-sm text-muted-foreground flex items-start gap-1.5 sm:gap-2"
                    >
                      <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${colors.bg.replace('/10', '')} mt-1.5 shrink-0`} />
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

        {/* Our Learning Facilities */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Facilities
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 sm:mt-3 mb-3 sm:mb-4 px-2">
              Where Learning Happens
            </h3>
            <p className="font-body text-base sm:text-lg text-muted-foreground px-2">
              Our dedicated classrooms and study areas provide a focused environment for learners to grow and succeed.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300">
              <img 
                src={classroom1} 
                alt="Classroom with desks and chalkboard" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h4 className="font-display text-lg sm:text-xl font-semibold text-white mb-1">Classroom A</h4>
                <p className="font-body text-xs sm:text-sm text-white/80">Mathematics & Sciences</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300">
              <img 
                src={classroom2} 
                alt="Classroom view from entrance" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h4 className="font-display text-lg sm:text-xl font-semibold text-white mb-1">Classroom B</h4>
                <p className="font-body text-xs sm:text-sm text-white/80">Languages & Career Guidance</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 sm:col-span-2 md:col-span-1">
              <img 
                src={studyArea} 
                alt="Study area with tables and chairs" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h4 className="font-display text-lg sm:text-xl font-semibold text-white mb-1">Study Area</h4>
                <p className="font-body text-xs sm:text-sm text-white/80">Self-Study & Group Work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Services */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-secondary rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-secondary-foreground mb-3 sm:mb-4">
              Supporting Services
            </h3>
            <p className="font-body text-sm sm:text-base text-secondary-foreground/80 mb-6 sm:mb-8 px-2">
              To sustain our free education mission, we offer professional services to the community.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                "Internet Café & Printing",
                "Website Design & IT",
                "Accounting Services",
                "Financial Consulting",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-secondary-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-xs sm:text-sm md:text-base text-secondary-foreground font-medium hover:bg-secondary-foreground/20 transition-colors"
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
