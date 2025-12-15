import { Plane, Ship, Truck, FileCheck, Warehouse, Package } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Fast and reliable air cargo services connecting major global destinations with time-critical shipments.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Cost-effective ocean freight solutions for FCL and LCL shipments across international waters.",
  },
  {
    icon: Truck,
    title: "Road Transportation",
    description:
      "Comprehensive ground logistics with real-time tracking and door-to-door delivery services.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description:
      "Expert customs brokerage ensuring smooth and compliant clearance of your goods.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description:
      "Modern warehousing facilities with inventory management and distribution networks.",
  },
  {
    icon: Package,
    title: "Supply Chain Solutions",
    description:
      "End-to-end supply chain management optimized for efficiency and cost savings.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="heading-secondary text-foreground mt-3 mb-4">
            Comprehensive Freight & Logistics Services
          </h2>
          <p className="text-muted-foreground">
            From origin to destination, we provide integrated logistics solutions
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
