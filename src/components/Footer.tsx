import { MapPin, Phone, Mail, Clock } from "lucide-react";
import tfsLogo from "@/assets/tfs-logo.png";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Contact Us", href: "#contact" },
  { name: "Get a Quote", href: "#quote" },
];

const services = [
  "Air Freight",
  "Sea Freight",
  "Road Transportation",
  "Customs Clearance",
  "Warehousing",
  "Supply Chain",
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-padding pb-12">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src={tfsLogo} alt="TFS Logo" className="h-12 w-auto" />
                <div>
                  <p className="font-semibold text-sm">Technology Freight</p>
                  <p className="text-xs text-secondary-foreground/60">
                    Solutions Pvt. Ltd.
                  </p>
                </div>
              </div>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
                Your trusted partner for global freight forwarding and
                technology-driven logistics solutions.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-xs font-bold">X</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-xs font-bold">f</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground/70 text-sm">
                    123 Logistics Hub, Business District
                    <br />
                    Mumbai, India 400001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+911234567890"
                    className="text-secondary-foreground/70 hover:text-primary text-sm"
                  >
                    +91 123 456 7890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@tfslogistics.com"
                    className="text-secondary-foreground/70 hover:text-primary text-sm"
                  >
                    info@tfslogistics.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground/70 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10 py-6">
        <div className="container-custom mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {new Date().getFullYear()} Technology Freight Solutions Pvt. Ltd.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-secondary-foreground/50 hover:text-primary text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-secondary-foreground/50 hover:text-primary text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
