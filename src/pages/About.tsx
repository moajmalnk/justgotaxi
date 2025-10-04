import { Layout } from "@/components/Layout";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle, Shield, Award, Users, Car, Clock, MapPin, Star, MessageCircle } from "lucide-react";

const About = () => {
  const history = [
    {
      year: "2024",
      title: "Founded",
      description: "Just Go Taxi was established in Pontypridd with a single vehicle and a vision to provide exceptional service.",
    },
    {
      year: "2024",
      title: "Technology Integration",
      description: "Launched with modern booking systems and GPS tracking for improved customer experience from day one.",
    },
    {
      year: "2024",
      title: "Fleet Growth",
      description: "Expanded our fleet and established strong partnerships in the local community.",
    },
    {
      year: "2025",
      title: "Today",
      description: "Serving the community with a modern fleet and 24/7 availability, building trust one ride at a time.",
    },
  ];

  const stats = [
    { icon: Car, value: "Modern Fleet", description: "Well-maintained vehicles" },
    { icon: Users, value: "Professional Drivers", description: "Licensed & experienced" },
    { icon: Clock, value: "24/7 Service", description: "Always available" },
    { icon: MapPin, value: "South Wales Coverage", description: "Local & long distance" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-secondary/20 rounded-full"></div>
          <div className="absolute top-40 right-32 w-32 h-32 border border-secondary/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-48 h-48 border border-secondary/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            About <span className="text-secondary">Just Go Taxi</span>
          </h1>
          <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-fade-in leading-relaxed text-slate-300">
            Your trusted transportation partner in Pontypridd and South Wales since 2024. 
            Building connections, one ride at a time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-800 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Building <span className="text-secondary">Trust</span> Through Service
              </h2>
              <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Just Go Taxi began with a simple mission: to provide the people of Pontypridd and South Wales with a taxi service they could truly depend on. Founded in 2024, we started with just one vehicle and a commitment to excellence that continues to drive us forward.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Since our founding, we've grown from that single car to a full fleet of modern, well-maintained vehicles, but our core values have remained unchanged. We believe that every journey matters, whether it's a quick trip across town, an early morning airport transfer, or a late-night ride home.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    What sets us apart is our dedication to our customers and our community. Our drivers aren't just professionals behind the wheel—they're local residents who know these roads like the back of their hand and take pride in representing Just Go Taxi with every trip.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, we're building our reputation as a trusted taxi service in South Wales, serving our community with dedication and care. We're driven by our commitment to providing safe, reliable, and friendly service that will define who we become.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-60 h-60 border border-secondary/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border border-secondary/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What <span className="text-secondary">Drives</span> Us
            </h2>
            <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Reliability",
                description: "We're there when you need us, on time, every time. Our commitment to punctuality and dependability sets us apart.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Award,
                title: "Safety",
                description: "Your safety is our top priority on every journey. Licensed drivers, maintained vehicles, and comprehensive insurance coverage.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Users,
                title: "Community",
                description: "We're proud to serve and support our local community. Local drivers who know the area and care about their neighbors.",
                color: "from-purple-500 to-purple-600"
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-slate-800/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                Our Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              From <span className="text-secondary">Start</span> to Today
            </h2>
            <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="space-y-12">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-8 animate-fade-in ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-800">
                        <span className="text-lg md:text-xl font-bold text-white">{item.year}</span>
                      </div>
                    </div>
                    
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                              {item.year}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-secondary/20 rounded-full"></div>
          <div className="absolute top-40 right-32 w-32 h-32 border border-secondary/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-48 h-48 border border-secondary/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                Ready to Ride?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Experience the <span className="text-secondary">Difference</span>
            </h2>
            <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300">
              Join our growing community of satisfied customers who trust Just Go Taxi for their transportation needs. 
              Professional service, every time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+4407469073386">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4 hover:shadow-2xl transition-all duration-300">
                  <Phone className="h-6 w-6 mr-3" />
                  Call Now: 07469 073386
                </Button>
              </a>
              <a href="https://wa.me/4407469073386" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  WhatsApp Booking
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-slate-700">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <Star className="h-6 w-6 text-secondary" />
                  <span className="text-slate-300">5-Star Rated Service</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Shield className="h-6 w-6 text-secondary" />
                  <span className="text-slate-300">Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="h-6 w-6 text-secondary" />
                  <span className="text-slate-300">24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
