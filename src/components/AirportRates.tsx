import { Plane, MapPin, Clock, Shield, CheckCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const rates = [
  { 
    from: "Pontypridd", 
    to: "Cardiff Airport", 
    price: "£40.00",
    duration: "25 mins",
    distance: "18 miles",
    popular: false
  },
  { 
    from: "Pontypridd", 
    to: "Heathrow Airport", 
    price: "£190.00",
    duration: "3h 15 mins",
    distance: "165 miles",
    popular: true
  },
  { 
    from: "Pontypridd", 
    to: "Gatwick Airport", 
    price: "£270.00",
    duration: "3h 45 mins",
    distance: "195 miles",
    popular: false
  },
];

const features = [
  "Fixed pricing - no surprises",
  "Meet & greet service",
  "Flight tracking included",
  "Professional drivers",
  "Comfortable vehicles",
  "24/7 availability"
];

export const AirportRates = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-secondary/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border border-secondary/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-48 h-48 border border-secondary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
              Airport Transfers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-secondary">Airport Transfer</span> Rates
          </h2>
          <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Fixed-price airport transfers with no hidden fees. Professional service with meet & greet, flight tracking, and complete peace of mind.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <Card className="shadow-2xl border-0 bg-white dark:bg-slate-800 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-secondary/10 to-secondary/5 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Plane className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Standard Rates from Pontypridd</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">All prices include meet & greet service</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full">
                    <Shield className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Fixed Pricing</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/30 border-b">
                        <th className="text-left py-4 px-6 font-semibold">Destination</th>
                        <th className="text-left py-4 px-6 font-semibold">Duration</th>
                        <th className="text-left py-4 px-6 font-semibold">Distance</th>
                        <th className="text-right py-4 px-6 font-semibold">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rates.map((rate, index) => (
                        <tr
                          key={index}
                          className="border-b last:border-0 hover:bg-muted/20 transition-all duration-200 group"
                        >
                          <td className="py-6 px-6">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 rounded-full bg-secondary"></div>
                              <div>
                                <div className="font-semibold text-lg">{rate.to}</div>
                                <div className="text-sm text-muted-foreground">from {rate.from}</div>
                              </div>
                              {rate.popular && (
                                <div className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                                  Popular
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="py-6 px-6">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{rate.duration}</span>
                            </div>
                          </td>
                          <td className="py-6 px-6">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{rate.distance}</span>
                            </div>
                          </td>
                          <td className="py-6 px-6 text-right">
                            <div className="text-2xl font-bold text-secondary">{rate.price}</div>
                            <div className="text-sm text-muted-foreground">All inclusive</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-6">
            {rates.map((rate, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white dark:bg-slate-800 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Plane className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{rate.to}</h3>
                        <p className="text-sm text-muted-foreground">from {rate.from}</p>
                      </div>
                    </div>
                    {rate.popular && (
                      <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{rate.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{rate.distance}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-secondary">{rate.price}</div>
                      <div className="text-sm text-muted-foreground">All inclusive</div>
                    </div>
                    <a
                      href={`https://wa.me/4407469073386?text=${encodeURIComponent(
                        `🚕 *Airport Transfer Booking*\n\n` +
                        `📍 *From:* ${rate.from}\n` +
                        `✈️ *To:* ${rate.to}\n` +
                        `💰 *Price:* ${rate.price}\n` +
                        `⏱️ *Duration:* ${rate.duration}\n` +
                        `📏 *Distance:* ${rate.distance}\n\n` +
                        `Please confirm availability and book this airport transfer. Thank you!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        Book Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-16">
            <Card className="shadow-lg border-0 bg-gradient-to-r from-secondary/5 to-secondary/10">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">What's Included</h3>
                  <p className="text-muted-foreground">Every airport transfer includes these premium services</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-border/50">
              <Info className="h-4 w-4 text-secondary" />
              <span className="text-sm text-muted-foreground">
                Rates may vary based on vehicle size and additional requirements. Contact us for a custom quote.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
