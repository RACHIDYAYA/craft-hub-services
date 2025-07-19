import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import craftsman1 from "@/assets/craftsman-1.jpg";
import craftsman2 from "@/assets/craftsman-2.jpg";
import craftsman3 from "@/assets/craftsman-3.jpg";

const featuredCraftsmen = [
  {
    id: 1,
    name: "Ahmed Hassan",
    craft: "Carpenter",
    image: craftsman1,
    rating: 4.9,
    reviews: 127,
    location: "Casablanca",
    isVerified: true,
    price: "From $45/hr",
    specialties: ["Furniture", "Cabinets", "Flooring"],
    completedJobs: 156
  },
  {
    id: 2,
    name: "Youssef Alami",
    craft: "Electrician",
    image: craftsman2,
    rating: 4.8,
    reviews: 89,
    location: "Rabat",
    isVerified: true,
    price: "From $60/hr",
    specialties: ["Wiring", "Lighting", "Repair"],
    completedJobs: 98
  },
  {
    id: 3,
    name: "Fatima Benali",
    craft: "Painter",
    image: craftsman3,
    rating: 4.9,
    reviews: 156,
    location: "Marrakech",
    isVerified: true,
    price: "From $35/hr",
    specialties: ["Interior", "Exterior", "Decorative"],
    completedJobs: 203
  }
];

export function FeaturedCraftsmen() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Craftsmen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet some of our top-rated professionals who consistently deliver 
            exceptional work and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCraftsmen.map((craftsman, index) => (
            <Card 
              key={craftsman.id}
              className="group hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer border-0 shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative">
                  <img 
                    src={craftsman.image} 
                    alt={craftsman.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {craftsman.isVerified && (
                      <Badge variant="secondary" className="bg-success text-success-foreground">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {craftsman.craft}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  {/* Name and Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {craftsman.name}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {craftsman.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-warning text-warning mr-1" />
                        <span className="font-semibold">{craftsman.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ({craftsman.reviews} reviews)
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {craftsman.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-muted-foreground">
                      {craftsman.completedJobs} jobs completed
                    </span>
                    <span className="font-semibold text-primary">
                      {craftsman.price}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Profile
                    </Button>
                    <Button size="sm" className="flex-1 group-hover:bg-primary-hover">
                      Book Now
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="gradient" className="px-8">
            View All Craftsmen
          </Button>
        </div>
      </div>
    </section>
  );
}