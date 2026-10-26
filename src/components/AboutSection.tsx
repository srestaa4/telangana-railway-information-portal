import React from 'react';

interface AboutSectionProps {
  setActiveTab: (tab: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-4">
      {/* Title Card */}
      <div className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h2 className="text-xl font-bold text-[#991b1b] mb-2">
          About Telangana Railway Information Portal
        </h2>
        <p className="text-xs text-gray-700 leading-relaxed">
          The Telangana Railway Information Portal is an educational digital guide created to help passengers, commuters, and students find railway station details, train route schedules, passenger amenities, and 24/7 emergency contacts in Telangana.
        </p>
      </div>

      {/* Main Mission & SCR Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-300 rounded p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#991b1b] mb-2">
            Purpose of the Portal
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            This portal was built as a clean, simple web development project demonstrating core engineering concepts like HTML forms, CSS layouts, TypeScript interfaces, Fetch API requests, and Express REST endpoints.
          </p>
          <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-700">
            <li>Search station codes (SC, HYB, KCG, WL, KZJ, etc.).</li>
            <li>Explore passenger facilities such as waiting halls, drinking water, and wheelchair support.</li>
            <li>Quick access to 139 railway helpline and 112 national emergency numbers.</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-300 rounded p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#991b1b] mb-2">
            South Central Railway (SCR) in Telangana
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Telangana’s rail network is primarily operated by the South Central Railway zone with headquarters at Rail Nilayam, Secunderabad. Major railway divisions include Secunderabad and Hyderabad.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Major trunk routes connect North and South India via Kazipet and Balharshah, and East-West corridors via Secunderabad, Warangal, and Vijayawada.
          </p>
        </div>
      </div>

      {/* Passenger Information */}
      <div className="bg-white border border-gray-300 rounded p-5 shadow-xs">
        <h3 className="text-sm font-bold text-[#991b1b] mb-3">
          Passenger Support Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="border border-gray-200 rounded p-3 bg-gray-50">
            <h4 className="font-bold text-gray-900 mb-1">For Commuters</h4>
            <p className="text-gray-600">Review key junction connections, platform facilities, and suburban transit schedules.</p>
          </div>
          <div className="border border-gray-200 rounded p-3 bg-gray-50">
            <h4 className="font-bold text-gray-900 mb-1">For Senior Citizens</h4>
            <p className="text-gray-600">Information on wheelchairs, battery-operated cars, and ramp access at stations.</p>
          </div>
          <div className="border border-gray-200 rounded p-3 bg-gray-50">
            <h4 className="font-bold text-gray-900 mb-1">For Long Distance</h4>
            <p className="text-gray-600">Waiting rooms, cloaking facilities, drinking water booths, and Swachh Bharat toilets.</p>
          </div>
        </div>
      </div>

      {/* Quick Navigation Card */}
      <div className="bg-white border border-gray-300 rounded p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="text-xs font-bold text-gray-900">
            Explore Station Directory & Train Schedules
          </h4>
          <p className="text-xs text-gray-600">
            Look up station platforms, facilities, and search trains across Telangana.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('stations')}
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3 py-1.5 rounded text-xs font-semibold"
          >
            Explore Stations
          </button>
          <button
            onClick={() => setActiveTab('trains')}
            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 px-3 py-1.5 rounded text-xs font-semibold"
          >
            View Trains
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded p-4 text-xs text-amber-950">
        <strong>Official Railway Notice:</strong> This website is an educational demonstration project. It is not an official portal of Indian Railways. For official ticketing, PNR status, and live train tracking, visit{' '}
        <a href="https://www.irctc.co.in" target="_blank" rel="noreferrer" className="underline font-bold text-[#991b1b]">
          irctc.co.in
        </a>{' '}
        or{' '}
        <a href="https://enquiry.indianrail.gov.in" target="_blank" rel="noreferrer" className="underline font-bold text-[#991b1b]">
          enquiry.indianrail.gov.in
        </a>.
      </div>
    </div>
  );
};
