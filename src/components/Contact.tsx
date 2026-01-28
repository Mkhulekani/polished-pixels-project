import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Website Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:nokuvelacademy@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening email client...",
      description: "Your email app will open with your message pre-filled.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+27679030771";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:nokuvelacademy@gmail.com";
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=KwaMusi+Nongoma+Zululand",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Contact Us
          </h2>
          <p className="font-body text-base sm:text-lg text-muted-foreground px-2">
            Ready to join our community? Have questions about our programs? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <button
                onClick={handlePhoneClick}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card hover:bg-muted transition-colors w-full text-left group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground mb-0.5 sm:mb-1">Phone</p>
                  <p className="text-sm sm:text-base text-muted-foreground">067 903 0771</p>
                  <p className="text-xs text-primary mt-1">Click to call</p>
                </div>
              </button>

              <button
                onClick={handleEmailClick}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card hover:bg-muted transition-colors w-full text-left group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base text-foreground mb-0.5 sm:mb-1">Email</p>
                  <p className="text-sm sm:text-base text-muted-foreground break-all">nokuvelacademy@gmail.com</p>
                  <p className="text-xs text-secondary mt-1">Click to email</p>
                </div>
              </button>

              <button
                onClick={handleMapClick}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card hover:bg-muted transition-colors w-full text-left group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground mb-0.5 sm:mb-1">Location</p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    KwaMusi Area, Nokuvela Site<br />
                    Along R66, Nongoma, Zululand
                  </p>
                  <p className="text-xs text-accent mt-1 flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" /> Open in Maps
                  </p>
                </div>
              </button>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground mb-0.5 sm:mb-1">Hours</p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Info */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-secondary/10 border border-secondary/20">
              <p className="font-body text-xs sm:text-sm text-foreground">
                <span className="font-semibold">Registration No:</span> 2025/109083/08
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1.5 sm:mt-2">
                Registered Non-Profit Company (NPC)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-card">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="bg-background text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className="bg-background text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="bg-background text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help..."
                  rows={4}
                  required
                  className="bg-background resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
