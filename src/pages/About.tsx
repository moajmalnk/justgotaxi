import { Layout } from "@/components/Layout";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle } from "lucide-react";

const About = () => {
  const history = [
    {
      year: "2008",
      title: "Founded",
      description: "Just Go Taxi was established in Pontypridd with a single vehicle and a vision to provide exceptional service.",
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Grew our fleet to 10 vehicles and expanded coverage to all of South Wales.",
    },
    {
      year: "2016",
      title: "Technology Upgrade",
      description: "Implemented modern booking systems and GPS tracking for improved customer experience.",
    },
    {
      year: "2020",
      title: "Award Recognition",
      description: "Recognized as one of the top taxi services in South Wales for customer satisfaction.",
    },
    {
      year: "2024",
      title: "Today",
      description: "Serving thousands of satisfied customers with a modern fleet and 24/7 availability.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About Just Go Taxi
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Your trusted transportation partner in Pontypridd and South Wales since 2008
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Just Go Taxi began with a simple mission: to provide the people of Pontypridd and South Wales with a taxi service they could truly depend on. Founded in 2008, we started with just one vehicle and a commitment to excellence that has driven us ever since.
              </p>
              <p>
                Over the years, we've grown from that single car to a full fleet of modern, well-maintained vehicles, but our core values have remained unchanged. We believe that every journey matters, whether it's a quick trip across town, an early morning airport transfer, or a late-night ride home.
              </p>
              <p>
                What sets us apart is our dedication to our customers and our community. Our drivers aren't just professionals behind the wheel—they're local residents who know these roads like the back of their hand and take pride in representing Just Go Taxi with every trip.
              </p>
              <p>
                Today, we're proud to be one of the most trusted taxi services in South Wales, serving thousands of satisfied customers every year. But we haven't forgotten where we came from, and we're still driven by that same commitment to providing safe, reliable, and friendly service that made us who we are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Reliability",
                description: "We're there when you need us, on time, every time.",
              },
              {
                title: "Safety",
                description: "Your safety is our top priority on every journey.",
              },
              {
                title: "Community",
                description: "We're proud to serve and support our local community.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all">
                <CardContent className="pt-6">
                  <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-secondary">{item.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Just Go Taxi for their transportation needs
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

export default About;
