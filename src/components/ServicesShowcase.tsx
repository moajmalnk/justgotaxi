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
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Professional business transportation for meetings, conferences, and corporate events.",
      image: driverProfessional,
    },
    {
      icon: MapPin,
      title: "Local Journeys",
      description: "Quick and efficient transportation for all your local trips around Pontypridd and South Wales.",
      image: fleetTaxi,
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock availability ensuring you can travel whenever you need, day or night.",
      image: taxiInterior,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From airport transfers to local journeys, we provide comprehensive taxi services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="p-2 rounded-full bg-secondary/90 inline-block mb-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
