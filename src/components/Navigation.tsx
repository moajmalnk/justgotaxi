import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Car, Shield, Clock } from "lucide-react";
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

  const quickActions = [
    { 
      icon: Phone, 
      href: "tel:+4407469073386", 
      label: "Call Now", 
      subtext: "07469 073386",
      variant: "secondary" as const
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/4407469073386?text=Book%20Taxi%20Now", 
      label: "WhatsApp", 
      subtext: "Book Now",
      variant: "outline" as const,
      external: true
    },
  ];

  const trustIndicators = [
    { icon: Shield, text: "Licensed" },
    { icon: Car, text: "Modern Fleet" },
    { icon: Clock, text: "24/7 Service" },
  ];

  return (
    <>
      {/* Top Trust Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Trust Indicators */}
            <div className="hidden sm:flex items-center space-x-6">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4 text-secondary" />
                    <span>{indicator.text}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Mobile 24/7 Service */}
            <div className="sm:hidden flex items-center space-x-2">
              <Clock className="h-4 w-4 text-secondary" />
              <span>24/7 Service</span>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+4407469073386" 
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">07469 073386</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white dark:bg-slate-800 shadow-lg sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                <span className="text-secondary">Just Go</span> Taxi
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-lg font-medium transition-all duration-200 group ${
                    isActive(link.path) 
                      ? "text-secondary" 
                      : "text-slate-700 dark:text-slate-300 hover:text-secondary"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <a
                    key={index}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noopener noreferrer" : undefined}
                    className="group"
                  >
                    <Button 
                      variant={action.variant} 
                      size="sm" 
                      className="group-hover:shadow-lg transition-all duration-200"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden lg:inline ml-2">{action.label}</span>
                    </Button>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="py-6 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                        isActive(link.path)
                          ? "bg-secondary/10 text-secondary border-l-4 border-secondary"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="px-4 space-y-3">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
                    Book Your Ride
                  </div>
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <a
                        key={index}
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noopener noreferrer" : undefined}
                        onClick={() => setIsOpen(false)}
                        className="block"
                      >
                        <Button 
                          variant={action.variant} 
                          size="lg" 
                          className="w-full justify-start"
                        >
                          <Icon className="h-5 w-5" />
                          <div className="ml-3 text-left">
                            <div className="font-semibold">{action.label}</div>
                            <div className="text-sm opacity-80">{action.subtext}</div>
                          </div>
                        </Button>
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Trust Indicators */}
                <div className="px-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {trustIndicators.map((indicator, index) => {
                      const Icon = indicator.icon;
                      return (
                        <div key={index} className="flex flex-col items-center space-y-1">
                          <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-secondary" />
                          </div>
                          <span className="text-xs text-slate-600 dark:text-slate-400">
                            {indicator.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
