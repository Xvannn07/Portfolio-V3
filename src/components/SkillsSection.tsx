import { useEffect, useMemo, useRef, useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { SectionWrapper } from './SectionWrapper';

const AnimatedCount = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(nodeRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let rafId: number;
    const start = performance.now();
    const duration = 1000;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) rafId = requestAnimationFrame(animate);
      else setCount(target);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, target]);

  return (
    <span ref={nodeRef} className="font-semibold text-foreground">
      {count}%
    </span>
  );
};

export const SkillsSection = () => {
  const categories = useMemo(() => [...new Set(portfolioData.skills.map(s => s.category))], []);

  return (
    <SectionWrapper title="Skills" subtitle="Technologies and tools I work with.">
      <div className="space-y-12">
        {categories.map(cat => (
          <div key={cat}>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">{cat}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.skills
                .filter(s => s.category === cat)
                .map(skill => (
                  <div
                    key={skill.name}
                    className="surface-card rounded-lg p-5 hover:surface-card-hover transition-all duration-300 motion-safe:transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <AnimatedCount target={skill.level} />
                    </div>
                    <div className="w-full h-2 bg-slate-700/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-sky-500 rounded-full transition-all duration-1200 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
