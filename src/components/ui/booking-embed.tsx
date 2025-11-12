import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const BookingEmbed = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load the booking script
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://link.burkstreet.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.head.appendChild(script);
      setScriptLoaded(true);
    }
  }, [scriptLoaded]);

  return (
    <Card className="p-6">
      <div className="w-full relative">
        <iframe
          src="https://link.burkstreet.com/widget/booking/qccF54itA96MKyu9MnFo"
          style={{
            width: '100%',
            height: '700px',
            minHeight: '600px',
            border: 'none'
          }}
          id="qccF54itA96MKyu9MnFo_thankyou"
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
    </Card>
  );
};
