import { useState, useEffect, useCallback } from 'react';

export const useFlicker = (isActive: boolean) => {
  const [isFlickering, setIsFlickering] = useState(false);

  // Respect prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const triggerFlicker = useCallback(() => {
    if (!isActive || prefersReducedMotion) return;

    let count = 0;
    const maxFlickers = Math.floor(Math.random() * 4) + 4; // 4-7 toggles
    const interval = setInterval(() => {
      setIsFlickering(prev => !prev);
      count++;
      if (count >= maxFlickers) {
        clearInterval(interval);
        setIsFlickering(false);
      }
    }, Math.random() * 150 + 50); // 50-200ms per toggle
  }, [isActive, prefersReducedMotion]);

  useEffect(() => {
    if (!isActive || prefersReducedMotion) {
      setIsFlickering(false);
      return;
    }
    const delay = Math.random() * 6000 + 2000; // 2-8s idle
    const timeout = setTimeout(triggerFlicker, delay);
    return () => clearTimeout(timeout);
  }, [isActive, isFlickering, triggerFlicker, prefersReducedMotion]);

  return isFlickering;
};
