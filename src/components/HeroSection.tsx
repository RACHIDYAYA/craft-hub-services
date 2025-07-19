import { Button } from "@/components/ui/button";
import { Search, MapPin, Star, Users, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Trusted
              <span className="block text-secondary">Craftsmen</span>
              Near You
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Connect with skilled professionals for all your home and business needs. 
              Verified craftsmen, fair prices, quality guaranteed.
            </p>

            {/* Search bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 focus:border-white/50 focus:outline-none"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 focus:border-white/50 focus:outline-none"
                  />
                </div>
                <Button size="lg" variant="secondary" className="px-8 py-4 h-auto">
                  Search
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="px-8 py-4 h-auto">
                Book a Service
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10">
                Join as Craftsman
              </Button>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="lg:ml-12 animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              {/* Stat cards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-white/80">Active Craftsmen</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-2">4.8/5</div>
                <div className="text-white/80">Average Rating</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <CheckCircle className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-white/80">Jobs Completed</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-white/80">Cities Covered</div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">Trusted by thousands</div>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                  <span className="ml-2 text-white/90">(2,847 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}