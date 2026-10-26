/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomeSection } from './components/HomeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { StationsSection } from './components/StationsSection.tsx';
import { TrainsSection } from './components/TrainsSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { EmergencySection } from './components/EmergencySection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { StationDetailModal } from './components/StationDetailModal.tsx';
import { TrainDetailModal } from './components/TrainDetailModal.tsx';

import { RailwayStation, Train, BackendStatus } from './types/railway.ts';
import { SAMPLE_STATIONS, SAMPLE_TRAINS } from './data/railwayData.ts';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('home');

  // Data States
  const [stations, setStations] = useState<RailwayStation[]>(SAMPLE_STATIONS);
  const [trains, setTrains] = useState<Train[]>(SAMPLE_TRAINS);
  const [backendStatus, setBackendStatus] = useState<BackendStatus | null>(null);

  // Loading & Error States
  const [stationsLoading, setStationsLoading] = useState(false);
  const [trainsLoading, setTrainsLoading] = useState(false);
  const [backendLoading, setBackendLoading] = useState(true);
  const [stationsError, setStationsError] = useState<string | null>(null);
  const [trainsError, setTrainsError] = useState<string | null>(null);

  // Modal States
  const [selectedStation, setSelectedStation] = useState<RailwayStation | null>(null);
  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);

  // Search bridge from Home to Trains page
  const [prefilledTrainSearch, setPrefilledTrainSearch] = useState<{ from?: string; to?: string }>({});

  // Fetch Backend Status
  const checkBackendStatus = async () => {
    setBackendLoading(true);
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        setBackendStatus(data);
      } else {
        setBackendStatus(null);
      }
    } catch (err) {
      // Backend is either starting or offline, use sample data gracefully
      setBackendStatus(null);
    } finally {
      setBackendLoading(false);
    }
  };

  // Fetch Stations via Fetch API
  const fetchStations = async () => {
    setStationsLoading(true);
    setStationsError(null);
    try {
      const res = await fetch('/api/stations');
      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }
      const json = await res.json();
      if (json && Array.isArray(json.data) && json.data.length > 0) {
        setStations(json.data);
      } else {
        // Fallback to local sample dataset
        setStations(SAMPLE_STATIONS);
      }
    } catch (err: any) {
      console.warn('Using client-side stations fallback:', err.message);
      // Fallback to sample data so the app remains fully functional
      setStations(SAMPLE_STATIONS);
      setStationsError(null); // Don't block UI when sample data is available
    } finally {
      setStationsLoading(false);
    }
  };

  // Fetch Trains via Fetch API
  const fetchTrains = async () => {
    setTrainsLoading(true);
    setTrainsError(null);
    try {
      const res = await fetch('/api/trains');
      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }
      const json = await res.json();
      if (json && Array.isArray(json.data) && json.data.length > 0) {
        setTrains(json.data);
      } else {
        setTrains(SAMPLE_TRAINS);
      }
    } catch (err: any) {
      console.warn('Using client-side trains fallback:', err.message);
      setTrains(SAMPLE_TRAINS);
      setTrainsError(null);
    } finally {
      setTrainsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    checkBackendStatus();
    fetchStations();
    fetchTrains();
  }, []);

  // Bridge action: direct search from home form
  const handleDirectTrainSearch = (from: string, to: string) => {
    setPrefilledTrainSearch({ from, to });
    setActiveTab('trains');
  };

  // Bridge action: find trains serving a specific station
  const handleFindTrainsForStation = (stationName: string) => {
    setPrefilledTrainSearch({ from: stationName, to: '' });
    setActiveTab('trains');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-gray-900 flex flex-col font-sans selection:bg-[#991b1b] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        backendStatus={backendStatus}
        backendLoading={backendLoading}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <HomeSection
            stations={stations}
            trains={trains}
            setActiveTab={setActiveTab}
            onSelectStation={(s) => setSelectedStation(s)}
            onSelectTrain={(t) => setSelectedTrain(t)}
            onDirectTrainSearch={handleDirectTrainSearch}
          />
        )}

        {activeTab === 'about' && (
          <AboutSection
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'stations' && (
          <StationsSection
            stations={stations}
            loading={stationsLoading}
            error={stationsError}
            onRefresh={fetchStations}
            onSelectStation={(s) => setSelectedStation(s)}
            onFindTrains={handleFindTrainsForStation}
          />
        )}

        {activeTab === 'trains' && (
          <TrainsSection
            trains={trains}
            loading={trainsLoading}
            error={trainsError}
            onRefresh={fetchTrains}
            onSelectTrain={(t) => setSelectedTrain(t)}
            prefilledSearch={prefilledTrainSearch}
          />
        )}

        {activeTab === 'services' && <ServicesSection />}

        {activeTab === 'emergency' && <EmergencySection />}

        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
      />

      {/* Station Profile Detail Modal */}
      <StationDetailModal
        station={selectedStation}
        onClose={() => setSelectedStation(null)}
        onFindTrains={handleFindTrainsForStation}
      />

      {/* Train Schedule & Halts Detail Modal */}
      <TrainDetailModal
        train={selectedTrain}
        onClose={() => setSelectedTrain(null)}
      />
    </div>
  );
}
