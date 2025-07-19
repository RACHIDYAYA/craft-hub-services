import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Zap, 
  Droplets, 
  Paintbrush, 
  Hammer, 
  Settings,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Carpentry",
    description: "Furniture repair, custom woodwork, installations",
    jobs: "1,200+ jobs",
    avgPrice: "From $50/hr"
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Wiring, installations, repairs, maintenance",
    jobs: "800+ jobs",
    avgPrice: "From $75/hr"
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Pipe repairs, installations, emergency fixes",
    jobs: "950+ jobs",
    avgPrice: "From $60/hr"
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior, exterior, commercial painting",
    jobs: "600+ jobs",
    avgPrice: "From $40/hr"
  },
  {
    icon: Hammer,
    title: "Masonry",
    description: "Brickwork, stonework, concrete repairs",
    jobs: "400+ jobs",
    avgPrice: "From $65/hr"
  },
  {
    icon: Settings,
    title: "Mechanic",
    description: "Auto repair, maintenance, diagnostics",
    jobs: "700+ jobs",
    avgPrice: "From $70/hr"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find skilled craftsmen for all your needs. From quick fixes to major projects, 
            we have verified professionals ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer border-0 shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-success font-medium">{service.jobs}</span>
                      <span className="font-semibold">{service.avgPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Find {service.title} Experts
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}