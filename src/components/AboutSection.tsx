import { portfolioData } from '@/data/portfolio';
import { SectionWrapper } from './SectionWrapper';

export const AboutSection = () => (
  <SectionWrapper title="About" subtitle="Who I am and what I do.">
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="space-y-5">
        <p className="text-foreground/90 text-lg leading-relaxed block">
          Halo, saya Made Khrisna Ari Dwi Payana. Saya pelajar di SMKN 3 Singaraja, jurusan Teknik Jaringan dan Komputer Telekomunikasi (TJKT), dan tinggal di Buleleng, Bali.
        </p>
        <p className="text-foreground/90 text-lg leading-relaxed block">
          Saya memiliki hobi bermain bulu tangkis dengan mengikuti ekstrarikurer bola tangkis di sekolah saya untuk meningkatkan skill bermain saya. Saya sangat menyukai dunia teknologi, terutama pemrograman dan jaringan. Selama lebih dari tiga tahun saya aktif di bidang pemrograman dan pengembangan web, serta memiliki sekitar satu tahun pengalaman di bidang jaringan. Fokus saya adalah membuat aplikasi yang bermanfaat, khususnya yang memadukan konsep jaringan dan pemrograman.
        </p>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="rounded-xl p-3 surface-glass border border-fg/10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Experience</p>
            <p className="font-semibold mt-1 text-foreground">2+ years</p>
          </div>
          <div className="rounded-xl p-3 surface-glass border border-fg/10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Focus</p>
            <p className="font-semibold mt-1 text-foreground">Network Engineering</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {Object.entries(portfolioData.socials).map(([key, url]) => (
            <a
              key={key}
              href={key === 'email' ? `mailto:${url}` : url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide surface-glass border border-fg/10 hover:bg-accent transition"
            >
              {key}
            </a>
          ))}
        </div>
      </div>

      <div className="surface-card rounded-2xl p-5 border border-fg/10 bg-gradient-to-br from-slate-950/20 via-slate-900/20 to-slate-950/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/20 shadow-xl">
            <img src="/images/pas-foto.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Personal Brand</p>
            <p className="text-lg font-semibold text-foreground">khrisna ari dwi payana</p>
          </div>
        </div>

        <dl className="space-y-3 text-sm">
          <div className="rounded-xl border border-fg/10 p-3 bg-slate-800/30">
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Role</dt>
            <dd className="mt-1 font-medium text-foreground">Network Engineer - Web Development</dd>
          </div>
          <div className="rounded-xl border border-fg/10 p-3 bg-slate-800/30">
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Location</dt>
            <dd className="mt-1 font-medium text-foreground">Singaraja, Bali</dd>
          </div>
          <div className="rounded-xl border border-fg/10 p-3 bg-slate-800/30">
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Best Stack</dt>
            <dd className="mt-1 font-medium text-foreground">Nodejs & Mikrotik</dd>
          </div>
        </dl>
      </div>
    </div>
  </SectionWrapper>
);
