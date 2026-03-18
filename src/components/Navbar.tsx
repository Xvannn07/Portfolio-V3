import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Certificates', hash: '#certificates' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Contact', hash: '#contact' },
];

interface NavbarProps {
  isMobile?: boolean;
  onNavClick?: () => void;
}

export const Navbar = ({ isMobile = false, onNavClick }: NavbarProps) => {
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || '#home');
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

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

    if (onNavClick) onNavClick();
  };

  return (
    <nav className={`${isMobile ? 'space-y-2' : 'flex items-center gap-3'}`}>
      {navLinks.map((link) => (
        <button
          key={link.hash}
          type="button"
          onClick={() => handleClick(link.hash)}
          className={`transition-colors duration-200 font-medium ${
            isMobile
              ? `w-full text-left rounded-lg px-3 py-2 ${
                  activeHash === link.hash
                    ? 'bg-foreground text-background'
                    : 'bg-surface hover:bg-accent/20 text-foreground'
                }`
              : `text-xs uppercase tracking-[0.25em] px-3 py-1 rounded-full border border-transparent ${
                  activeHash === link.hash
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                }`
          }`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
};

export { navLinks };