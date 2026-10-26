import React, { useState } from 'react';
import { RailwayStation } from '../types/railway.ts';
import { RotateCcw, Search } from 'lucide-react';

interface StationsSectionProps {
  stations: RailwayStation[];
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
  onSelectStation: (station: RailwayStation) => void;
  onFindTrains: (stationName: string) => void;
}

export const StationsSection: React.FC<StationsSectionProps> = ({
  stations,
  loading,
  error,
  onRefresh,
  onSelectStation,
  onFindTrains
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const filteredStations = stations.filter((station) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !term ||
      station.name.toLowerCase().includes(term) ||
      station.code.toLowerCase().includes(term) ||
      station.cityDistrict.toLowerCase().includes(term) ||
      station.facilities.some((f) => f.toLowerCase().includes(term));

    const matchesDistrict =
      selectedDistrict === 'all' ||
      station.cityDistrict.toLowerCase().includes(selectedDistrict.toLowerCase());

    return matchesSearch && matchesDistrict;
  });

  const districts = [
    { id: 'all', label: 'All Districts' },
    { id: 'Hyderabad', label: 'Hyderabad & Secunderabad' },
    { id: 'Warangal', label: 'Warangal / Hanamkonda' },
    { id: 'Nizamabad', label: 'Nizamabad' },
    { id: 'Khammam', label: 'Khammam' },
    { id: 'Peddapalli', label: 'Peddapalli (Ramagundam)' },
    { id: 'Mahbubnagar', label: 'Mahbubnagar' }
  ];

  return (
    <div className="space-y-4">
      {/* Title Card */}
      <div className="bg-white border border-gray-300 rounded p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-[#991b1b]">
            Railway Stations Directory
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Station codes, platforms, locations, and facilities across Telangana
          </p>
        </div>

        <button
          onClick={onRefresh}
          disabled={loading}
          className="self-start sm:self-auto bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#991b1b]' : ''}`} />
          <span>{loading ? 'Refreshing...' : 'Refresh API'}</span>
        </button>
      </div>

      {/* Sample Data Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-900">
        <strong>Demonstration Notice:</strong> Station details and sample facility information are provided for educational purposes. For official railway administrative matters, visit the South Central Railway portal (scr.indianrailways.gov.in).
      </div>

      {/* Filter Box */}
      <div className="bg-white border border-gray-300 rounded p-4 shadow-xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold text-gray-700 mb-1">
              Search by Station Name, Code, or City:
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="e.g. Secunderabad, SC, Warangal, HYB"
              className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 mb-1">
              Filter by District:
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
            >
              {districts.map((d) => (
                <option key={d.id} value={d.id}>{d.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-200 text-xs">
          <span className="text-gray-600">
            Showing <strong>{filteredStations.length}</strong> of <strong>{stations.length}</strong> railway stations in Telangana
          </span>
          {(searchTerm || selectedDistrict !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDistrict('all');
              }}
              className="text-[#991b1b] font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="p-8 text-center bg-white border border-gray-300 rounded text-xs text-gray-600">
          Loading railway stations...
        </div>
      )}

      {/* Simple Table */}
      {!loading && !error && filteredStations.length > 0 && (
        <div className="bg-white border border-gray-300 rounded shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#991b1b] text-white font-bold uppercase text-[11px]">
                  <th className="py-2.5 px-3 border-b border-red-900">Station Code</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Station Name</th>
                  <th className="py-2.5 px-3 border-b border-red-900">City / District</th>
                  <th className="py-2.5 px-3 border-b border-red-900 hidden md:table-cell">Available Facilities</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Station Information</th>
                  <th className="py-2.5 px-3 border-b border-red-900 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800">
                {filteredStations.map((station, idx) => (
                  <tr
                    key={station.code}
                    className={`hover:bg-red-50/40 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    {/* Station Code */}
                    <td className="py-2.5 px-3 font-mono font-bold whitespace-nowrap">
                      <span className="inline-block bg-[#991b1b] text-white px-2 py-0.5 rounded text-[11px]">
                        {station.code}
                      </span>
                      <span className="block text-[10px] text-gray-500 font-sans mt-0.5">
                        {station.platforms} PF
                      </span>
                    </td>

                    {/* Station Name */}
                    <td className="py-2.5 px-3 whitespace-nowrap">
                      <div className="font-bold text-gray-900">{station.name}</div>
                      <div className="text-[10px] text-gray-500">{station.category}</div>
                    </td>

                    {/* City / District */}
                    <td className="py-2.5 px-3 whitespace-nowrap">
                      <div className="font-medium text-gray-800">{station.cityDistrict}</div>
                      <div className="text-[10px] text-gray-500">{station.division}</div>
                    </td>

                    {/* Facilities */}
                    <td className="py-2.5 px-3 hidden md:table-cell max-w-xs">
                      <div className="flex flex-wrap gap-1">
                        {station.facilities.slice(0, 3).map((f, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-[10px] border border-gray-300">
                            {f}
                          </span>
                        ))}
                        {station.facilities.length > 3 && (
                          <span className="text-[10px] text-[#991b1b] font-semibold">
                            +{station.facilities.length - 3} more
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Station Info */}
                    <td className="py-2.5 px-3 text-gray-600 leading-relaxed max-w-sm">
                      <p className="line-clamp-2">{station.stationInfo}</p>
                    </td>

                    {/* Actions */}
                    <td className="py-2.5 px-3 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onSelectStation(station)}
                          className="bg-white hover:bg-gray-100 text-[#991b1b] border border-[#991b1b] px-2 py-0.5 rounded text-[11px] font-semibold"
                        >
                          Profile
                        </button>
                        <button
                          onClick={() => onFindTrains(station.name)}
                          className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-2 py-0.5 rounded text-[11px] font-semibold"
                        >
                          Trains
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredStations.length === 0 && (
        <div className="p-8 text-center bg-white border border-gray-300 rounded space-y-2">
          <p className="text-sm font-bold text-gray-800">No matching stations found</p>
          <p className="text-xs text-gray-600">Please adjust your search term or select another district.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDistrict('all');
            }}
            className="bg-[#991b1b] text-white px-3 py-1 rounded text-xs font-semibold"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};
