import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CustomCalendar } from "./ui/custom-calendar";
import { CustomTimePicker } from "./ui/custom-time-picker";
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

    // Format date for display
    const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) : 'Not specified';

    // Format time for display (convert from 24h to 12h format)
    const formatTime = (time24: string) => {
      if (!time24) return 'Not specified';
      const [hours, minutes] = time24.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return `${hour12}:${minutes} ${ampm}`;
    };

    // Create WhatsApp message
    const message = encodeURIComponent(
      `🚕 *Just Go Taxi Booking Request*\n\n` +
      `📍 *Pickup Location:* ${formData.pickupLocation}\n` +
      `🎯 *Dropoff Location:* ${formData.dropoffLocation}\n` +
      `📅 *Date:* ${formattedDate}\n` +
      `🕐 *Time:* ${formatTime(formData.time)}\n` +
      `👥 *Passengers:* ${formData.passengers}\n\n` +
      `Please confirm availability and provide quote. Thank you!`
    );

    // Open WhatsApp
    window.open(`https://wa.me/4407469073386?text=${message}`, '_blank');
    
    // Reset form after successful submission
    setFormData({
      pickupLocation: "",
      dropoffLocation: "",
      date: "",
      time: "",
      passengers: "1",
    });

    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Book Your Ride</CardTitle>
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
              <CustomCalendar
                value={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                placeholder="Pick a date"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Time *</span>
              </Label>
              <CustomTimePicker
                value={formData.time}
                onChange={(time) => setFormData({ ...formData, time })}
                placeholder="Select time"
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

          <Button type="submit" variant="hero" size="lg" className="w-full">
            <MessageCircle className="h-5 w-5 mr-2" />
            Get Quote via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
