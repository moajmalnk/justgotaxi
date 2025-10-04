import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { BookingForm } from "@/components/BookingForm";
import { BookingPopup } from "@/components/BookingPopup";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AirportRates } from "@/components/AirportRates";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-taxi.jpg";
import fleetImage from "@/assets/fleet-taxi.jpg";

const Index = () => {
  return (
    <Layout>
      <BookingPopup />
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in drop-shadow-2xl leading-tight">
            <span className="text-white drop-shadow-lg">Your Reliable Taxi Service</span>
            <br />
            <span className="text-secondary drop-shadow-lg">in South Wales and Pontypridd</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in text-white drop-shadow-lg bg-black/40 px-3 sm:px-4 py-2 sm:py-3 rounded-lg backdrop-blur-sm">
            Professional, safe, and comfortable transportation available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-2">
            <a href="tel:+4407469073386" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="ml-2">Call Now: 07469 073386</span>
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
              onClick={() => {
                document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Taxi Now
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
      <section id="booking-section" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                    Your Trusted Partner
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight whitespace-nowrap">
                  Welcome to <span className="text-secondary">Just Go Taxi</span>
                </h2>
                <div className="w-24 h-1 bg-secondary rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 mb-10">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  At Just Go Taxi, our mission is simple: to provide{" "}
                  <span className="text-foreground font-semibold">safe, reliable, and comfortable</span>{" "}
                  transportation for everyone in Pontypridd and throughout South Wales. We are available 24/7 for all your transportation needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300 border border-secondary/10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-foreground">24/7 Service</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Day or night, we're always ready to get you where you need to go, whenever you need us.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300 border border-secondary/10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-foreground">Local & Long Distance</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        From quick local trips to airport transfers across the UK - we cover it all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img 
                    src={fleetImage} 
                    alt="Professional taxi fleet" 
                    className="w-full h-full object-cover opacity-10"
                  />
                </div>
                {/* Booking Form */}
                <div className="relative z-10 bg-white rounded-lg p-6 shadow-lg">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Airport Rates */}
      <AirportRates />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch today for reliable, professional taxi service in South Wales and Pontypridd
          </p>
          <a href="tel:+4407469073386">
            <Button variant="secondary" size="lg" className="text-lg">
              <Phone className="h-5 w-5" />
              Call Now: 07469 073386
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
