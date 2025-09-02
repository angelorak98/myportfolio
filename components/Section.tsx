
import React, { useEffect, useState } from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-12 md:py-16 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 relative inline-block">
        {title}
        <span className="absolute bottom-[-8px] left-0 w-1/2 h-1 bg-teal-500 rounded-full"></span>
      </h2>
      {children}
    </section>
  );
};
