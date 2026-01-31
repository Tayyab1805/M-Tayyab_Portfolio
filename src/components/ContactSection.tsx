import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "Tayyab.1805";
const EMAILJS_TEMPLATE_ID = "template_x5bpg6t";
const EMAILJS_PUBLIC_KEY = "Nt7Kpm4DhyzY_mRyS";

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Contact from Portfolio",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tayyabtayyabe@gmail.com",
      href: "mailto:tayyabtayyabe@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 320 5722442",
      href: "tel:+923205722442",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tayyab1805",
      href: "https://www.linkedin.com/in/tayyab1805",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent font-medium mb-3">Let's Work Together</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new opportunities, internships, or just connecting with fellow professionals.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href || "#"}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-5 bg-card rounded-xl border border-border card-elevated group ${
                      item.href ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <form onSubmit={handleSubmit} className="p-8 bg-card rounded-2xl border border-border card-elevated">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="Internship Opportunity"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                    placeholder="Hi Muhammad, I'd like to discuss..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
