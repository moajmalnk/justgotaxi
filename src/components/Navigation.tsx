import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-secondary">Just Go</span> Taxi
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-secondary ${
                  isActive(link.path) ? "text-secondary font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+4407469073386" className="flex items-center space-x-2">
              <Button variant="secondary" size="sm">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20 animate-slide-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 transition-colors hover:text-secondary ${
                    isActive(link.path) ? "text-secondary font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+4407469073386" className="px-4">
                <Button variant="secondary" size="sm" className="w-full">
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
