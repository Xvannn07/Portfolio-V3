import { education } from '@/data/education';
import { SectionWrapper } from './SectionWrapper';

export const EducationSection = () => (
  <SectionWrapper title="Education" subtitle="My academic journey.">
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-12">
        {education.map((edu, i) => (
          <div key={i} className="relative pl-12 md:pl-16">
            {/* Dot */}
            <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-foreground border-2 border-background" />

            <div className="surface-card rounded-lg p-6">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{edu.period}</span>
              <h3 className="text-lg font-bold text-foreground mt-1">{edu.school}</h3>
              <p className="text-sm text-muted-foreground mt-1">{edu.degree}</p>
              <p className="text-sm text-foreground/70 mt-3">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);
