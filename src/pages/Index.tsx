import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { BookingForm } from "@/components/BookingForm";
import { BookingPopup } from "@/components/BookingPopup";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AirportRates } from "@/components/AirportRates";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-taxi.jpg";

const Index = () => {
  return (
    <Layout>
      <BookingPopup />
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Reliable Taxi Service
            <br />
            <span className="text-secondary">in South Wales</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Professional, safe, and comfortable transportation available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a href="tel:01443123456">
              <Button variant="hero" size="lg">
                <Phone className="h-5 w-5" />
                Call Now: 01443 123 456
              </Button>
            </a>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-lg">Available Anytime</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Booking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome to Just Go Taxi
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Just Go Taxi, our mission is simple: to provide safe, reliable, and comfortable transportation for everyone in Pontypridd and throughout South Wales.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience serving our community, we pride ourselves on punctuality, professionalism, and putting our customers first. Whether you need an airport transfer, a ride to an important meeting, or transportation for a night out, we're here for you 24 hours a day, 7 days a week.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">24/7 Service</h3>
                    <p className="text-muted-foreground">
                      Day or night, we're always ready to get you where you need to go.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Local & Long Distance</h3>
                    <p className="text-muted-foreground">
                      From quick local trips to airport transfers across the UK.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* Airport Rates */}
      <AirportRates />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch today for reliable, professional taxi service in Pontypridd and South Wales
          </p>
          <a href="tel:01443123456">
            <Button variant="secondary" size="lg" className="text-lg">
              <Phone className="h-5 w-5" />
              Call Now: 01443 123 456
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
