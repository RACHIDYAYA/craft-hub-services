import { Card, CardContent } from "@/components/ui/card";
import { Search, UserCheck, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Browse",
    description: "Find craftsmen by service type, location, and ratings. View profiles, portfolios, and reviews."
  },
  {
    icon: UserCheck,
    title: "Select & Connect",
    description: "Choose your preferred craftsman and send a booking request with project details."
  },
  {
    icon: Calendar,
    title: "Schedule & Work",
    description: "Confirm the appointment, get the work done, and track progress in real-time."
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Complete payment through our secure platform and leave a review for others."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How CraftHub Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting quality work done has never been easier. Follow these simple steps 
            to connect with trusted craftsmen in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={step.title}
              className="text-center border-0 shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative -mt-24 mb-8">
          <div className="flex justify-between items-center px-16">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 mt-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}