
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 hover:bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
      <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-slate-700 text-slate-300 text-xs font-mono px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="text-teal-400 font-semibold mt-auto group flex items-center"
      >
        Voir le projet
        <span className="transform transition-transform duration-300 group-hover:translate-x-2 ml-1">→</span>
      </a>
    </div>
  );
};
