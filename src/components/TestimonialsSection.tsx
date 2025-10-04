import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Williams",
      location: "Pontypridd",
      rating: 5,
      text: "Absolutely brilliant service! The driver was punctual, professional, and very friendly. I use Just Go Taxi for all my airport transfers now.",
    },
    {
      name: "David Jones",
      location: "Cardiff",
      rating: 5,
      text: "Been using Just Go Taxi for over 5 years. Never had a single issue. Always on time, clean vehicles, and reasonable prices. Highly recommend!",
    },
    {
      name: "Emma Thomas",
      location: "Caerphilly",
      rating: 5,
      text: "Called at 3am for an emergency hospital trip and they were there within 10 minutes. True 24/7 service. Cannot thank them enough!",
    },
    {
      name: "Michael Roberts",
      location: "Merthyr Tydfil",
      rating: 5,
      text: "Professional drivers who know the area well. Competitive rates and excellent customer service. My go-to taxi service in South Wales.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-secondary/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
