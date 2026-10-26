import React from 'react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="mt-12">
      {/* Simple Red Bar Footer exactly as shown in image.png */}
      <div className="bg-[#991b1b] text-white py-6 px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-1.5">
          <p className="text-sm sm:text-base font-bold tracking-wide">
            Telangana Railway Information Portal
          </p>
          <p className="text-xs text-red-100">
            Railway information for passengers and travellers
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-red-200">
            <button onClick={() => setActiveTab('home')} className="hover:underline">Home</button>
            <span>•</span>
            <button onClick={() => setActiveTab('stations')} className="hover:underline">Stations</button>
            <span>•</span>
            <button onClick={() => setActiveTab('trains')} className="hover:underline">Trains</button>
            <span>•</span>
            <button onClick={() => setActiveTab('services')} className="hover:underline">Services</button>
            <span>•</span>
            <button onClick={() => setActiveTab('emergency')} className="hover:underline">Emergency (139)</button>
            <span>•</span>
            <button onClick={() => setActiveTab('contact')} className="hover:underline">Contact</button>
          </div>
          <p className="text-[11px] text-red-200/80 pt-2 max-w-2xl mx-auto">
            Demonstration website for educational purposes. For official booking and live train status, please visit irctc.co.in or enquiry.indianrail.gov.in.
          </p>
        </div>
      </div>
    </footer>
  );
};
