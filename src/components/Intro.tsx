import { useState, useEffect, useCallback } from 'react';
import { portfolioData } from '@/data/portfolio';

export const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>('in');

  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const skip = useCallback(() => {
    setPhase('done');
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (prefersReducedMotion) {
      skip();
      return;
    }

    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setPhase('hold'), 400));
    timers.push(setTimeout(() => setPhase('out'), 1800));
    timers.push(setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2000));

    return () => timers.forEach(clearTimeout);
  }, [onComplete, prefersReducedMotion, skip]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') skip();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [skip]);

  if (phase === 'done') return null;

  const animClass = phase === 'in' ? 'animate-intro-in' : phase === 'hold' ? 'animate-intro-pulse' : 'animate-intro-out';

  return (
    <div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center cursor-pointer select-none"
      onClick={skip}
      role="status"
      aria-live="polite"
      aria-label="Portfolio "
    >
      <h1 className={`text-foreground text-lg md:text-2xl font-mono tracking-[0.3em] uppercase ${animClass}`}>
        {'Khrisna ari dwi payana'.toUpperCase()}
      </h1>
    </div>
  );
};
