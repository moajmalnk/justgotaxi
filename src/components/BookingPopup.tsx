import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookingForm } from "./BookingForm";
import { Car } from "lucide-react";

export const BookingPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown before
    const hasSeenPopup = localStorage.getItem("hasSeenBookingPopup");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("hasSeenBookingPopup", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            Book Your Taxi Ride
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to book your taxi ride with JustGo Taxi. We'll get back to you shortly to confirm your booking.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <BookingForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
