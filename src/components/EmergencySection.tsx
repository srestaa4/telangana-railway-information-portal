import React, { useState } from 'react';
import { EMERGENCY_CONTACTS } from '../data/railwayData.ts';
import { Copy, Check, ExternalLink } from 'lucide-react';

export const EmergencySection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Title Card */}
      <div className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h2 className="text-xl font-bold text-[#991b1b] mb-1">
          Emergency & Passenger Assistance
        </h2>
        <p className="text-xs text-gray-600">
          Important 24/7 security, medical, and grievance numbers across Telangana
        </p>
      </div>

      {/* Official Notice */}
      <div className="bg-amber-50 border border-amber-300 rounded p-4 text-xs text-amber-950">
        <strong className="text-amber-900 block mb-1">Verification Notice:</strong>
        Please verify current contact numbers through official South Central Railway sources. In an emergency onboard, immediately contact the Train Ticket Examiner (TTE) or Railway Protection Force (RPF) staff.
      </div>

      {/* Primary Helplines: 139 and 112 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Helpline 139 */}
        <div className="bg-white border-2 border-[#991b1b] rounded p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#991b1b] uppercase">
                Primary Railway Helpline
              </span>
              <span className="text-[11px] text-gray-500">24/7 Toll Free</span>
            </div>
            <div className="text-3xl font-black text-[#991b1b] my-2">
              139
            </div>
            <p className="text-xs font-bold text-gray-800 mb-2">
              Indian Railways Integrated Helpline
            </p>
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              Single-window number across India for security, medical assistance, coach cleanliness, catering complaints, and accident enquiries.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-2.5 rounded text-[11px] text-gray-700 space-y-1">
              <p>• Press 1 for Security & Medical Assistance</p>
              <p>• Press 2 for Train PNR & Schedule</p>
              <p>• Press 3 for Catering Complaints</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
            <span className="text-xs text-gray-500">Toll Free</span>
            <button
              onClick={() => handleCopy('139', '139')}
              className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3 py-1 rounded text-xs font-semibold inline-flex items-center gap-1"
            >
              {copiedId === '139' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === '139' ? 'Copied 139' : 'Copy 139'}</span>
            </button>
          </div>
        </div>

        {/* Helpline 112 */}
        <div className="bg-white border-2 border-[#991b1b] rounded p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#991b1b] uppercase">
                National Emergency
              </span>
              <span className="text-[11px] text-gray-500">Police / Fire / Medical</span>
            </div>
            <div className="text-3xl font-black text-[#991b1b] my-2">
              112
            </div>
            <p className="text-xs font-bold text-gray-800 mb-2">
              Unified Emergency Response System
            </p>
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              Unified pan-India emergency number for immediate Police, Fire, and Ambulance dispatch across Telangana stations and state territory.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-2.5 rounded text-[11px] text-gray-700 space-y-1">
              <p>• State location with station name and platform number</p>
              <p>• Specify if incident is medical, fire, or law & order</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
            <span className="text-xs text-gray-500">All Networks</span>
            <button
              onClick={() => handleCopy('112', '112')}
              className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3 py-1 rounded text-xs font-semibold inline-flex items-center gap-1"
            >
              {copiedId === '112' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === '112' ? 'Copied 112' : 'Copy 112'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Other Contacts Grid */}
      <div className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#991b1b] mb-4">
          Railway Protection & Emergency Help Desks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EMERGENCY_CONTACTS.filter(c => !['railway-139', 'national-112'].includes(c.id)).map((c) => (
            <div
              key={c.id}
              className="border border-gray-200 rounded p-4 bg-gray-50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">{c.category}</span>
                  <span className="text-[10px] text-green-700 font-semibold">{c.availability}</span>
                </div>
                <h4 className="text-xs font-bold text-gray-900 mt-1">{c.title}</h4>
                <div className="text-sm font-bold text-[#991b1b] my-1 font-mono">{c.number}</div>
                <p className="text-[11px] text-gray-600 mb-2 leading-relaxed">{c.description}</p>
              </div>

              <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 italic">{c.instructions}</span>
                <button
                  onClick={() => handleCopy(c.id, c.number)}
                  className="text-xs font-bold text-[#991b1b] hover:underline"
                >
                  {copiedId === c.id ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RailMadad Card */}
      <div className="bg-white border border-gray-300 rounded p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="text-xs font-bold text-gray-900">
            RailMadad — Online Grievance Redressal
          </h4>
          <p className="text-xs text-gray-600">
            Official Indian Railways portal for registering passenger grievances online with instant tracking.
          </p>
        </div>
        <a
          href="https://railmadad.indianrailways.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-3 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1 self-start sm:self-auto"
        >
          <span>RailMadad Website</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
