import React, { useState } from 'react';
import { Train, Menu, X, ExternalLink } from 'lucide-react';
import { BackendStatus } from '../types/railway.ts';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  backendStatus: BackendStatus | null;
  backendLoading: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  backendStatus,
  backendLoading
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'stations', label: 'Railway Stations' },
    { id: 'trains', label: 'Train Information' },
    { id: 'services', label: 'Railway Services' },
    { id: 'emergency', label: 'Emergency Information' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Header with Simple Logo and Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          {/* Simple Train Logo Icon */}
          <div className="w-10 h-10 rounded border border-red-800 bg-red-50 flex items-center justify-center text-[#991b1b]">
            <Train className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#991b1b] leading-tight tracking-tight">
              Telangana Railway
            </h1>
            <p className="text-xs text-gray-600 font-medium">
              Railway Information Portal
            </p>
          </div>
        </div>

        {/* Right side simple utility info */}
        <div className="flex items-center gap-4 text-xs">
          <div className="hidden sm:flex text-gray-600 items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${backendLoading ? 'bg-amber-500 animate-pulse' : (backendStatus ? 'bg-green-600' : 'bg-gray-400')}`}></span>
            <span>{backendLoading ? 'API Connecting...' : (backendStatus ? 'API Online' : 'Local Data Mode')}</span>
          </div>

          <button
            onClick={() => handleNavClick('emergency')}
            className="text-[#991b1b] font-bold hover:underline"
          >
            Helpline: 139
          </button>

          {/* Mobile menu hamburger */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-black rounded border border-gray-300"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Red Horizontal Navigation Bar (Exactly matching image.png style) */}
      <nav className="bg-[#991b1b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="hidden md:flex items-center space-x-1 py-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded transition cursor-pointer ${
                    isActive
                      ? 'bg-[#7f1d1d] text-white font-bold underline underline-offset-4'
                      : 'text-white hover:bg-[#7f1d1d]/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="ml-auto flex items-center gap-2 py-1">
              <a
                href="https://www.irctc.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-white text-[#991b1b] text-xs font-bold rounded hover:bg-gray-100 transition"
              >
                <span>IRCTC Official</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-red-900 px-3 py-2 space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold rounded transition ${
                    isActive ? 'bg-[#7f1d1d] text-white font-bold' : 'text-white hover:bg-[#7f1d1d]/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-red-900/60">
              <a
                href="https://www.irctc.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-3 py-1.5 bg-white text-[#991b1b] text-xs font-bold rounded"
              >
                IRCTC Official e-Ticketing ↗
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
