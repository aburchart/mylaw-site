'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SubscriptionModal } from '@/components/ui/subscription-modal';
import { Mail } from 'lucide-react';

interface SubscribeSectionProps {
  variant?: 'hero' | 'footer';
  className?: string;
}

export function SubscribeSection({ variant = 'hero', className }: SubscribeSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        variant={variant === 'footer' ? 'secondary' : 'default'}
        className={
          variant === 'hero'
            ? `bg-primary hover:bg-primary/90 ${className ?? ''}`
            : className
        }
        onClick={() => setIsOpen(true)}
      >
        <Mail className="mr-2 h-5 w-5" />
        {variant === 'footer' ? 'Subscribe to Compliance Updates' : 'Subscribe for Updates'}
      </Button>
      <SubscriptionModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
