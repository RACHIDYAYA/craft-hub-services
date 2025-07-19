import { Button } from "@/components/ui/button";
import { Menu, Search, User, Bell } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="hidden font-bold text-xl text-foreground sm:inline-block">
              CraftHub
            </span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium hidden md:flex">
          <a className="transition-colors hover:text-primary" href="/craftsmen">
            Find Craftsmen
          </a>
          <a className="transition-colors hover:text-primary" href="/how-it-works">
            How It Works
          </a>
          <a className="transition-colors hover:text-primary" href="/about">
            About
          </a>
        </nav>

        {/* Search bar - hidden on mobile */}
        <div className="flex-1 mx-6 hidden lg:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for services..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Notification bell */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full text-xs"></span>
          </Button>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <a href="/login">Sign In</a>
            </Button>
            <Button variant="gradient" asChild>
              <a href="/register">Join CraftHub</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <a className="text-foreground hover:text-primary" href="/craftsmen">
                Find Craftsmen
              </a>
              <a className="text-foreground hover:text-primary" href="/how-it-works">
                How It Works
              </a>
              <a className="text-foreground hover:text-primary" href="/about">
                About
              </a>
              <hr className="my-2" />
              <div className="flex flex-col space-y-2">
                <Button variant="ghost" asChild>
                  <a href="/login">Sign In</a>
                </Button>
                <Button variant="gradient" asChild>
                  <a href="/register">Join CraftHub</a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}