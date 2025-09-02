
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-slate-800 text-teal-400 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-teal-400 hover:text-slate-900 cursor-pointer shadow-md">
      {skill}
    </span>
  );
};
