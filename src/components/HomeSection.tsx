import React, { useState } from 'react';
import { RailwayStation, Train as TrainType } from '../types/railway.ts';
import { ArrowRight, Search, MapPin, Calendar, ExternalLink } from 'lucide-react';

interface HomeSectionProps {
  stations: RailwayStation[];
  trains: TrainType[];
  setActiveTab: (tab: string) => void;
  onSelectStation: (station: RailwayStation) => void;
  onSelectTrain: (train: TrainType) => void;
  onDirectTrainSearch: (from: string, to: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  stations,
  trains,
  setActiveTab,
  onSelectStation,
  onSelectTrain,
  onDirectTrainSearch
}) => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [journeyDate, setJourneyDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [searchResults, setSearchResults] = useState<TrainType[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // 5 key stations
  const keyStationCodes = ['SC', 'HYB', 'KCG', 'WL', 'KZJ'];
  const importantStations = stations.filter(s => keyStationCodes.includes(s.code));

  const handleTrainSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    const fromTerm = fromStation.trim().toLowerCase();
    const toTerm = toStation.trim().toLowerCase();

    const matches = trains.filter(t => {
      const matchFrom = !fromTerm || 
        t.startingStation.toLowerCase().includes(fromTerm) || 
        t.startingStationCode.toLowerCase().includes(fromTerm) ||
        t.majorHalts.some(h => h.toLowerCase().includes(fromTerm));

      const matchTo = !toTerm || 
        t.destination.toLowerCase().includes(toTerm) || 
        t.destinationCode.toLowerCase().includes(toTerm) ||
        t.majorHalts.some(h => h.toLowerCase().includes(toTerm));

      return matchFrom && matchTo;
    });

    setSearchResults(matches);
  };

  const handleClearSearch = () => {
    setFromStation('');
    setToStation('');
    setSearchResults(null);
    setHasSearched(false);
  };

  return (
    <div className="space-y-4">
      {/* 1. Telangana Railway Information (Hero Section matching image.png) */}
      <section className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h2 className="text-xl font-bold text-[#991b1b] mb-2">
          Telangana Railway Information
        </h2>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Find information about railway stations, train routes, passenger services and facilities available across Telangana.
        </p>
        <div>
          <button
            onClick={() => setActiveTab('stations')}
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-4 py-2 rounded text-xs font-bold transition cursor-pointer"
          >
            Explore Railway Stations
          </button>
        </div>
      </section>

      {/* 2. Railway Network in Telangana (Matching image.png) */}
      <section className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#991b1b] mb-2">
          Railway Network in Telangana
        </h3>
        <p className="text-xs text-gray-700 leading-relaxed">
          Telangana has an important railway network connecting Hyderabad and Secunderabad with major cities and railway junctions in Telangana and other parts of India. Important railway locations include Secunderabad, Hyderabad Deccan, Kacheguda, Kazipet, Warangal, Khammam, Ramagundam, Manchiryal and Nizamabad.
        </p>
      </section>

      {/* 3. Popular Railway Information (4 Cards matching image.png) */}
      <section className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#991b1b] mb-4">
          Popular Railway Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded p-4 flex flex-col justify-between hover:border-gray-400 transition bg-white">
            <div>
              <h4 className="text-xs font-bold text-[#991b1b] mb-1.5">
                Railway Stations
              </h4>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Find information about major railway stations and important railway locations in Telangana.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('stations')}
              className="text-xs font-bold text-[#991b1b] hover:underline text-left"
            >
              View Stations
            </button>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded p-4 flex flex-col justify-between hover:border-gray-400 transition bg-white">
            <div>
              <h4 className="text-xs font-bold text-[#991b1b] mb-1.5">
                Train Routes
              </h4>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Learn about important railway routes connecting Hyderabad, Secunderabad, Kazipet and other locations.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('trains')}
              className="text-xs font-bold text-[#991b1b] hover:underline text-left"
            >
              View Train Routes
            </button>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded p-4 flex flex-col justify-between hover:border-gray-400 transition bg-white">
            <div>
              <h4 className="text-xs font-bold text-[#991b1b] mb-1.5">
                Passenger Services
              </h4>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Information about PNR enquiry, train schedule, seat availability and fare enquiry.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('services')}
              className="text-xs font-bold text-[#991b1b] hover:underline text-left"
            >
              View Services
            </button>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200 rounded p-4 flex flex-col justify-between hover:border-gray-400 transition bg-white">
            <div>
              <h4 className="text-xs font-bold text-[#991b1b] mb-1.5">
                Station Facilities
              </h4>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Learn about waiting halls, drinking water, toilets, parking, lifts and other facilities.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('services')}
              className="text-xs font-bold text-[#991b1b] hover:underline text-left"
            >
              View Facilities
            </button>
          </div>
        </div>
      </section>

      {/* 4. Important Railway Routes (Matching image.png with route arrows) */}
      <section className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#991b1b] mb-4">
          Important Railway Routes
        </h3>
        <div className="space-y-3">
          {/* Route 1 */}
          <div className="border border-gray-200 rounded p-4 bg-gray-50 flex flex-col sm:flex-row items-center justify-between text-center gap-4">
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Hyderabad / Secunderabad
              </h4>
              <p className="text-[11px] text-gray-600">Major railway centres of Telangana.</p>
            </div>
            <span className="text-[#991b1b] font-bold text-lg hidden sm:inline">→</span>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Kazipet
              </h4>
              <p className="text-[11px] text-gray-600">Important railway junction.</p>
            </div>
            <span className="text-[#991b1b] font-bold text-lg hidden sm:inline">→</span>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Balharshah
              </h4>
              <p className="text-[11px] text-gray-600">Important route towards Maharashtra.</p>
            </div>
          </div>

          {/* Route 2 */}
          <div className="border border-gray-200 rounded p-4 bg-gray-50 flex flex-col sm:flex-row items-center justify-between text-center gap-4">
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Hyderabad
              </h4>
              <p className="text-[11px] text-gray-600">Railway connection towards Vikarabad.</p>
            </div>
            <span className="text-[#991b1b] font-bold text-lg hidden sm:inline">→</span>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Vikarabad
              </h4>
              <p className="text-[11px] text-gray-600">Important railway station.</p>
            </div>
            <span className="text-[#991b1b] font-bold text-lg hidden sm:inline">→</span>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Wadi
              </h4>
              <p className="text-[11px] text-gray-600">Important railway route.</p>
            </div>
          </div>

          {/* Route 3 */}
          <div className="border border-gray-200 rounded p-4 bg-gray-50 flex flex-col sm:flex-row items-center justify-between text-center gap-4">
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Secunderabad
              </h4>
              <p className="text-[11px] text-gray-600">State capital railway terminal.</p>
            </div>
            <span className="text-[#991b1b] font-bold text-lg hidden sm:inline">→</span>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Warangal & Khammam
              </h4>
              <p className="text-[11px] text-gray-600">Key Eastern Telangana transit corridor.</p>
            </div>
            <span className="text-[#991b1b] font-bold text-lg hidden sm:inline">→</span>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-[#991b1b]">
                Vijayawada
              </h4>
              <p className="text-[11px] text-gray-600">Trunk route towards Coastal Andhra & Chennai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Railway Enquiry (Buttons matching image.png) */}
      <section className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#991b1b] mb-2">
          Railway Enquiry
        </h3>
        <p className="text-xs text-gray-700 mb-4 leading-relaxed">
          Indian Railways provides online enquiry facilities for train schedules, trains between stations, PNR status, seat availability and fare information.
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3.5 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1"
          >
            <span>PNR Status</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.irctc.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3.5 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1"
          >
            <span>Seat Availability</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://enquiry.indianrail.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3.5 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1"
          >
            <span>Fare Enquiry</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setActiveTab('trains')}
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3.5 py-1.5 rounded text-xs font-semibold"
          >
            Trains Between Stations
          </button>
        </div>
      </section>

      {/* 6. Train Search Form (Functional, simple styled) */}
      <section className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#991b1b] mb-2">
          Search Demonstration Trains
        </h3>
        <p className="text-xs text-gray-600 mb-4">
          Search sample train schedules between stations in Telangana.
        </p>

        <form onSubmit={handleTrainSearchSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label htmlFor="fromStation" className="block text-xs font-bold text-gray-700 mb-1">
                From Station:
              </label>
              <input
                id="fromStation"
                type="text"
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
                placeholder="e.g. Secunderabad, Kazipet"
                className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
              />
            </div>

            <div>
              <label htmlFor="toStation" className="block text-xs font-bold text-gray-700 mb-1">
                To Station:
              </label>
              <input
                id="toStation"
                type="text"
                value={toStation}
                onChange={(e) => setToStation(e.target.value)}
                placeholder="e.g. Tirupati, Vijayawada"
                className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
              />
            </div>

            <div>
              <label htmlFor="journeyDate" className="block text-xs font-bold text-gray-700 mb-1">
                Journey Date:
              </label>
              <input
                id="journeyDate"
                type="date"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-4 py-1.5 rounded text-xs font-bold transition cursor-pointer"
            >
              Search Trains
            </button>
            {hasSearched && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1.5 rounded text-xs font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </form>

        {/* Search Results Preview */}
        {hasSearched && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-800">
                Found {searchResults?.length || 0} sample trains
              </span>
              <button
                onClick={() => {
                  onDirectTrainSearch(fromStation, toStation);
                  setActiveTab('trains');
                }}
                className="text-xs text-[#991b1b] font-bold hover:underline"
              >
                View full train information table →
              </button>
            </div>

            {searchResults && searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {searchResults.slice(0, 4).map((t) => (
                  <div
                    key={t.trainNumber}
                    onClick={() => onSelectTrain(t)}
                    className="p-3 border border-gray-300 rounded hover:border-[#991b1b] cursor-pointer bg-gray-50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#991b1b]">#{t.trainNumber}</span>
                      <span className="text-[10px] text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">{t.trainStatus}</span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 mt-1">{t.trainName}</div>
                    <div className="text-[11px] text-gray-600 mt-1">
                      {t.startingStation} ({t.departureTime}) → {t.destination} ({t.arrivalTime})
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">No matching trains found. Try searching for "Secunderabad" or "Kazipet".</p>
            )}
          </div>
        )}
      </section>

      {/* 7. Important Railway Stations in Telangana (Simple Card Grid) */}
      <section className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-[#991b1b]">
            Important Railway Stations in Telangana
          </h3>
          <button
            onClick={() => setActiveTab('stations')}
            className="text-xs font-bold text-[#991b1b] hover:underline"
          >
            View All Stations ({stations.length}) →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {importantStations.map((station) => (
            <div
              key={station.code}
              onClick={() => onSelectStation(station)}
              className="border border-gray-200 rounded p-4 hover:border-gray-400 cursor-pointer bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#991b1b]">
                    Code: {station.code}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    {station.platforms} Platforms
                  </span>
                </div>
                <h4 className="text-xs font-bold text-gray-900">
                  {station.name}
                </h4>
                <p className="text-[11px] text-gray-600 mt-0.5">
                  {station.cityDistrict}
                </p>
                <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                  {station.stationInfo}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <span className="text-gray-500">Inquiry: {station.inquiryNumber || '139'}</span>
                <span className="text-[#991b1b] font-bold">Details →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
