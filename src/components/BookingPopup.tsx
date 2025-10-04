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
        
        <div className="mt-6">
          <BookingForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
