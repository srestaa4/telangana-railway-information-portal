import React, { useState } from 'react';
import { RAILWAY_SERVICES } from '../data/railwayData.ts';
import { ExternalLink } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Ticketing', 'Amenities', 'Accessibility', 'Assistance'];

  const filteredServices = RAILWAY_SERVICES.filter((svc) => {
    const matchesCategory = selectedCategory === 'All' || svc.category === selectedCategory;
    const matchesSearch =
      !searchTerm ||
      svc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      svc.guidelines.some((g) => g.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4">
      {/* Title Card */}
      <div className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h2 className="text-xl font-bold text-[#991b1b] mb-1">
          Passenger Services & Station Amenities
        </h2>
        <p className="text-xs text-gray-600">
          Essential facilities available across Telangana railway stations
        </p>
      </div>

      {/* Official Booking Highlight */}
      <div className="bg-white border border-gray-300 rounded p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold text-[#991b1b]">
            Official Indian Railways Ticket Booking & Live Enquiry
          </h3>
          <p className="text-xs text-gray-600">
            For real ticket booking, reservations, and PNR tracking, please visit official government websites.
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href="https://www.irctc.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1"
          >
            <span>IRCTC Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://enquiry.indianrail.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1"
          >
            <span>NTES Enquiry</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-gray-300 rounded p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-[#991b1b] text-white font-bold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search services (e.g. water, lounge)..."
            className="w-full px-2.5 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
          />
        </div>
      </div>

      {/* Services Grid (All 10 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredServices.map((svc) => (
          <div
            key={svc.id}
            className="bg-white border border-gray-300 rounded p-5 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-[#991b1b]">
                  {svc.title}
                </h3>
                <span className="text-[10px] text-gray-500 font-semibold uppercase bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                  {svc.category}
                </span>
              </div>

              <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                {svc.description}
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-3 text-xs">
                <span className="font-bold text-gray-800 block mb-1">
                  Guidelines & Features:
                </span>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                  {svc.guidelines.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>

              <p className="text-[11px] text-gray-600 mb-2">
                <strong>Location:</strong> {svc.locationNote}
              </p>
            </div>

            {svc.isOfficialLinkAvailable && svc.officialUrl && (
              <div className="pt-2 border-t border-gray-100">
                <a
                  href={svc.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#991b1b] hover:underline inline-flex items-center gap-1"
                >
                  <span>Official Railway Portal Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
