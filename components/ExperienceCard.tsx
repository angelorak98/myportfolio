
import React from 'react';
import type { Experience, Formation } from '../types';

interface ExperienceCardProps {
  item: Experience | Formation;
}

const isExperience = (item: Experience | Formation): item is Experience => {
    return 'role' in item;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  const title = isExperience(item) ? item.role : item.degree;
  const subtitle = isExperience(item) ? item.company : item.school;
  const date = isExperience(item) ? item.period : item.year;
  const description = isExperience(item) ? item.description : item.specialization;
  
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 group-hover:border-teal-500 text-slate-500 group-hover:text-teal-500 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/50 p-4 rounded-lg border border-slate-700 transition-all duration-300 group-hover:border-teal-500 group-hover:bg-slate-800 group-hover:shadow-xl group-hover:scale-105">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <h4 className="font-bold text-slate-100">{title}</h4>
                <time className="font-mono text-xs text-teal-400">{date}</time>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-2">{subtitle}</p>
            <p className="text-sm text-slate-500">{description}</p>
        </div>
    </div>
  );
};
