import React from 'react';
import { X } from 'lucide-react';
import { RailwayStation } from '../types/railway.ts';

interface StationDetailModalProps {
  station: RailwayStation | null;
  onClose: () => void;
  onFindTrains: (stationName: string) => void;
}

export const StationDetailModal: React.FC<StationDetailModalProps> = ({
  station,
  onClose,
  onFindTrains
}) => {
  if (!station) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded border border-gray-400 shadow-lg max-w-xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Simple Red Header */}
        <div className="bg-[#991b1b] text-white p-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] bg-red-900 px-2 py-0.5 rounded font-mono font-bold mr-2">
              Code: {station.code}
            </span>
            <span className="text-sm font-bold">{station.name}</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs text-gray-800 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 bg-gray-50 border border-gray-200 p-3 rounded">
            <div>
              <span className="text-gray-500 block">District / Location:</span>
              <span className="font-bold">{station.cityDistrict}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Division:</span>
              <span className="font-bold">{station.division}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Total Platforms:</span>
              <span className="font-bold">{station.platforms} Platforms</span>
            </div>
            <div>
              <span className="text-gray-500 block">Station Category:</span>
              <span className="font-bold">{station.category}</span>
            </div>
          </div>

          <div>
            <span className="font-bold text-[#991b1b] block mb-1">
              Station Overview:
            </span>
            <p className="text-gray-700 leading-relaxed bg-white border border-gray-200 p-3 rounded">
              {station.stationInfo}
            </p>
          </div>

          <div>
            <span className="font-bold text-[#991b1b] block mb-2">
              Available Facilities:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {station.facilities.map((fac, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded text-[11px]">
                  • {fac}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-3 border-t border-gray-300 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onFindTrains(station.name);
            }}
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3 py-1.5 rounded text-xs font-semibold"
          >
            Find Trains via {station.code} →
          </button>
          <button
            onClick={onClose}
            className="bg-white border border-gray-300 text-gray-800 px-3 py-1.5 rounded text-xs hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
