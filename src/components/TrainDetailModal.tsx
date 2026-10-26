import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Train as TrainType } from '../types/railway.ts';

interface TrainDetailModalProps {
  train: TrainType | null;
  onClose: () => void;
}

export const TrainDetailModal: React.FC<TrainDetailModalProps> = ({ train, onClose }) => {
  if (!train) return null;

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
              #{train.trainNumber}
            </span>
            <span className="text-sm font-bold">{train.trainName}</span>
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
          {/* Origin & Destination */}
          <div className="bg-gray-50 border border-gray-200 p-3 rounded">
            <div className="flex items-center justify-between font-bold text-xs text-[#991b1b] mb-1">
              <span>{train.startingStation}</span>
              <span>→</span>
              <span>{train.destination}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px]">
              <div>
                <span className="text-gray-500 block">Departure:</span>
                <span className="font-semibold">{train.departureTime}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Arrival:</span>
                <span className="font-semibold">{train.arrivalTime}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Duration:</span>
                <span className="font-semibold">{train.duration}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Status:</span>
                <span className="font-semibold text-green-700">{train.trainStatus}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-bold text-[#991b1b] block mb-1">
              Running Days:
            </span>
            <p className="bg-white border border-gray-200 p-2 rounded text-gray-700">
              {train.runningDays}
            </p>
          </div>

          <div>
            <span className="font-bold text-[#991b1b] block mb-1">
              Sample Intermediate Halts:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {train.majorHalts.map((h, i) => (
                <span key={i} className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-0.5 rounded text-[11px]">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-bold text-[#991b1b] block mb-1">
              Travel Classes:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {train.classes.map((c, i) => (
                <span key={i} className="bg-red-50 border border-red-200 text-[#991b1b] font-semibold px-2 py-0.5 rounded text-[11px]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-3 border-t border-gray-300 flex items-center justify-between">
          <a
            href="https://enquiry.indianrail.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#991b1b] hover:underline inline-flex items-center gap-1"
          >
            <span>Live Status on NTES</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

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
