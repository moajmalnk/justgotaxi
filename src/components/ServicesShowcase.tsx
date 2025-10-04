import { Card, CardContent } from "./ui/card";
import { Plane, Briefcase, MapPin, Clock } from "lucide-react";
import airportService from "@/assets/airport-service.jpg";
import fleetTaxi from "@/assets/fleet-taxi.jpg";
import driverProfessional from "@/assets/driver-professional.jpg";
import taxiInterior from "@/assets/taxi-interior.jpg";

export const ServicesShowcase = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable airport transportation to all major UK airports including Cardiff, Heathrow, and Gatwick.",
      image: airportService,
      features: ["Fixed Pricing", "Flight Tracking", "Meet & Greet"],
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Professional business transportation for meetings, conferences, and corporate events.",
      image: driverProfessional,
      features: ["Executive Vehicles", "WiFi Available", "Business Class"],
    },
    {
      icon: MapPin,
      title: "Local Journeys",
      description: "Quick and efficient transportation for all your local trips around Pontypridd and South Wales.",
      image: fleetTaxi,
      features: ["Same Day Booking", "Local Knowledge", "Competitive Rates"],
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock availability ensuring you can travel whenever you need, day or night.",
      image: taxiInterior,
      features: ["Always Available", "Emergency Service", "Late Night Safe"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
              Our Premium Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional <span className="text-secondary">Transportation</span> Solutions
          </h2>
          <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From airport transfers to local journeys, we provide comprehensive taxi services 
            tailored to your needs with uncompromising quality and reliability
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-6 right-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-lg border border-border/50">
            <Clock className="h-5 w-5 text-secondary" />
            <span className="text-lg font-semibold">Ready to book your ride?</span>
            <span className="text-muted-foreground">Available 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};
