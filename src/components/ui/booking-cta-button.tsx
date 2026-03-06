'use client';
import { Button } from '@/components/ui/button';
import { useBookingModal } from '@/components/ui/booking-modal';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Button>;

interface BookingCTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
}

export function BookingCTAButton({ children, className, variant, size }: BookingCTAButtonProps) {
  const { open } = useBookingModal();
  return (
    <Button onClick={open} className={className} variant={variant} size={size}>
      {children}
    </Button>
  );
}
