import { MapPin, Phone, Mail, MessageCircle, Clock, Shield, Award, Car } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const services = [
    { name: "Airport Transfers", href: "/" },
    { name: "Local Journeys", href: "/" },
    { name: "Corporate Travel", href: "/" },
    { name: "24/7 Service", href: "/" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/" },
    { name: "Terms of Service", href: "/" },
  ];

  const trustIndicators = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "Professional Service" },
    { icon: Clock, text: "24/7 Availability" },
    { icon: Car, text: "Modern Fleet" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-secondary/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-secondary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-secondary/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 border border-secondary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-secondary">Just Go</span> Taxi
                </h3>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-md">
                  Professional taxi service in Pontypridd and South Wales. Available 24/7 for all your transportation needs with uncompromising quality and reliability.
                </p>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {trustIndicators.map((indicator, index) => {
                    const Icon = indicator.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-sm font-medium text-slate-300">{indicator.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Services and Company - Always Side by Side */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
                {/* Services */}
                <div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6 text-secondary">Our Services</h4>
                  <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.href} 
                          className="text-slate-300 hover:text-secondary transition-colors duration-200 flex items-center group text-xs sm:text-sm lg:text-base"
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary mr-2 sm:mr-3 group-hover:w-2 group-hover:h-2 transition-all flex-shrink-0"></div>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Links */}
                <div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6 text-secondary">Company</h4>
                  <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                    {company.map((item, index) => (
                      <li key={index}>
                        <Link 
                          to={item.href} 
                          className="text-slate-300 hover:text-secondary transition-colors duration-200 flex items-center group text-xs sm:text-sm lg:text-base"
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary mr-2 sm:mr-3 group-hover:w-2 group-hover:h-2 transition-all flex-shrink-0"></div>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Our Location</h5>
                  <a 
                    href="https://maps.google.com/maps?q=Pontypridd,+South+Wales,+UK"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-secondary transition-colors"
                  >
                    Pontypridd, South Wales, UK
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Email Us</h5>
                  <a 
                    href="mailto:info@justgotaxi.uk" 
                    className="text-slate-300 hover:text-secondary transition-colors"
                  >
                    info@justgotaxi.uk
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Service Hours</h5>
                  <p className="text-slate-300">24/7 Available</p>
                  <p className="text-sm text-slate-400">Every day of the year</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-slate-400 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Just Go Taxi. All rights reserved.</p>
              <p className="text-sm mt-1">Licensed taxi service in South Wales</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Professional Drivers</span>
              <span>•</span>
              <span>Modern Fleet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
