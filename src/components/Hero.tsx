import { ArrowRight, Globe, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Global logistics and freight operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up opacity-0">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-primary-foreground text-sm font-medium">
              Global Freight Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-primary text-primary-foreground mb-6 animate-fade-up opacity-0 stagger-1">
            Powering Global Trade with{" "}
            <span className="text-primary">Technology-Driven</span> Logistics
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up opacity-0 stagger-2 max-w-2xl">
            From air freight to sea cargo, we deliver reliable, fast, and
            technology-enabled supply chain solutions that connect your business
            to the world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-3">
            <Button variant="hero" size="xl">
              Get a Free Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up opacity-0 stagger-4">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-primary-foreground/70">Countries Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">10K+</p>
              <p className="text-sm text-primary-foreground/70">Shipments Yearly</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
              <p className="text-sm text-primary-foreground/70">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
