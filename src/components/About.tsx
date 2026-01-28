import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Cultivating Minds, Building Futures
          </h2>
          <p className="font-body text-base sm:text-lg text-muted-foreground px-2">
            Located in KwaMusi Area, Nongoma, Zululand - serving the community with accessible education and skills training.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Target className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
              We are a newly established education centre supporting neighbouring schools by creating 
              a space where learners can access tutelage and mentorship from local graduates and artisans. 
              Our centre serves as a skills training facility offering opportunities to acquire practical 
              and relevant skills for self-sufficiency.
            </p>
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Language Foundations", "Mathematics", "Computer Literacy", "Music & Art"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
              We envision a university-like institution with proper accreditation, expanding to attract 
              learning enthusiasts from neighbouring communities. We're building a decentralized education 
              system, eradicating the notion that better education is expensive and only accessible in urban areas.
            </p>
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Free Education", "Skill Development", "Community Growth", "Indigenous Knowledge"].map((goal) => (
                  <span
                    key={goal}
                    className="px-2 sm:px-3 py-1 bg-secondary/10 text-secondary text-xs sm:text-sm rounded-full font-medium"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-center text-foreground mb-8 sm:mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "Education should be free, accessible to all who seek knowledge.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Preparing youth for the 4th Industrial Revolution with tech skills.",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Cultivating the creative and logical faculties of young minds.",
              },
              {
                icon: Eye,
                title: "Vision",
                description: "Building a self-sufficient community of skilled individuals.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-lg sm:rounded-xl bg-background hover:bg-card hover:shadow-soft transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
