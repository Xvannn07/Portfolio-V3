import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionWrapper } from '@/components/SectionWrapper';
import { projects } from '@/data/projects';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <SectionWrapper title="Projects" subtitle="Semua proyek dengan preview gambar dan detail.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {displayedProjects.map((project) => (
              <div key={project.id} className="surface-card rounded-xl border border-border overflow-hidden">
                <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{project.category}</div>
                  <h3 className="text-xl font-bold text-foreground mt-1">{project.title}</h3>
                  <p className="text-muted-foreground mt-2 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span key={`${project.id}-${tech}`} className="text-[11px] px-2 py-1 rounded-md bg-accent text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
                        <ExternalLink size={12} /> Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
                        <Github size={12} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length > 4 && (
            <div className="mt-5 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
              >
                {showAll ? 'Lihat lebih sedikit' : 'Lihat lainnya'}
              </button>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <Link to="/" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90 transition">Back to Main</Link>
            <Link to="/certificates" className="rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-muted transition">Go to Certificates</Link>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
