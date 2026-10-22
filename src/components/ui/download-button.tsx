'use client';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Button>;

interface DownloadButtonProps {
  downloadUrl: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonProps['variant'];
  disabled?: boolean;
}

export function DownloadButton({
  downloadUrl,
  children,
  className,
  variant = 'default',
  disabled = false,
}: DownloadButtonProps) {
  return (
    <Button
      className={className}
      variant={variant}
      disabled={disabled || !downloadUrl}
      onClick={() => downloadUrl && window.open(downloadUrl, '_blank')}
    >
      <Download className="mr-2 h-4 w-4" />
      {children}
    </Button>
  );
}
