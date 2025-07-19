import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl">CraftHub</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Connecting skilled craftsmen with customers who need quality work done. 
              Trusted, verified, and ready to serve.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/craftsmen" className="text-background/80 hover:text-background transition-colors">Find Craftsmen</a></li>
              <li><a href="/how-it-works" className="text-background/80 hover:text-background transition-colors">How It Works</a></li>
              <li><a href="/pricing" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="/about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="font-semibold text-lg mb-6">For Professionals</h3>
            <ul className="space-y-3">
              <li><a href="/join-craftsman" className="text-background/80 hover:text-background transition-colors">Join as Craftsman</a></li>
              <li><a href="/craftsman-benefits" className="text-background/80 hover:text-background transition-colors">Benefits</a></li>
              <li><a href="/craftsman-resources" className="text-background/80 hover:text-background transition-colors">Resources</a></li>
              <li><a href="/success-stories" className="text-background/80 hover:text-background transition-colors">Success Stories</a></li>
              <li><a href="/support" className="text-background/80 hover:text-background transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-background/80">info@crafthub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-background/80">+212 5XX-XXX-XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-background/80">Casablanca, Morocco</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Newsletter</h4>
              <p className="text-background/80 text-sm mb-3">
                Get updates on new features and craftsmen in your area.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-background/80 text-sm">
            © 2024 CraftHub. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-background/80 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-background/80 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-background/80 hover:text-background text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}