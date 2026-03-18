import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export const Footer = () => (
  <footer className="border-t border-border py-12 px-6 md:px-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Xvannn07. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label="Instagram">
          <Instagram size={18} />
        </a>
        <a href={`mailto:${portfolioData.socials.email}`} className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);
