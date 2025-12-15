import { Monitor, Globe2, ShieldCheck, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Technology-Driven Operations",
    description:
      "Real-time tracking, digital documentation, and AI-powered logistics optimization for seamless operations.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description:
      "Strategic partnerships and presence across 50+ countries ensuring worldwide coverage and local expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Compliant",
    description:
      "ISO certified processes with strict compliance to international trade regulations and safety standards.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Service",
    description:
      "Dedicated account managers and 24/7 support to address your logistics needs anytime, anywhere.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose TFS
            </span>
            <h2 className="heading-secondary text-foreground mt-3 mb-6">
              Your Trusted Partner in Global Logistics
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Technology Freight Solutions, we combine cutting-edge technology
              with decades of industry expertise to deliver logistics solutions
              that drive your business forward. Our commitment to excellence
              ensures your cargo reaches its destination safely and on time.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-card text-center">
                  <p className="text-4xl font-bold text-primary mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-card text-center">
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-card text-center">
                  <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-card text-center">
                  <p className="text-4xl font-bold text-primary mb-2">99%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
