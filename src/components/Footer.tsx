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
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Nokuvela Academy"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-2xl font-bold">Nokuvela Academy</h3>
                <p className="text-sm italic text-secondary-foreground/70">
                  Indlela Ibuzwa Kwabaphambili
                </p>
              </div>
            </div>
            <p className="font-body text-secondary-foreground/80 max-w-md leading-relaxed mb-6">
              Empowering the youth of Zululand through accessible education, skills training, 
              and mentorship. Building a self-sufficient community one learner at a time.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Reg. No: 2025/109083/08 (NPC)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
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
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+27679030771"
                  className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  067 903 0771
                </a>
              </li>
              <li>
                <a
                  href="mailto:nokuvelacademy@gmail.com"
                  className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  nokuvelacademy@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=KwaMusi+Nongoma+Zululand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5" />
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
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Nokuvela Academy. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-secondary-foreground/80 hover:text-primary hover:bg-secondary-foreground/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
