import { Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const rates = [
  { from: "Pontypridd", to: "Cardiff Airport", price: "£40.00" },
  { from: "Pontypridd", to: "Heathrow Airport", price: "£190.00" },
  { from: "Pontypridd", to: "Gatwick Airport", price: "£270.00" },
];

export const AirportRates = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
            <Plane className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Airport Transfer Rates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fixed-price airport transfers with no hidden fees. Book with confidence.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-elegant">
          <CardHeader>
            <CardTitle>Standard Rates from Pontypridd</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">From</th>
                    <th className="text-left py-3 px-4">To</th>
                    <th className="text-right py-3 px-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((rate, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-0 hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 px-4">{rate.from}</td>
                      <td className="py-3 px-4">{rate.to}</td>
                      <td className="py-3 px-4 text-right font-semibold text-secondary">
                        {rate.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Rates may vary based on vehicle size and additional requirements. Contact us for a custom quote.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
