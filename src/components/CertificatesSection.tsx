import { useState } from 'react';
import { Link } from 'react-router-dom';
import { certificates } from '@/data/sertificate';
import { SectionWrapper } from './SectionWrapper';
import { Download, ExternalLink, FileText } from 'lucide-react';

const truncateWords = (text: string, maxWords = 100) => {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
};

export const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const previewCerts = certificates.slice(0, 4);

  return (
    <SectionWrapper title="Certificates" subtitle="Professional certifications and courses.">
      <div className="grid sm:grid-cols-2 gap-6">
        {previewCerts.map(cert => (
          <div key={cert.id} className="surface-card rounded-lg overflow-hidden border border-border">
            <div className="h-36 w-full overflow-hidden">
              <img
                src={cert.imageUrl || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'}
                alt={cert.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{cert.issuer} · {cert.date}</span>
              <span className="ml-2 text-xs uppercase tracking-widest text-accent">{cert.category}</span>
              <h3 className="text-lg font-bold text-foreground mt-2">{cert.title}</h3>
              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground bg-accent px-3 py-1 rounded-lg hover:bg-accent/90 transition"
                >
                  Lihat Detail
                </button>
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText size={12} /> PDF
                </a>
                <a
                  href={cert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={12} /> View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedCert(null)} />
          <div className="relative z-10 w-full max-w-lg surface-card rounded-xl p-4 border border-fg/20">
            <div className="flex justify-between items-start gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Certificate Detail</p>
                <h3 className="text-2xl font-black text-foreground mt-1">{selectedCert.title}</h3>
                <p className="text-xs text-muted-foreground">{selectedCert.issuer} · {selectedCert.date}</p>
                <span className="inline-block mt-2 text-xs uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">{selectedCert.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 bg-muted-foreground/10 hover:bg-muted-foreground/20 transition"
                aria-label="Close detail"
              >
                ✕
              </button>
            </div>
            <div className="overflow-hidden rounded-xl mt-4 h-44">
              <img src={selectedCert.imageUrl} alt={`${selectedCert.title} preview`} className="w-full h-full object-cover" />
            </div>
            <p className="text-foreground/85 leading-relaxed mt-4">
                {selectedCert.description}
            </p>
            <div className="mt-4 flex gap-2 justify-center">
              <a
                href={selectedCert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-foreground text-sm font-semibold hover:bg-accent/90"
              >
                <FileText size={16} /> View PDF
              </a>
              <a
                href={selectedCert.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90"
              >
                View Image <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {certificates.length > 4 && (
        <div className="mt-5 flex justify-end">
          <Link
            to="/certificates"
            className="rounded-md bg-foreground text-background px-3 py-2 text-xs font-semibold hover:opacity-90 transition"
          >
            Lihat lainnya
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
};
