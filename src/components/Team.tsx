import { GraduationCap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import sandisoImage from "@/assets/sandiso-magwaza.jpg";
import lethuImage from "@/assets/lethu-zama.jpg";
import sifisoImage from "@/assets/sifiso-zwane.jpg";
import noxoloImage from "@/assets/noxolo-mkhize.jpg";
import artyImage from "@/assets/arty-musoke.jpg";
import phakamaniImage from "@/assets/phakamani-luthuli.jpg";
import bhekisaniImage from "@/assets/bhekisani-khumalo.jpg";

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
    name: "Bhekisani Khumalo",
    role: "Information Technology Business Systems Analyst",
    qualification: "Diploma in ICT in Business Analysis",
    institution: "Durban University of Technology",
    image: bhekisaniImage,
    bio: "Bhekisani Khumalo is an Information Technology Business Systems Analyst at Muntfukazi Group of Companies. He holds a Diploma in ICT in Business Analysis from the Durban University of Technology. With a strong interest in aligning technology solutions with business needs, Bhekisani brings analytical thinking and systems-driven problem-solving to his work. His contribution to Nokuvela Academy supports the development of efficient, scalable digital and operational systems that enable sustainable growth.",
  },
  {
    name: "Lethu Zama",
    role: "Business Analyst | B2B Consultant | Tech Journalist",
    qualification: "Dip ICT Business Analysis & BSocSc Housing",
    institution: "DUT & University of KwaZulu-Natal",
    image: lethuImage,
    bio: "Lethu Zama is a multidisciplinary professional with a Diploma in ICT Business Analysis from the Durban University of Technology and a Bachelor of Social Sciences in Housing from the University of KwaZulu-Natal. He works as a B2B Consultant, Tech Journalist, and Business Analyst, focusing on empowering African SMEs and startups to scale using data-driven sales systems and LinkedIn strategy. Lethu brings valuable insight into digital strategy, research, and business growth, supporting Nokuvela Academy's mission to bridge education, technology, and enterprise development.",
  },
  {
    name: "Noxolo Mkhize",
    role: "Educator",
    qualification: "BA & PGCE (IsiZulu & History)",
    institution: "University of Zululand",
    image: noxoloImage,
    bio: "Noxolo Mkhize is a qualified educator with a Bachelor of Arts and Postgraduate Certificate in Education (PGCE) from the University of Zululand, specializing in IsiZulu and History. She has experience teaching across primary, secondary, and early childhood levels, including IsiZulu, History, Life Orientation, and Dramatic Arts. Currently, Noxolo serves as an Early Childhood Development Teacher at KwaNokvela Academy, where she is passionate about nurturing young learners and supporting holistic development within the KwaMusi community.",
  },
  {
    name: "Sifiso Zwane",
    role: "Housing Practitioner | Real Estate Administrator",
    qualification: "Bachelor of Social Sciences in Housing",
    institution: "University of KwaZulu-Natal",
    image: sifisoImage,
    bio: "Sifiso Zwane is a qualified Housing Practitioner with over two years of hands-on experience in the real estate sector across both public and private institutions. He completed a 12-month Real Estate Candidacy Internship and holds a PPRA qualification exemption. He specializes in real estate administration, property management support, leasing, compliance, documentation, and client service delivery. Sifiso aspires to make a meaningful impact in property management while continuously expanding his expertise across diverse real estate markets.",
  },
  {
    name: "Arty Musoke",
    role: "Digital Artist | Game Designer | Cultural Exchange Professional",
    qualification: "Game Design & Digital Art Masters",
    institution: "University of the Witwatersrand",
    image: artyImage,
    bio: "Arty Musoke holds a degree in Game Design and a Master's qualification in Digital Art from the University of the Witwatersrand, with academic distinctions in Digital Arts. His professional background includes roles as a 3D Game Artist at 3 Degrees Tech and Illustrator for Room to Read, combining creativity, storytelling, and education. Arty has also been involved in the JET Programme, promoting cultural exchange between South Africa and Japan. At Nokuvela Academy, Arty contributes to creative education and cross-cultural learning, bridging technology, art, and global perspectives.",
  },
  {
    name: "Phakamani Luthuli (P Kycee)",
    role: "Sound Engineer & Music Producer",
    qualification: "Sound Engineering & Music Production",
    institution: "Music available on Spotify",
    image: phakamaniImage,
    bio: "Phakamani Luthuli, professionally known as P Kycee, is a Sound Engineer and Music Producer with music available on Spotify. His creative work blends technical sound engineering skills with artistic expression, contributing to the growing African music landscape. At Nokuvela Academy, Phakamani represents the creative arts pillar, inspiring young creatives to explore careers in music production, sound design, and digital creativity.",
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
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Expert Facilitators
          </h2>
          <p className="font-body text-base sm:text-lg text-muted-foreground px-2">
            Our dedicated facilitators bring professional expertise and passion for education, 
            volunteering their time for community development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 text-center ${
                member.isFounder ? "sm:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto" : ""
              }`}
            >
              {/* Avatar/Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform ring-2 sm:ring-4 ring-primary/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              {member.role && (
                <p className="font-body text-xs sm:text-sm font-semibold text-primary mb-2 px-2">
                  {member.role}
                </p>
              )}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-muted-foreground mb-2">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                <span className="font-body text-xs sm:text-sm font-medium">
                  {member.qualification}
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                {member.institution}
              </p>
              
              {/* Bio for founder */}
              {member.bio && (
                <p className="font-body text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto leading-relaxed px-1">
                  {member.bio}
                </p>
              )}

              {/* Actions */}
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContactClick(member.name)}
                  className="text-xs sm:text-sm"
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
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
