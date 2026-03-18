import { portfolioData } from '@/data/portfolio';
import { Globe } from 'lucide-react';

export const LocationBadge = () => (
  <div className="absolute top-32 left-6 md:left-12 z-30 flex items-center gap-3 px-4 py-3 rounded-2xl surface-glass">
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-medium tracking-wide text-foreground">
        Located in
      </span>
      <span className="text-xs font-medium tracking-wide text-foreground">
        {"Singaraja, Bali".split(', ')[0]},
      </span>
      <span className="text-xs font-medium tracking-wide text-foreground">
        {"Singaraja, Bali".split(', ')[1]}.
      </span>
    </div>
    <div className="p-2 rounded-full bg-accent">
      <Globe size={24} className="text-muted-foreground" />
    </div>
  </div>
);
