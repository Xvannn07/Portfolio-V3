import { useState } from 'react';
import { useLighting } from '@/contexts/LightingContext';
import { Menu, Lightbulb, LightbulbOff, Code2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const { lightingEnabled, setLightingEnabled } = useLighting();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-40 backdrop-blur-xl bg-background/90 border-b border-border/30">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-md border border-border p-1 text-foreground">
              <Code2 size={18} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Xvannn07</div>
              <div className="font-black text-sm text-foreground">Portfolio</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Navbar />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full border border-border hover:bg-accent transition"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
