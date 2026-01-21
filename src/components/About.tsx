import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Cultivating Minds, Building Futures
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Located in KwaMusi Area, Nongoma, Zululand - serving the community with accessible education and skills training.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              We are a newly established education centre supporting neighbouring schools by creating 
              a space where learners can access tutelage and mentorship from local graduates and artisans. 
              Our centre serves as a skills training facility offering opportunities to acquire practical 
              and relevant skills for self-sufficiency.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-3">
                {["Language Foundations", "Mathematics", "Computer Literacy", "Music & Art"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Eye className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              We envision a university-like institution with proper accreditation, expanding to attract 
              learning enthusiasts from neighbouring communities. We're building a decentralized education 
              system, eradicating the notion that better education is expensive and only accessible in urban areas.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-3">
                {["Free Education", "Skill Development", "Community Growth", "Indigenous Knowledge"].map((goal) => (
                  <span
                    key={goal}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
                className="text-center p-6 rounded-xl bg-background hover:bg-card hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
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
