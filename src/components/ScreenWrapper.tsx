import React from 'react';
import { cn } from '@/lib/utils';

interface ScreenWrapperProps {
  children: React.ReactNode;
  isActive: boolean;
  isExiting: boolean;
  className?: string;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  isActive,
  isExiting,
  className,
}) => {
  if (!isActive && !isExiting) return null;

  return (
    <div
      className={cn(
        'screen-container screen-noise',
        isExiting ? 'animate-screen-off' : 'animate-screen-on',
        className
      )}
    >
      {children}
    </div>
  );
};
