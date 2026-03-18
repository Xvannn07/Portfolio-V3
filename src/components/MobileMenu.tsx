import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const navLinks = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Certificates', hash: '#certificates' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Contact', hash: '#contact' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [activeHash, setActiveHash] = useState('#home');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || '#home');
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClick = (hash: string) => {
    const sectionId = hash.replace('#', '');
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', hash);
      setActiveHash(hash);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveHash('#home');
    }

    onClose();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        ref={menuRef}
        className={cn(
          'fixed right-0 top-0 z-50 h-screen w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-border overflow-y-auto transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-border/30 bg-background/90">
          <h2 className="font-semibold text-foreground">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-accent transition"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.hash}
              onClick={() => handleClick(link.hash)}
              className={cn(
                'w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 font-medium text-sm',
                activeHash === link.hash
                  ? 'bg-foreground text-background'
                  : 'text-foreground hover:bg-accent/30'
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="mt-6 border-t border-border/30 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Social
          </p>
          <div className="flex flex-col gap-2">
            <a 
              href="https://github.com" 
              className="text-sm text-foreground hover:text-accent transition"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-sm text-foreground hover:text-accent transition"
            >
              LinkedIn
            </a>
            <a 
              href="https://instagram.com" 
              className="text-sm text-foreground hover:text-accent transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { navLinks as mobileNavLinks };
