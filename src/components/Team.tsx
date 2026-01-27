import { GraduationCap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import sandisoImage from "@/assets/sandiso-magwaza.jpg";

const team = [
  {
    name: "Sandiso Magwaza",
    role: "Founder & CEO | Data Scientist | Educator | Accountant",
    qualification: "Bachelor of Accounting Science",
    institution: "University of the Witwatersrand",
    image: sandisoImage,
    bio: "Sandiso Magwaza is a passionate and driven professional whose work spans data science, accounting, education, and entrepreneurship. He completed a full-time Data Science bootcamp at Explore AI Academy, developing strong capabilities in data analysis, machine learning, and Python programming. As an Economics Teacher, his innovative approach contributed to notable improvement in student pass rates. As the Founder and CEO of Nokuvela Academy, Sandiso is committed to empowering young people through future-focused education and skills development.",
    isFounder: true,
  },
  {
    name: "Khumalo BS",
    role: "Business Analyst",
    qualification: "Dip ICT Business Analysis",
    institution: "Durban University of Technology",
    avatar: "KB",
  },
  {
    name: "Luthuli P",
    role: "Sound Engineer",
    qualification: "Sound Engineering",
    institution: "Music Producer",
    avatar: "LP",
  },
  {
    name: "Zama L",
    role: "Geologist",
    qualification: "BSc Geological Science",
    institution: "Wits University",
    avatar: "ZL",
  },
  {
    name: "Zwane SL",
    role: "Housing Specialist",
    qualification: "Bachelor of Social Sciences in Housing",
    institution: "University of KwaZulu-Natal",
    avatar: "ZS",
  },
  {
    name: "Musoke A",
    role: "Game Designer & Digital Artist",
    qualification: "Game Design with Digital Art Masters",
    institution: "Wits University",
    avatar: "MA",
  },
];

const Team = () => {
  const handleContactClick = (name: string) => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="team" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Expert Facilitators
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Our dedicated facilitators bring professional expertise and passion for education, 
            volunteering their time for community development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 text-center ${
                member.isFounder ? "sm:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto" : ""
              }`}
            >
              {/* Avatar/Image */}
              {member.image ? (
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-transform ring-4 ring-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {member.avatar}
                  </span>
                </div>
              )}

              {/* Info */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              {member.role && (
                <p className="font-body text-sm font-semibold text-primary mb-2">
                  {member.role}
                </p>
              )}
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                <GraduationCap className="h-4 w-4" />
                <span className="font-body text-sm font-medium">
                  {member.qualification}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {member.institution}
              </p>
              
              {/* Bio for founder */}
              {member.bio && (
                <p className="font-body text-sm text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
                  {member.bio}
                </p>
              )}

              {/* Actions */}
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContactClick(member.name)}
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-muted-foreground mb-6">
            Interested in becoming a facilitator? We welcome volunteers!
          </p>
          <Button
            variant="gold"
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
