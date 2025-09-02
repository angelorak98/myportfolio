import React from 'react';

const PhoneIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const LocationIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export const Footer: React.FC = () => {
  const address = "Lot 22 D Ter Imerinafovoany, Antananarivo, Madagascar";
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  return (
    <footer className="text-center py-8 mt-16 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 mb-6">
        <a href="tel:+261386327975" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm">
            <PhoneIcon className="w-4 h-4" />
            <span>+261 38 63 279 75</span>
        </a>
        <a href={gmapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm">
            <LocationIcon className="w-4 h-4" />
            <span className="text-left">{address}</span>
        </a>
      </div>
      <p className="text-slate-500 text-sm">
        © 2025 Angelo RAKOTONIRINA - Portfolio Python
      </p>
    </footer>
  );
};