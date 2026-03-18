import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolio';

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Footer />
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Khrisna Ari Dwi Payana',
            jobTitle: 'Full Stack Developer',
            address: { '@type': 'PostalAddress', addressLocality: 'Singaraja, Bali' },
            url: window.location.origin,
            sameAs: [portfolioData.socials.github, portfolioData.socials.linkedin],
          }),
        }}
      />
    </>
  );
};

export default Index;
