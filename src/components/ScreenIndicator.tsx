import React from 'react';
import { cn } from '@/lib/utils';

interface ScreenIndicatorProps {
  totalScreens: number;
  currentScreen: number;
  onNavigate: (index: number) => void;
}

export const ScreenIndicator: React.FC<ScreenIndicatorProps> = ({
  totalScreens,
  currentScreen,
  onNavigate,
}) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
      {Array.from({ length: totalScreens }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={cn(
            'w-3 h-3 border-2 transition-all duration-300',
            'hover:border-primary hover:scale-125',
            index === currentScreen
              ? 'bg-primary border-primary box-glow scale-110'
              : 'bg-transparent border-muted-foreground/50'
          )}
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
          aria-label={`Go to screen ${index + 1}`}
          aria-current={index === currentScreen ? 'true' : 'false'}
        />
      ))}
    </div>
  );
};
