import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Intro } from '@/components/Intro';

export default function Page() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
      <Header />
      <section id="home" className="pt-24">
        <Hero />
      </section>
      <section id="about" className="pt-10"><AboutSection /></section>
      <section id="skills" className="pt-10"><SkillsSection /></section>
      <section id="projects" className="pt-10"><ProjectsSection /></section>
      <section id="education" className="pt-10"><EducationSection /></section>
      <section id="certificates" className="pt-10"><CertificatesSection /></section>
      <section id="experience" className="pt-10"><ExperienceSection /></section>
      <section id="contact" className="pt-10"><ContactSection /></section>
      <Footer />
    </main>
  );
}
