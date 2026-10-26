import React, { useState, useEffect } from 'react';
import { Train } from '../types/railway.ts';
import { RotateCcw, Clock, Search, ExternalLink } from 'lucide-react';

interface TrainsSectionProps {
  trains: Train[];
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
  onSelectTrain: (train: Train) => void;
  prefilledSearch?: { from?: string; to?: string };
}

export const TrainsSection: React.FC<TrainsSectionProps> = ({
  trains,
  loading,
  error,
  onRefresh,
  onSelectTrain,
  prefilledSearch
}) => {
  const [query, setQuery] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [destinationFilter, setDestinationFilter] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    if (prefilledSearch?.from) {
      setSourceFilter(prefilledSearch.from);
    }
    if (prefilledSearch?.to) {
      setDestinationFilter(prefilledSearch.to);
    }
  }, [prefilledSearch]);

  const trainTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'Vande Bharat', label: 'Vande Bharat' },
    { id: 'Superfast Express', label: 'Superfast' },
    { id: 'Intercity Express', label: 'Intercity' },
    { id: 'Express', label: 'Express' },
    { id: 'Passenger / MEMU', label: 'Passenger / MEMU' }
  ];

  const filteredTrains = trains.filter((t) => {
    const q = query.toLowerCase().trim();
    const src = sourceFilter.toLowerCase().trim();
    const dst = destinationFilter.toLowerCase().trim();

    const matchesQuery =
      !q ||
      t.trainNumber.toLowerCase().includes(q) ||
      t.trainName.toLowerCase().includes(q) ||
      t.startingStation.toLowerCase().includes(q) ||
      t.destination.toLowerCase().includes(q) ||
      t.majorHalts.some((h) => h.toLowerCase().includes(q));

    const matchesSource =
      !src ||
      t.startingStation.toLowerCase().includes(src) ||
      t.startingStationCode.toLowerCase().includes(src) ||
      t.majorHalts.some((h) => h.toLowerCase().includes(src));

    const matchesDest =
      !dst ||
      t.destination.toLowerCase().includes(dst) ||
      t.destinationCode.toLowerCase().includes(dst) ||
      t.majorHalts.some((h) => h.toLowerCase().includes(dst));

    const matchesType =
      selectedType === 'all' ||
      t.type.toLowerCase() === selectedType.toLowerCase();

    return matchesQuery && matchesSource && matchesDest && matchesType;
  });

  const handleReset = () => {
    setQuery('');
    setSourceFilter('');
    setDestinationFilter('');
    setSelectedType('all');
  };

  return (
    <div className="space-y-4">
      {/* Title Card */}
      <div className="bg-white border border-gray-300 rounded p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-[#991b1b]">
            Train Information & Schedules
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Timetables, train numbers, running days, and sample train statuses in Telangana
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

      {/* Demonstration Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-900">
        <strong>Sample Train Records Notice:</strong> Schedules and statuses (e.g. "Scheduled", "On Time") are sample demonstration records for academic purposes. For official live running status, visit{' '}
        <a href="https://enquiry.indianrail.gov.in" target="_blank" rel="noreferrer" className="underline font-bold text-[#991b1b]">
          NTES (enquiry.indianrail.gov.in)
        </a>{' '}
        or call <strong>139</strong>.
      </div>

      {/* Simple Filter Card */}
      <div className="bg-white border border-gray-300 rounded p-4 shadow-xs space-y-3">
        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
          Search & Filter Trains
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 mb-1">
              Train Number or Name:
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. 20701, Telangana"
              className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 mb-1">
              From Station:
            </label>
            <input
              type="text"
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              placeholder="e.g. Secunderabad, Kazipet"
              className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 mb-1">
              To Station:
            </label>
            <input
              type="text"
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
              placeholder="e.g. Tirupati, Vijayawada"
              className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 mb-1">
              Train Category:
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
            >
              {trainTypes.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-200 text-xs">
          <span className="text-gray-600">
            Showing <strong>{filteredTrains.length}</strong> of <strong>{trains.length}</strong> sample trains
          </span>
          {(query || sourceFilter || destinationFilter || selectedType !== 'all') && (
            <button
              onClick={handleReset}
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
          Loading trains from Express API...
        </div>
      )}

      {/* Simple Clean Table matching image2 data */}
      {!loading && !error && filteredTrains.length > 0 && (
        <div className="bg-white border border-gray-300 rounded shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#991b1b] text-white font-bold uppercase text-[11px]">
                  <th className="py-2.5 px-3 border-b border-red-900">Train No</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Train Name</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Starting Station</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Destination</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Departure</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Arrival</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Running Days</th>
                  <th className="py-2.5 px-3 border-b border-red-900">Status</th>
                  <th className="py-2.5 px-3 border-b border-red-900 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800">
                {filteredTrains.map((train, idx) => (
                  <tr
                    key={train.trainNumber}
                    className={`hover:bg-red-50/40 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    {/* Train Number Badge */}
                    <td className="py-2.5 px-3 font-mono font-bold whitespace-nowrap">
                      <span className="inline-block bg-[#991b1b] text-white px-2 py-0.5 rounded text-[11px]">
                        {train.trainNumber}
                      </span>
                    </td>

                    {/* Train Name & Type */}
                    <td className="py-2.5 px-3 whitespace-nowrap">
                      <div className="font-bold text-gray-900">{train.trainName}</div>
                      <div className="text-[10px] text-gray-500">
                        {train.type} • {train.duration}
                      </div>
                    </td>

                    {/* Starting Station */}
                    <td className="py-2.5 px-3 whitespace-nowrap">
                      <div className="font-medium text-gray-800">{train.startingStation}</div>
                      <div className="text-[10px] text-gray-500">Origin ({train.startingStationCode})</div>
                    </td>

                    {/* Destination */}
                    <td className="py-2.5 px-3 whitespace-nowrap">
                      <div className="font-medium text-gray-800">{train.destination}</div>
                      <div className="text-[10px] text-gray-500">Terminus ({train.destinationCode})</div>
                    </td>

                    {/* Departure Time */}
                    <td className="py-2.5 px-3 whitespace-nowrap font-medium text-gray-700">
                      {train.departureTime}
                    </td>

                    {/* Arrival Time */}
                    <td className="py-2.5 px-3 whitespace-nowrap font-medium text-gray-700">
                      {train.arrivalTime}
                    </td>

                    {/* Running Days */}
                    <td className="py-2.5 px-3 text-gray-600 text-[11px] max-w-xs truncate" title={train.runningDays}>
                      {train.runningDays}
                    </td>

                    {/* Status */}
                    <td className="py-2.5 px-3 whitespace-nowrap">
                      <span className="inline-block text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                        {train.trainStatus}
                      </span>
                    </td>

                    {/* Details action */}
                    <td className="py-2.5 px-3 whitespace-nowrap text-right">
                      <button
                        onClick={() => onSelectTrain(train)}
                        className="bg-white hover:bg-gray-100 text-[#991b1b] border border-[#991b1b] px-2 py-0.5 rounded text-[11px] font-semibold"
                      >
                        Halts & Info
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredTrains.length === 0 && (
        <div className="p-8 text-center bg-white border border-gray-300 rounded space-y-2">
          <p className="text-sm font-bold text-gray-800">No matching train schedules found</p>
          <p className="text-xs text-gray-600">Please adjust your search criteria or reset filters.</p>
          <button
            onClick={handleReset}
            className="bg-[#991b1b] text-white px-3 py-1 rounded text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
