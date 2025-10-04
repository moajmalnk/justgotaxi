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
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 rounded-full bg-secondary/20 animate-scale-in">
              <Car className="h-12 w-12 text-secondary" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            Welcome to Just Go Taxi!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Book your reliable ride now. Available 24/7 with professional drivers and competitive rates.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <BookingForm />
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">15+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
