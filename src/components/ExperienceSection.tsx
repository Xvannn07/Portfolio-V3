import { portfolioData } from '@/data/portfolio';
import { SectionWrapper } from './SectionWrapper';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export const ExperienceSection = () => {
  const { experiences } = portfolioData;

  return (
    <SectionWrapper title="Experience" subtitle="Pengalaman kerja dan tanggung jawab utama.">
      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-8 top-2 bottom-2 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent/10" aria-hidden />

        {experiences.map((job, idx) => (
          <article
            key={`${job.company}-${job.role}`}
            className="group relative ml-24 rounded-xl border border-border surface-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-12 top-8 flex h-6 w-6 items-center justify-center">
              <span className="absolute h-full w-full rounded-full bg-accent/20 animate-pulse" />
              <span className="absolute h-full w-full rounded-full border-2 border-accent bg-background" />
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Company Logo */}
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10" />
                <img
                  src={job.companyLogo}
                  alt={`${job.company} logo`}
                  className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="flex flex-wrap items-center gap-2">
                    <span className="text-lg text-white/75">{job.role}</span>
                    <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
                    <span className="text-foreground font-bold">{job.company}</span>
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-foreground/85 leading-relaxed">{job.desc}</p>

                {job.skills && (
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-md bg-accent text-foreground font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
