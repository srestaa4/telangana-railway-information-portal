/**
 * TypeScript Interfaces for Telangana Railway Information Portal
 * Demonstrates type-safe models for stations, trains, passenger amenities, and API contracts.
 */

export interface RailwayStation {
  code: string;
  name: string;
  cityDistrict: string;
  division: string;
  platforms: number;
  category: string;
  facilities: string[];
  stationInfo: string;
  dailyFootfall?: string;
  inquiryNumber?: string;
  isDemonstration: boolean;
}

export interface Train {
  trainNumber: string;
  trainName: string;
  startingStation: string;
  startingStationCode: string;
  destination: string;
  destinationCode: string;
  departureTime: string;
  arrivalTime: string;
  runningDays: string;
  trainStatus: string;
  type: 'Vande Bharat' | 'Superfast Express' | 'Intercity Express' | 'Express' | 'Passenger / MEMU';
  classes: string[];
  majorHalts: string[];
  distance: string;
  duration: string;
  isDemonstration: boolean;
}

export interface RailwayServiceItem {
  id: string;
  title: string;
  category: 'Ticketing' | 'Amenities' | 'Accessibility' | 'Assistance';
  iconName: string;
  description: string;
  guidelines: string[];
  locationNote: string;
  isOfficialLinkAvailable: boolean;
  officialUrl?: string;
}

export interface EmergencyContact {
  id: string;
  title: string;
  number: string;
  description: string;
  category: 'Primary Helpline' | 'Police & Security' | 'Medical' | 'Special Assistance';
  availability: string;
  instructions: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  referenceId: string;
  data: ContactFormData;
  submittedAt: string;
}

export interface BackendStatus {
  status: 'online' | 'offline';
  message: string;
  timestamp: string;
  version: string;
  zone: string;
  totalStations: number;
  totalTrains: number;
}
