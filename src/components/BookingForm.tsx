import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, MapPin, Users, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    passengers: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.pickupLocation || !formData.dropoffLocation || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In a real application, this would send data to a booking API
    toast.success("Booking request received! We'll contact you shortly.");
    
    // Reset form
    setFormData({
      pickupLocation: "",
      dropoffLocation: "",
      date: "",
      time: "",
      passengers: "1",
    });
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Ride</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pickup" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Pickup Location *</span>
            </Label>
            <Input
              id="pickup"
              type="text"
              placeholder="Enter pickup address"
              value={formData.pickupLocation}
              onChange={(e) =>
                setFormData({ ...formData, pickupLocation: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dropoff" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Dropoff Location *</span>
            </Label>
            <Input
              id="dropoff"
              type="text"
              placeholder="Enter destination"
              value={formData.dropoffLocation}
              onChange={(e) =>
                setFormData({ ...formData, dropoffLocation: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>Date *</span>
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Time *</span>
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="passengers" className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-secondary" />
              <span>Number of Passengers</span>
            </Label>
            <Input
              id="passengers"
              type="number"
              min="1"
              max="8"
              value={formData.passengers}
              onChange={(e) =>
                setFormData({ ...formData, passengers: e.target.value })
              }
            />
          </div>

          <div className="space-y-3">
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Get Quote
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or book via</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
              onClick={() => {
                const message = encodeURIComponent(
                  `Book Taxi Now\n\nFrom: ${formData.pickupLocation || 'Not specified'}\nTo: ${formData.dropoffLocation || 'Not specified'}\nDate: ${formData.date || 'Not specified'}\nTime: ${formData.time || 'Not specified'}\nPassengers: ${formData.passengers}`
                );
                window.open(`https://wa.me/4407469073386?text=${message}`, '_blank');
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Book via WhatsApp
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
