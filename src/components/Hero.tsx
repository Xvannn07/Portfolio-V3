import { useLighting } from '@/contexts/LightingContext';
import { useFlicker } from '@/hooks/useFlicker';
import { LocationBadge } from './LocationBadge';

export const Hero = () => {
  const { lightingEnabled } = useLighting();
  const isFlickering = useFlicker(lightingEnabled);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <LocationBadge />

      <div className={`transition-all duration-75 ${isFlickering ? 'flicker-active' : 'opacity-100'}`}>
        <div className="flex flex-col items-center text-center select-none">
          {/* First name */}
          <h1 className="text-hero text-foreground/10 z-0">Khrisna</h1>

          {/* Middle name with avatar overlap */}
          <div className="relative z-10 flex items-center justify-center -my-[3vw]">
            <span className="text-hero text-foreground/10 absolute">Ari Dwi</span>
            <div className="relative group">
              <div className="absolute inset-0 bg-foreground/5 rounded-[2rem] blur-3xl group-hover:bg-foreground/10 transition-colors duration-500" />
              <img
                src="/images/avatar-p.jpeg"
                alt='avatar'
                className="relative z-10 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover grayscale rounded-[2rem] border-4 border-background"
                loading="eager"
              />
            </div>
          </div>

          {/* Last name */}
          <h1 className="text-hero text-foreground z-20">Khrisna Ari</h1>
        </div>
      </div>

      {/* Scrolling role marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-6 border-t border-border/30">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-foreground/5 mx-8">
              Web Developer - Network Engineer
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
