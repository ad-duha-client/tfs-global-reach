import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
      <div className="container-custom mx-auto text-center">
        <h2 className="heading-secondary text-primary-foreground mb-4">
          Ready to Optimize Your Supply Chain?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          Get in touch with our logistics experts today and discover how TFS can
          streamline your freight operations and reduce costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="heroOutline"
            size="xl"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <Button
            variant="ghost"
            size="xl"
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
