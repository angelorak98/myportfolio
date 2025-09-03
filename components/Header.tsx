import React from 'react';

const DownloadIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center gap-8 mb-12 animate-fade-in-up">
      <img
        src="/profil.png"
        alt="Photo de profil de Angelo RAKOTONIRINA"
        className="rounded-full w-32 h-32 md:w-40 md:h-40 border-4 border-slate-700 object-cover shadow-lg"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Angelo RAKOTONIRINA</h1>
        <p className="text-xl md:text-2xl text-teal-400 font-medium mt-2">Développeur Python | Web Scraping | Analyse de Données</p>
        <p className="mt-4 text-slate-400 max-w-2xl">
          Bienvenue sur mon portfolio ! Passionné par Python, je me spécialise dans le web scraping avancé, l'analyse de données et l'automatisation. J'aime transformer des données brutes en informations utiles et construire des solutions efficaces, notamment via des missions en freelance. Mon expérience inclut l'aide à la gestion et la mise en place de bases de données, ainsi que l'optimisation du fonctionnement de sites e-commerce. Explorez mes projets pour voir mes réalisations.
        </p>
        <a 
          href="/cv-angelo-rakotonirina.pdf" // Assurez-vous de placer votre CV à la racine du projet
          download
          className="mt-6 inline-flex items-center gap-3 bg-teal-500 text-slate-900 font-bold py-3 px-6 rounded-full hover:bg-teal-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <DownloadIcon className="w-5 h-5" />
          Télécharger mon CV
        </a>
      </div>
    </header>
  );
};