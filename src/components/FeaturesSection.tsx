import { Clock, Shield, DollarSign, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for your convenience, any time of day or night.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "Professional drivers with extensive experience and clean driving records.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Transparent pricing with no hidden fees. Best value for your journey.",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "Comfortable vehicles and exceptional customer service every time.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Just Go Taxi?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
