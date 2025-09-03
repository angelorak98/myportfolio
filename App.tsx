
import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillBadge } from './components/SkillBadge';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { projects, experiences, formations, skills } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <main className="container mx-auto max-w-4xl px-6 py-8 md:py-12">
        <Header />
        <SocialLinks />

        <Section title="Compétences">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </Section>

        <Section title="Projets">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>

        <Section title="Expériences Professionnelles">
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} item={exp} />
            ))}
          </div>
        </Section>

        <Section title="Formations">
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {formations.map((formation, index) => (
              <ExperienceCard key={index} item={formation} />
            ))}
          </div>
        </Section>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;
