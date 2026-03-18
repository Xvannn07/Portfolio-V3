import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { SectionWrapper } from './SectionWrapper';
import { ExternalLink, Github } from 'lucide-react';

const truncateWords = (text: string, maxWords = 100) => {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
};

export const ProjectsSection = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const previewProjects = projects.slice(0, 4);

  return (
    <SectionWrapper title="Projects" subtitle="Selected work and side projects.">
      <div className="grid sm:grid-cols-2 gap-6">
        {previewProjects.map(project => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            className="text-left surface-card rounded-lg p-2 md:p-3 hover:surface-card-hover transition-all group btn-press"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80'}
                alt={project.title}
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{project.category}</span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2 group-hover:italic transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-3">
                {truncateWords(project.description, 25)}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-accent text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
          <div className="relative z-10 w-full max-w-lg surface-card rounded-xl p-4 border border-fg/20">
            <div className="flex justify-between items-start gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Detail Proyek</p>
                <h3 className="text-2xl font-black text-foreground mt-1">{selected.title}</h3>
                <p className="text-xs text-muted-foreground">{selected.category}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full p-2 bg-muted-foreground/10 hover:bg-muted-foreground/20 transition"
                aria-label="Close detail"
              >
                ✕
              </button>
            </div>
            <div className="overflow-hidden rounded-xl mt-4 h-44">
              <img src={selected.image} alt={`${selected.title} preview`} className="w-full h-full object-cover" />
            </div>
            <p className="text-foreground/85 leading-relaxed mt-4">{selected.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {selected.tech.map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-md bg-accent text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              )}
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-foreground text-sm font-semibold hover:bg-accent/90"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {projects.length > 4 && (
        <div className="mt-5 flex justify-end">
          <Link
            to="/projects"
            className="rounded-md bg-foreground text-background px-3 py-2 text-xs font-semibold hover:opacity-90 transition"
          >
            Lihat lainnya
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
};
