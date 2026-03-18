import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionWrapper } from '@/components/SectionWrapper';
import { certificates } from '@/data/sertificate';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <SectionWrapper title="Certificates" subtitle="Semua sertifikat dengan preview gambar.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {displayedCertificates.map((cert) => (
              <div key={cert.id} className="surface-card rounded-xl border border-border overflow-hidden">
                <img src={cert.imageUrl} alt={cert.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{cert.issuer} · {cert.date}</div>
                  <span className="ml-2 text-xs uppercase tracking-widest text-accent">{cert.category}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{cert.title}</h3>
                  <p className="text-foreground/85 leading-relaxed mt-4">
                    {cert.description}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <a href={cert.pdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
                      <FileText size={12} /> PDF
                    </a>
                    <a href={cert.imageUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
                      <ExternalLink size={12} /> View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {certificates.length > 4 && (
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
            <Link to="/projects" className="rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-muted transition">Go to Projects</Link>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Certificates;
