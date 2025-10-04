import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Williams",
      location: "Pontypridd",
      rating: 5,
      text: "Absolutely brilliant service! The driver was punctual, professional, and very friendly. I use Just Go Taxi for all my airport transfers now.",
      service: "Airport Transfer",
      avatar: "SW",
    },
    {
      name: "David Jones",
      location: "Cardiff",
      rating: 5,
      text: "Been using Just Go Taxi for over 5 years. Never had a single issue. Always on time, clean vehicles, and reasonable prices. Highly recommend!",
      service: "Regular Customer",
      avatar: "DJ",
    },
    {
      name: "Emma Thomas",
      location: "Caerphilly",
      rating: 5,
      text: "Called at 3am for an emergency hospital trip and they were there within 10 minutes. True 24/7 service. Cannot thank them enough!",
      service: "Emergency Service",
      avatar: "ET",
    },
    {
      name: "Michael Roberts",
      location: "Merthyr Tydfil",
      rating: 5,
      text: "Professional drivers who know the area well. Competitive rates and excellent customer service. My go-to taxi service in South Wales.",
      service: "Business Travel",
      avatar: "MR",
    },
    {
      name: "Lisa Chen",
      location: "Barry",
      rating: 5,
      text: "Outstanding service from start to finish. Clean, comfortable vehicles and drivers who truly care about their passengers. Five stars!",
      service: "Local Journey",
      avatar: "LC",
    },
    {
      name: "James Wilson",
      location: "Bridgend",
      rating: 5,
      text: "Reliable, professional, and always on time. The booking process is simple and the drivers are courteous. Highly recommended!",
      service: "Corporate Travel",
      avatar: "JW",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-secondary/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-secondary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-secondary/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 border border-secondary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What Our <span className="text-secondary">Customers Say</span>
          </h2>
          <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers who trust us with their transportation needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="h-24 w-24 text-secondary" />
              </div>

              <CardContent className="p-8 relative">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed italic relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-secondary/30" />
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{testimonial.location}</p>
                    <div className="inline-block bg-secondary/10 px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-secondary">{testimonial.service}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl font-bold text-secondary">5000+</div>
              <div className="text-lg font-semibold text-foreground">Happy Customers</div>
              <div className="text-sm text-muted-foreground">Served annually</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl font-bold text-secondary">4.9/5</div>
              <div className="text-lg font-semibold text-foreground">Average Rating</div>
              <div className="text-sm text-muted-foreground">Based on reviews</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl font-bold text-secondary">100%</div>
              <div className="text-lg font-semibold text-foreground">Satisfaction Rate</div>
              <div className="text-sm text-muted-foreground">Customer guarantee</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 px-4">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white dark:bg-slate-800 px-4 sm:px-8 py-4 sm:py-4 rounded-lg sm:rounded-full shadow-lg border border-border/50 max-w-full">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-sm sm:text-lg font-semibold text-center">Join thousands of satisfied customers</span>
            <span className="text-xs sm:text-sm text-muted-foreground text-center">Book your ride today</span>
          </div>
        </div>
      </div>
    </section>
  );
};
