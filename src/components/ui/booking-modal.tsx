import React, { createContext, useContext, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

interface BookingModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
};

interface BookingModalProviderProps {
  children: React.ReactNode;
}

export const BookingModalProvider: React.FC<BookingModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    // Load the booking script when first opening the modal
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://link.burkstreet.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.head.appendChild(script);
      setScriptLoaded(true);
    }
  }, [scriptLoaded]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = {
    isOpen,
    open,
    close
  };

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh] max-h-[800px] p-0 flex flex-col">
          <DialogHeader className="p-6 pb-0 flex-shrink-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold">
                Book Your Consultation
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={close}
                className="h-8 w-8"
                aria-label="Close booking modal"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          
          <div className="flex-1 overflow-auto p-6 pt-0">
            <div className="w-full relative">
              <iframe
                src="https://link.burkstreet.com/widget/booking/qccF54itA96MKyu9MnFo"
                style={{
                  width: '100%',
                  minHeight: '700px',
                  border: 'none'
                }}
                scrolling="no"
                id="qccF54itA96MKyu9MnFo_1757299327199"
                title="Book a consultation"
                className="rounded-md"
              />
              
              {/* Fallback link */}
              <div className="absolute bottom-4 right-4">
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://link.burkstreet.com/widget/booking/qccF54itA96MKyu9MnFo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                  >
                    Open in new tab
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BookingModalContext.Provider>
  );
};