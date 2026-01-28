import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src={logo}
                alt="Nokuvela Academy"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold">Nokuvela Academy</h3>
                <p className="text-xs sm:text-sm italic text-secondary-foreground/70">
                  Indlela Ibuzwa Kwabaphambili
                </p>
              </div>
            </div>
            <p className="font-body text-sm sm:text-base text-secondary-foreground/80 max-w-md leading-relaxed mb-4 sm:mb-6">
              Empowering the youth of Zululand through accessible education, skills training, 
              and mentorship. Building a self-sufficient community one learner at a time.
            </p>
            <p className="text-xs sm:text-sm text-secondary-foreground/60">
              Reg. No: 2025/109083/08 (NPC)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#services" },
                { label: "Our Team", href: "#team" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+27679030771"
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                  067 903 0771
                </a>
              </li>
              <li>
                <a
                  href="mailto:nokuvelacademy@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors break-all"
                >
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                  <span className="break-all">nokuvelacademy@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=KwaMusi+Nongoma+Zululand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                  <span>
                    KwaMusi Area, Nongoma<br />
                    Zululand, South Africa
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-secondary-foreground/60 text-center sm:text-left">
            © {new Date().getFullYear()} Nokuvela Academy. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary hover:bg-secondary-foreground/10"
          >
            <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
