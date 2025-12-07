import { useState, useEffect, useCallback, useRef } from 'react';

interface UseScreenNavigationProps {
  totalScreens: number;
  transitionDuration?: number;
}

interface UseScreenNavigationReturn {
  currentScreen: number;
  isTransitioning: boolean;
  direction: 'up' | 'down' | null;
  goToScreen: (index: number) => void;
  goNext: () => void;
  goPrevious: () => void;
}

export function useScreenNavigation({
  totalScreens,
  transitionDuration = 600,
}: UseScreenNavigationProps): UseScreenNavigationReturn {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  
  const lastWheelTime = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  const navigate = useCallback(
    (newScreen: number, dir: 'up' | 'down') => {
      if (isTransitioning || newScreen < 0 || newScreen >= totalScreens) return;
      if (newScreen === currentScreen) return;

      setDirection(dir);
      setIsTransitioning(true);
      
      // Wait for exit animation, then change screen
      setTimeout(() => {
        setCurrentScreen(newScreen);
        // Wait for enter animation to complete
        setTimeout(() => {
          setIsTransitioning(false);
          setDirection(null);
        }, transitionDuration);
      }, 400); // Exit animation duration
    },
    [currentScreen, isTransitioning, totalScreens, transitionDuration]
  );

  const goToScreen = useCallback(
    (index: number) => {
      if (index === currentScreen) return;
      const dir = index > currentScreen ? 'down' : 'up';
      navigate(index, dir);
    },
    [currentScreen, navigate]
  );

  const goNext = useCallback(() => {
    if (currentScreen < totalScreens - 1) {
      navigate(currentScreen + 1, 'down');
    }
  }, [currentScreen, totalScreens, navigate]);

  const goPrevious = useCallback(() => {
    if (currentScreen > 0) {
      navigate(currentScreen - 1, 'up');
    }
  }, [currentScreen, navigate]);

  // Wheel event handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTime.current;
      
      // Debounce: ignore rapid wheel events
      if (timeSinceLastWheel < 800 || isTransitioning) return;
      
      lastWheelTime.current = now;

      if (e.deltaY > 0) {
        goNext();
      } else if (e.deltaY < 0) {
        goPrevious();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrevious, isTransitioning]);

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          goPrevious();
          break;
        case 'Home':
          e.preventDefault();
          goToScreen(0);
          break;
        case 'End':
          e.preventDefault();
          goToScreen(totalScreens - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrevious, goToScreen, isTransitioning, totalScreens]);

  // Touch event handlers
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      
      const deltaY = touchStartY.current - touchEndY;
      const deltaTime = touchEndTime - touchStartTime.current;
      
      // Swipe threshold: at least 50px movement within 300ms
      const swipeThreshold = 50;
      const timeThreshold = 300;
      
      if (Math.abs(deltaY) > swipeThreshold && deltaTime < timeThreshold) {
        if (deltaY > 0) {
          goNext();
        } else {
          goPrevious();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrevious, isTransitioning]);

  return {
    currentScreen,
    isTransitioning,
    direction,
    goToScreen,
    goNext,
    goPrevious,
  };
}
