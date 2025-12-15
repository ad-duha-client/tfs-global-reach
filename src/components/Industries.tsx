import { Factory, ShoppingCart, Pill, Store, Car } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Supply chain solutions for raw materials and finished goods.",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "Fast fulfillment and last-mile delivery for online retailers.",
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "Temperature-controlled and compliant pharma logistics.",
  },
  {
    icon: Store,
    name: "Retail",
    description: "Inventory management and distribution for retail chains.",
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Just-in-time delivery for automotive parts and vehicles.",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="heading-secondary text-secondary-foreground mt-3 mb-4">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-secondary-foreground/70">
            We understand the unique logistics challenges of different sectors and
            provide specialized solutions to meet industry-specific requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group text-center p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary-foreground/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                <industry.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-secondary-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-secondary-foreground/60 group-hover:text-primary-foreground/80 transition-colors">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
