import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Star, 
  Filter, 
  CheckCircle,
  Grid,
  List,
  SlidersHorizontal,
  Heart,
  ArrowRight
} from "lucide-react";
import craftsman1 from "@/assets/craftsman-1.jpg";
import craftsman2 from "@/assets/craftsman-2.jpg";
import craftsman3 from "@/assets/craftsman-3.jpg";

const craftsmen = [
  {
    id: 1,
    name: "Ahmed Hassan",
    craft: "Carpenter",
    image: craftsman1,
    rating: 4.9,
    reviews: 127,
    location: "Casablanca",
    distance: "2.3 km",
    isVerified: true,
    price: "From $45/hr",
    specialties: ["Furniture", "Cabinets", "Flooring"],
    completedJobs: 156,
    responseTime: "~2 hours",
    availability: "Available today"
  },
  {
    id: 2,
    name: "Youssef Alami",
    craft: "Electrician",
    image: craftsman2,
    rating: 4.8,
    reviews: 89,
    location: "Rabat",
    distance: "5.1 km",
    isVerified: true,
    price: "From $60/hr",
    specialties: ["Wiring", "Lighting", "Repair"],
    completedJobs: 98,
    responseTime: "~1 hour",
    availability: "Available tomorrow"
  },
  {
    id: 3,
    name: "Fatima Benali",
    craft: "Painter",
    image: craftsman3,
    rating: 4.9,
    reviews: 156,
    location: "Marrakech",
    distance: "3.7 km",
    isVerified: true,
    price: "From $35/hr",
    specialties: ["Interior", "Exterior", "Decorative"],
    completedJobs: 203,
    responseTime: "~30 min",
    availability: "Available now"
  },
  // Duplicate for demo
  {
    id: 4,
    name: "Hassan Bennis",
    craft: "Plumber",
    image: craftsman1,
    rating: 4.7,
    reviews: 92,
    location: "Casablanca",
    distance: "1.8 km",
    isVerified: true,
    price: "From $50/hr",
    specialties: ["Pipe Repair", "Installation", "Emergency"],
    completedJobs: 134,
    responseTime: "~45 min",
    availability: "Available today"
  },
  {
    id: 5,
    name: "Laila Amrani",
    craft: "Mason",
    image: craftsman3,
    rating: 4.8,
    reviews: 78,
    location: "Rabat",
    distance: "4.2 km",
    isVerified: false,
    price: "From $55/hr",
    specialties: ["Brickwork", "Stonework", "Concrete"],
    completedJobs: 89,
    responseTime: "~3 hours",
    availability: "Available this week"
  },
  {
    id: 6,
    name: "Omar Kadiri",
    craft: "Mechanic",
    image: craftsman2,
    rating: 4.6,
    reviews: 65,
    location: "Casablanca",
    distance: "6.3 km",
    isVerified: true,
    price: "From $70/hr",
    specialties: ["Auto Repair", "Maintenance", "Diagnostics"],
    completedJobs: 112,
    responseTime: "~4 hours",
    availability: "Available tomorrow"
  }
];

const craftTypes = ["All", "Carpenter", "Electrician", "Plumber", "Painter", "Mason", "Mechanic"];

export default function Craftsmen() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCraft, setSelectedCraft] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCraftsmen = craftsmen.filter(craftsman => {
    const matchesCraft = selectedCraft === "All" || craftsman.craft === selectedCraft;
    const matchesSearch = craftsman.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         craftsman.craft.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         craftsman.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCraft && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Find Skilled Craftsmen
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Connect with verified professionals in your area
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  <Input
                    placeholder="Search by name, service, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  <Input
                    placeholder="Enter your location"
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                <Button size="lg" variant="secondary" className="px-8">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="h-5 w-5" />
                  <h3 className="font-semibold text-lg">Filters</h3>
                </div>

                {/* Craft Types */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Service Type</h4>
                    <div className="space-y-2">
                      {craftTypes.map((type) => (
                        <Button
                          key={type}
                          variant={selectedCraft === type ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSelectedCraft(type)}
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Input placeholder="Min" className="w-20" />
                        <span>-</span>
                        <Input placeholder="Max" className="w-20" />
                        <span className="text-sm text-muted-foreground">$/hr</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Rating</h4>
                    <div className="space-y-2">
                      {[5, 4, 3].map((rating) => (
                        <label key={rating} className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <div className="flex items-center">
                            <span className="mr-1">{rating}</span>
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span className="ml-1 text-sm text-muted-foreground">& up</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Availability</h4>
                    <div className="space-y-2">
                      {["Available now", "Today", "This week"].map((availability) => (
                        <label key={availability} className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span className="text-sm">{availability}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <Button variant="outline" className="w-full">
                      <Filter className="h-4 w-4 mr-2" />
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {filteredCraftsmen.length} Craftsmen Found
                </h2>
                <p className="text-muted-foreground">
                  {selectedCraft !== "All" && `${selectedCraft} specialists`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Sort by: Best Match</option>
                  <option>Sort by: Rating</option>
                  <option>Sort by: Price (Low to High)</option>
                  <option>Sort by: Price (High to Low)</option>
                  <option>Sort by: Distance</option>
                </select>
                
                <div className="flex rounded-md border">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Craftsmen Grid/List */}
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {filteredCraftsmen.map((craftsman) => (
                <Card 
                  key={craftsman.id}
                  className="group hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer border-0 shadow-card"
                >
                  <CardContent className={viewMode === "grid" ? "p-0" : "p-6"}>
                    {viewMode === "grid" ? (
                      // Grid View
                      <>
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
                            <Badge variant="secondary" className="bg-white/90 text-foreground">
                              {craftsman.craft}
                            </Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30"
                          >
                            <Heart className="h-4 w-4 text-white" />
                          </Button>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                {craftsman.name}
                              </h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                {craftsman.location} • {craftsman.distance}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-warning text-warning mr-1" />
                                <span className="font-semibold">{craftsman.rating}</span>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                ({craftsman.reviews})
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {craftsman.specialties.slice(0, 2).map((specialty) => (
                              <Badge key={specialty} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                            {craftsman.specialties.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{craftsman.specialties.length - 2}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-sm mb-4">
                            <div className="space-y-1">
                              <div className="text-muted-foreground">
                                {craftsman.completedJobs} jobs • {craftsman.responseTime}
                              </div>
                              <div className="text-success font-medium">
                                {craftsman.availability}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-primary">
                                {craftsman.price}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              View Profile
                            </Button>
                            <Button size="sm" className="flex-1">
                              Contact
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </>
                    ) : (
                      // List View
                      <div className="flex gap-4">
                        <img 
                          src={craftsman.image} 
                          alt={craftsman.name}
                          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-semibold">{craftsman.name}</h3>
                                {craftsman.isVerified && (
                                  <CheckCircle className="h-4 w-4 text-success" />
                                )}
                                <Badge variant="outline">{craftsman.craft}</Badge>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                {craftsman.location} • {craftsman.distance}
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 fill-warning text-warning mr-1" />
                                  <span>{craftsman.rating} ({craftsman.reviews})</span>
                                </div>
                                <span>{craftsman.completedJobs} jobs</span>
                                <span className="text-success">{craftsman.availability}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-primary mb-2">
                                {craftsman.price}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  View Profile
                                </Button>
                                <Button size="sm">
                                  Contact
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Craftsmen
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}