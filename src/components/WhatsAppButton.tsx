import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Book Taxi Now");
    window.open(`https://wa.me/4407469073386?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-glow bg-[#25D366] hover:bg-[#20BA5A] text-white z-50 animate-scale-in"
      size="icon"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};
