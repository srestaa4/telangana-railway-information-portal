import { RailwayStation, Train, RailwayServiceItem, EmergencyContact } from '../types/railway.ts';

/**
 * Sample Railway Station Data for Telangana
 * Note: Clearly labeled demonstration data for educational portal.
 */
export const SAMPLE_STATIONS: RailwayStation[] = [
  {
    code: 'SC',
    name: 'Secunderabad Junction',
    cityDistrict: 'Hyderabad / Secunderabad',
    division: 'Secunderabad Division (SCR)',
    platforms: 10,
    category: 'NSG-1 (Major Terminal)',
    facilities: [
      'Waiting Rooms (AC & General)',
      'High-Speed Wi-Fi',
      'Battery-Operated Carts',
      'Wheelchair Assistance & Ramps',
      'Food Plazas & Jan Ahaar',
      'Deluxe Restrooms',
      'Cloak Room',
      'Multi-Level Parking',
      '24/7 Medical Emergency Booth'
    ],
    stationInfo: 'Headquarters of South Central Railway (SCR). One of India’s busiest junctions connecting Telangana with all four quadrants of the nation.',
    dailyFootfall: '~180,000 passengers',
    inquiryNumber: '040-27788176',
    isDemonstration: true
  },
  {
    code: 'HYB',
    name: 'Hyderabad Deccan (Nampally)',
    cityDistrict: 'Hyderabad District',
    division: 'Secunderabad Division (SCR)',
    platforms: 6,
    category: 'NSG-2 (City Terminal)',
    facilities: [
      'Executive Lounge',
      'Free RO Drinking Water',
      'Clean Washrooms',
      'Wheelchair Ramps',
      'IRCTC Refreshment Rooms',
      'Prepaid Auto/Taxi Stand',
      'Parcel & Cloak Room'
    ],
    stationInfo: 'Historic terminal station located in the heart of Hyderabad city. Originates several flagship superfast trains like Telangana Express and Charminar Express.',
    dailyFootfall: '~65,000 passengers',
    inquiryNumber: '040-23200171',
    isDemonstration: true
  },
  {
    code: 'KCG',
    name: 'Kacheguda',
    cityDistrict: 'Hyderabad District',
    division: 'Hyderabad Division (SCR)',
    platforms: 5,
    category: 'NSG-2 (Historic Hub)',
    facilities: [
      'Heritage Rail Museum',
      'AC Waiting Halls',
      'Free Wi-Fi',
      'Wheelchair Availability',
      'Catering Stalls',
      'Automated Ticket Vending Machines (ATVM)',
      'Dedicated Two-Wheeler & Car Parking'
    ],
    stationInfo: 'Architectural gem built during the Nizam era, headquarters of Hyderabad Division. Connects southward towards Bengaluru, Kurnool, and Tirupati.',
    dailyFootfall: '~48,000 passengers',
    inquiryNumber: '040-27568624',
    isDemonstration: true
  },
  {
    code: 'WL',
    name: 'Warangal',
    cityDistrict: 'Warangal Urban District',
    division: 'Secunderabad Division (SCR)',
    platforms: 3,
    category: 'NSG-3 (Important Junction Gateway)',
    facilities: [
      'Waiting Halls',
      'RO Water Dispensers',
      'Wheelchair Service',
      'Catering Units',
      'Sanitation Facilities',
      'Paid Vehicle Parking',
      'Tourist Help Desk'
    ],
    stationInfo: 'Major transit hub serving historical Warangal and Kakatiya heritage sites. Situated on the crucial Delhi-Chennai and Delhi-Hyderabad rail corridors.',
    dailyFootfall: '~32,000 passengers',
    inquiryNumber: '0870-2426154',
    isDemonstration: true
  },
  {
    code: 'KZJ',
    name: 'Kazipet Junction',
    cityDistrict: 'Hanamkonda / Warangal District',
    division: 'Secunderabad Division (SCR)',
    platforms: 4,
    category: 'NSG-3 (Major Rail Junction & Yard)',
    facilities: [
      'Loco Shed & Crew Lobby',
      'Upper Class Waiting Room',
      'Drinking Water Coolers',
      'Wheelchair Assistance',
      'Vegetarian & Non-Veg Food Stalls',
      'Passenger Information Display'
    ],
    stationInfo: 'Strategic triangular junction separating the New Delhi, Chennai, and Hyderabad/Secunderabad main trunk routes. Home to a historic diesel and electric locomotive shed.',
    dailyFootfall: '~28,000 passengers',
    inquiryNumber: '0870-2577666',
    isDemonstration: true
  },
  {
    code: 'NZB',
    name: 'Nizamabad Junction',
    cityDistrict: 'Nizamabad District',
    division: 'Hyderabad Division (SCR)',
    platforms: 3,
    category: 'NSG-4',
    facilities: [
      'Waiting Rooms',
      'Filtered Drinking Water',
      'Disabled-Friendly Toilet',
      'Wheelchairs',
      'Food Kiosks',
      'Two-Wheeler & Auto Stand'
    ],
    stationInfo: 'Key junction in northern Telangana connecting Secunderabad to Nanded, Mudkhed, and northern Maharashtra corridors.',
    dailyFootfall: '~18,000 passengers',
    inquiryNumber: '08462-224433',
    isDemonstration: true
  },
  {
    code: 'KMT',
    name: 'Khammam',
    cityDistrict: 'Khammam District',
    division: 'Secunderabad Division (SCR)',
    platforms: 3,
    category: 'NSG-3',
    facilities: [
      'AC & General Waiting Halls',
      'RO Drinking Water',
      'Wheelchair Access',
      'Catering Stalls',
      'Vehicle Parking'
    ],
    stationInfo: 'Critical station on the Secunderabad-Kazipet-Vijayawada trunk line, serving the agricultural and commercial heart of Khammam district.',
    dailyFootfall: '~22,000 passengers',
    inquiryNumber: '08742-223155',
    isDemonstration: true
  },
  {
    code: 'RDM',
    name: 'Ramagundam',
    cityDistrict: 'Peddapalli District',
    division: 'Secunderabad Division (SCR)',
    platforms: 3,
    category: 'NSG-3 (Industrial Corridor)',
    facilities: [
      'Passenger Waiting Room',
      'Clean Toilets',
      'Water Booths',
      'Tea & Snack Kiosks',
      'Wheelchair Assistance'
    ],
    stationInfo: 'Major station in the industrial belt of Telangana, serving NTPC thermal power plants and Singareni coal fields on the Balharshah-Kazipet line.',
    dailyFootfall: '~19,000 passengers',
    inquiryNumber: '08728-255222',
    isDemonstration: true
  },
  {
    code: 'MBNR',
    name: 'Mahbubnagar',
    cityDistrict: 'Mahbubnagar District',
    division: 'Hyderabad Division (SCR)',
    platforms: 3,
    category: 'NSG-4',
    facilities: [
      'Waiting Hall',
      'Clean Toilets',
      'Wheelchairs',
      'RO Water',
      'ATVM Machines'
    ],
    stationInfo: 'Main railway hub in southern Telangana on the Secunderabad-Dhone line connecting to Bengaluru and Rayalaseema.',
    dailyFootfall: '~14,000 passengers',
    inquiryNumber: '08542-242333',
    isDemonstration: true
  },
  {
    code: 'LPI',
    name: 'Lingampalli',
    cityDistrict: 'Sangareddy / Hyderabad IT Corridor',
    division: 'Secunderabad Division (SCR)',
    platforms: 6,
    category: 'NSG-3 (Suburban & Intercity Terminal)',
    facilities: [
      'Suburban MMTS Terminus',
      'Waiting Rooms',
      'Digital Display Boards',
      'Wheelchair Ramps',
      'Catering Counters'
    ],
    stationInfo: 'Crucial terminus station adjoining HITEC City and Gachibowli, originating several interstate expresses and Hyderabad MMTS suburban trains.',
    dailyFootfall: '~40,000 passengers',
    inquiryNumber: '040-27788320',
    isDemonstration: true
  }
];

/**
 * Sample Train Schedules for Telangana
 * Clearly labeled as sample/demonstration schedules.
 */
export const SAMPLE_TRAINS: Train[] = [
  {
    trainNumber: '20701',
    trainName: 'Secunderabad - Tirupati Vande Bharat Express',
    startingStation: 'Secunderabad Jn (SC)',
    startingStationCode: 'SC',
    destination: 'Tirupati (TPTY)',
    destinationCode: 'TPTY',
    departureTime: '06:15 AM',
    arrivalTime: '14:30 PM',
    runningDays: 'Tue, Wed, Thu, Fri, Sat, Sun (Except Mon)',
    trainStatus: 'Scheduled (Demo)',
    type: 'Vande Bharat',
    classes: ['AC Chair Car (CC)', 'Executive Class (EC)'],
    majorHalts: ['Nalgonda', 'Miryalaguda', 'Guntur', 'Ongole', 'Nellore'],
    distance: '661 km',
    duration: '8h 15m',
    isDemonstration: true
  },
  {
    trainNumber: '20834',
    trainName: 'Secunderabad - Visakhapatnam Vande Bharat Express',
    startingStation: 'Secunderabad Jn (SC)',
    startingStationCode: 'SC',
    destination: 'Visakhapatnam (VSKP)',
    destinationCode: 'VSKP',
    departureTime: '15:00 PM',
    arrivalTime: '23:30 PM',
    runningDays: 'Mon, Tue, Wed, Thu, Fri, Sat (Except Sun)',
    trainStatus: 'Scheduled (Demo)',
    type: 'Vande Bharat',
    classes: ['AC Chair Car (CC)', 'Executive Class (EC)'],
    majorHalts: ['Warangal', 'Khammam', 'Vijayawada', 'Rajahmundry', 'Samalkot'],
    distance: '699 km',
    duration: '8h 30m',
    isDemonstration: true
  },
  {
    trainNumber: '12723',
    trainName: 'Telangana Superfast Express',
    startingStation: 'Hyderabad Deccan (HYB)',
    startingStationCode: 'HYB',
    destination: 'New Delhi (NDLS)',
    destinationCode: 'NDLS',
    departureTime: '06:00 AM',
    arrivalTime: '09:05 AM (+1 day)',
    runningDays: 'Daily',
    trainStatus: 'On Time (Demo)',
    type: 'Superfast Express',
    classes: ['1A', '2A', '3A', '3E', 'SL', 'GEN'],
    majorHalts: ['Secunderabad', 'Kazipet', 'Ramagundam', 'Manchiryal', 'Balharshah', 'Nagpur', 'Bhopal'],
    distance: '1677 km',
    duration: '27h 05m',
    isDemonstration: true
  },
  {
    trainNumber: '12714',
    trainName: 'Satavahana Superfast Express',
    startingStation: 'Secunderabad Jn (SC)',
    startingStationCode: 'SC',
    destination: 'Vijayawada Jn (BZA)',
    destinationCode: 'BZA',
    departureTime: '16:25 PM',
    arrivalTime: '22:15 PM',
    runningDays: 'Daily',
    trainStatus: 'On Time (Demo)',
    type: 'Superfast Express',
    classes: ['CC', '2S', 'GEN'],
    majorHalts: ['Kazipet Jn', 'Warangal', 'Kesamudram', 'Mahbubabad', 'Khammam', 'Madhira'],
    distance: '349 km',
    duration: '5h 50m',
    isDemonstration: true
  },
  {
    trainNumber: '17201',
    trainName: 'Golconda Express',
    startingStation: 'Guntur Jn (GNT)',
    startingStationCode: 'GNT',
    destination: 'Secunderabad Jn (SC)',
    destinationCode: 'SC',
    departureTime: '06:00 AM',
    arrivalTime: '13:45 PM',
    runningDays: 'Daily',
    trainStatus: 'Scheduled (Demo)',
    type: 'Express',
    classes: ['CC', '2S', 'GEN'],
    majorHalts: ['Vijayawada', 'Khammam', 'Dornakal', 'Mahbubabad', 'Warangal', 'Kazipet Jn', 'Moula Ali'],
    distance: '383 km',
    duration: '7h 45m',
    isDemonstration: true
  },
  {
    trainNumber: '12706',
    trainName: 'Guntur Intercity Superfast Express',
    startingStation: 'Secunderabad Jn (SC)',
    startingStationCode: 'SC',
    destination: 'Guntur Jn (GNT)',
    destinationCode: 'GNT',
    departureTime: '07:45 AM',
    arrivalTime: '14:25 PM',
    runningDays: 'Daily',
    trainStatus: 'Scheduled (Demo)',
    type: 'Intercity Express',
    classes: ['CC', '2S', 'GEN'],
    majorHalts: ['Kazipet Jn', 'Warangal', 'Mahbubabad', 'Khammam', 'Vijayawada'],
    distance: '383 km',
    duration: '6h 40m',
    isDemonstration: true
  },
  {
    trainNumber: '17028',
    trainName: 'Hundry Express',
    startingStation: 'Secunderabad Jn (SC)',
    startingStationCode: 'SC',
    destination: 'Kurnool City (KRNT)',
    destinationCode: 'KRNT',
    departureTime: '16:40 PM',
    arrivalTime: '21:30 PM',
    runningDays: 'Daily',
    trainStatus: 'On Time (Demo)',
    type: 'Express',
    classes: ['2S', 'SL', 'GEN'],
    majorHalts: ['Kacheguda', 'Umdanagar', 'Shadnagar', 'Jadcherla', 'Mahbubnagar', 'Gadwal'],
    distance: '244 km',
    duration: '4h 50m',
    isDemonstration: true
  },
  {
    trainNumber: '12738',
    trainName: 'Gautami Superfast Express',
    startingStation: 'Lingampalli (LPI)',
    startingStationCode: 'LPI',
    destination: 'Kakinada Port (COA)',
    destinationCode: 'COA',
    departureTime: '20:30 PM',
    arrivalTime: '07:10 AM (+1 day)',
    runningDays: 'Daily',
    trainStatus: 'Scheduled (Demo)',
    type: 'Superfast Express',
    classes: ['1A', '2A', '3A', 'SL', 'GEN'],
    majorHalts: ['Begumpet', 'Secunderabad Jn', 'Kazipet Jn', 'Warangal', 'Mahbubabad', 'Khammam', 'Rajahmundry'],
    distance: '587 km',
    duration: '10h 40m',
    isDemonstration: true
  },
  {
    trainNumber: '12734',
    trainName: 'Narayanadri Superfast Express',
    startingStation: 'Lingampalli (LPI)',
    startingStationCode: 'LPI',
    destination: 'Tirupati (TPTY)',
    destinationCode: 'TPTY',
    departureTime: '17:25 PM',
    arrivalTime: '06:55 AM (+1 day)',
    runningDays: 'Daily',
    trainStatus: 'Scheduled (Demo)',
    type: 'Superfast Express',
    classes: ['1A', '2A', '3A', 'SL', 'GEN'],
    majorHalts: ['Secunderabad', 'Nalgonda', 'Miryalaguda', 'Guntur', 'Tenali', 'Ongole', 'Nellore', 'Renigunta'],
    distance: '694 km',
    duration: '13h 30m',
    isDemonstration: true
  },
  {
    trainNumber: '12760',
    trainName: 'Charminar Superfast Express',
    startingStation: 'Hyderabad Deccan (HYB)',
    startingStationCode: 'HYB',
    destination: 'Tambaram (TBM)',
    destinationCode: 'TBM',
    departureTime: '18:00 PM',
    arrivalTime: '08:00 AM (+1 day)',
    runningDays: 'Daily',
    trainStatus: 'On Time (Demo)',
    type: 'Superfast Express',
    classes: ['1A', '2A', '3A', 'SL', 'GEN'],
    majorHalts: ['Secunderabad', 'Kazipet', 'Warangal', 'Khammam', 'Vijayawada', 'Tenali', 'Ongole', 'Chennai Egmore'],
    distance: '792 km',
    duration: '14h 00m',
    isDemonstration: true
  },
  {
    trainNumber: '17646',
    trainName: 'Secunderabad - Repalle Express',
    startingStation: 'Secunderabad Jn (SC)',
    startingStationCode: 'SC',
    destination: 'Repalle (RAL)',
    destinationCode: 'RAL',
    departureTime: '08:20 AM',
    arrivalTime: '17:30 PM',
    runningDays: 'Daily',
    trainStatus: 'Scheduled (Demo)',
    type: 'Express',
    classes: ['CC', '2S', 'GEN'],
    majorHalts: ['Nalgonda', 'Miryalaguda', 'Nadikudi', 'Sattenapalle', 'Guntur', 'Tenali'],
    distance: '341 km',
    duration: '9h 10m',
    isDemonstration: true
  },
  {
    trainNumber: '07758',
    trainName: 'Kazipet - Secunderabad MEMU Passenger',
    startingStation: 'Kazipet Jn (KZJ)',
    startingStationCode: 'KZJ',
    destination: 'Secunderabad Jn (SC)',
    destinationCode: 'SC',
    departureTime: '06:30 AM',
    arrivalTime: '09:45 AM',
    runningDays: 'Daily',
    trainStatus: 'On Time (Demo)',
    type: 'Passenger / MEMU',
    classes: ['Unreserved General'],
    majorHalts: ['Penderial', 'Ghanpur', 'Raghunathpalle', 'Jangaon', 'Aler', 'Bhongir', 'Bibinagar', 'Ghatkesar', 'Moula Ali'],
    distance: '132 km',
    duration: '3h 15m',
    isDemonstration: true
  }
];

/**
 * Passenger Services Information
 * Detailed cards covering the 10 required railway amenities.
 */
export const RAILWAY_SERVICES: RailwayServiceItem[] = [
  {
    id: 'ticket-booking',
    title: 'Ticket Booking Information',
    category: 'Ticketing',
    iconName: 'Ticket',
    description: 'Multiple convenient options to book reserved and unreserved train tickets across Telangana stations.',
    guidelines: [
      'Reserved PRS Counters available at all major stations (8:00 AM – 8:00 PM).',
      'UTS Mobile App for instant paperless suburban & general tickets with GPS geofencing.',
      'Automatic Ticket Vending Machines (ATVM) with Smart Cards / UPI QR codes.',
      'Official online e-ticketing available on www.irctc.co.in.'
    ],
    locationNote: 'Booking offices located on concourse level at Platform 1 & Platform 10 (Secunderabad).',
    isOfficialLinkAvailable: true,
    officialUrl: 'https://www.irctc.co.in'
  },
  {
    id: 'platform-info',
    title: 'Platform Information & Guidance',
    category: 'Amenities',
    iconName: 'Tv',
    description: 'Integrated audio-visual passenger guidance systems for seamless boarding across all platforms.',
    guidelines: [
      'Digital electronic train arrival & departure boards at entrance and foot overbridges.',
      'Coach Guidance Display System indicating exact coach positions (e.g. S1, B1, A1).',
      'Multilingual public address announcements in Telugu, Hindi, and English.',
      'Braille signage installed on railings at major revamped stations.'
    ],
    locationNote: 'Foot Over Bridges (FOBs), platform pillars, and waiting halls.',
    isOfficialLinkAvailable: true,
    officialUrl: 'https://enquiry.indianrail.gov.in'
  },
  {
    id: 'waiting-rooms',
    title: 'Waiting Rooms & Executive Lounges',
    category: 'Amenities',
    iconName: 'Armchair',
    description: 'Spacious resting halls tailored for different ticket classes to relax before boarding.',
    guidelines: [
      'General Waiting Halls available free of cost for all valid ticket holders.',
      'Upper Class AC Waiting Rooms for 1A, 2A, 3A, and CC ticket holders.',
      'Dedicated Ladies Waiting Rooms with nursing facilities and round-the-clock security.',
      'Premium IRCTC Executive Lounge with buffet and reclining sofas at Secunderabad (PF-1).'
    ],
    locationNote: 'Platform 1 and Platform 10 concourses at Secunderabad & Hyderabad Deccan.',
    isOfficialLinkAvailable: false
  },
  {
    id: 'drinking-water',
    title: 'Drinking Water Facilities',
    category: 'Amenities',
    iconName: 'Droplets',
    description: 'Access to purified and hygienic drinking water at multiple points along every platform.',
    guidelines: [
      'Free RO-purified drinking water taps and chilled water coolers on all platforms.',
      'Rail Neer Packaged Drinking Water booths managed by IRCTC at fixed MRP (₹15/litre).',
      'Automatic Water Vending Machines (WVM) for quick refill of personal bottles at nominal rates (₹5/litre).',
      'Regular microbiological testing conducted by railway health inspectors.'
    ],
    locationNote: 'Installed every 50 meters along all passenger platforms.',
    isOfficialLinkAvailable: false
  },
  {
    id: 'toilets-sanitation',
    title: 'Toilets & Sanitation Facilities',
    category: 'Amenities',
    iconName: 'Sparkles',
    description: 'Modern, well-maintained sanitation blocks adhering to Swachh Bharat Railway standards.',
    guidelines: [
      'Pay-and-use deluxe toilet complexes operated by licensed sanitation agencies.',
      'Free urinals available at designated platform intervals.',
      'Divyangjan (accessible) toilets equipped with grab bars and sliding doors.',
      'Mechanized cleaning cycles carried out under "Clean My Coach / Station" monitoring.'
    ],
    locationNote: 'Near waiting halls on Platform 1, 6, 7, and 10.',
    isOfficialLinkAvailable: false
  },
  {
    id: 'food-facilities',
    title: 'Food Facilities & Catering',
    category: 'Amenities',
    iconName: 'Utensils',
    description: 'Varied food stalls, popular South Indian breakfast joints, and seat-delivered e-catering.',
    guidelines: [
      'IRCTC Jan Ahaar Cafeterias offering budget meals, idli, vada, and curd rice.',
      'Brand food plazas, tea & coffee stalls, and bakery kiosks on major platforms.',
      'IRCTC e-Catering allows passengers to order food from local restaurants directly to train berth via PNR.',
      'Approved rate cards displayed on all static catering units.'
    ],
    locationNote: 'Platform 1, 5, and 10 at Secunderabad; Main concourse at Kazipet & Warangal.',
    isOfficialLinkAvailable: true,
    officialUrl: 'https://www.ecatering.irctc.co.in'
  },
  {
    id: 'wheelchair-assistance',
    title: 'Wheelchair & Accessibility Assistance',
    category: 'Accessibility',
    iconName: 'Accessibility',
    description: 'Dedicated support systems for senior citizens, patients, and Divyangjan passengers.',
    guidelines: [
      'Complimentary manual wheelchairs available at the Station Master / Dy. SS office.',
      'Battery-Operated Cars (Buggy Service) available at Secunderabad & Kacheguda for senior citizens.',
      'Ramps with anti-skid surfaces, lifts, and escalators connecting all Foot Over Bridges.',
      'Sahayog / Porter assistance can be booked at passenger assistance booths.'
    ],
    locationNote: 'Station Superintendent office near Platform 1 VIP gate.',
    isOfficialLinkAvailable: false
  },
  {
    id: 'parking-facilities',
    title: 'Parking & Pick-Up Facilities',
    category: 'Amenities',
    iconName: 'Car',
    description: 'Organized parking facilities for two-wheelers and four-wheelers with automated ticketing.',
    guidelines: [
      '24/7 guarded parking zones with hourly and day-pass payment slabs.',
      'Fastag-enabled parking entrance at Secunderabad main circulating area.',
      'Designated pick-up and drop-off lanes (lane 1 & 2) with free 10-minute turnaround.',
      'Authorized pre-paid Telangana Police auto stands and app-cab pick-up points.'
    ],
    locationNote: 'North entrance (Ganesh Temple side) and South entrance (Bhoiguda side) at Secunderabad.',
    isOfficialLinkAvailable: false
  },
  {
    id: 'lost-and-found',
    title: 'Lost and Found Department',
    category: 'Assistance',
    iconName: 'Briefcase',
    description: 'Systematic logging, safekeeping, and recovery process for items left behind on trains or stations.',
    guidelines: [
      'Report lost baggage immediately at the Station Master’s Office or RPF Post.',
      'Articles retrieved by onboard cleaning staff are deposited with the Lost Property Office (LPO).',
      'Register an online lost-article grievance on the RailMadad portal (railmadad.indianrailways.gov.in).',
      'Claimants must present original government photo ID and proof of ownership / ticket details.'
    ],
    locationNote: 'Station Superintendent Office & RPF Post at Platform 1.',
    isOfficialLinkAvailable: true,
    officialUrl: 'https://railmadad.indianrailways.gov.in'
  },
  {
    id: 'passenger-helpdesks',
    title: 'Passenger Help Desks & Sahayog',
    category: 'Assistance',
    iconName: 'HelpCircle',
    description: 'Friendly on-ground personnel to guide passengers with platform queries, connecting trains, and local transport.',
    guidelines: [
      '“May I Help You” information kiosks situated right at main station concourses.',
      'Railway Inquiry Counters for real-time timetable confirmations and PNR queries.',
      'Tourist Information Counter offering Telangana Tourism brochures and hotel guidance.',
      'Railway Protection Force (RPF) assistance booths for women, elderly, and solo travelers.'
    ],
    locationNote: 'Main entrance portico & circulating concourses.',
    isOfficialLinkAvailable: false
  }
];

/**
 * Emergency & Assistance Contact Points
 */
export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'railway-139',
    title: 'Railway Helpline 139',
    number: '139',
    category: 'Primary Helpline',
    description: 'Integrated 24/7 one-stop helpline across India for security, medical emergency, catering complaints, coach cleanliness, and accident inquiries.',
    availability: '24 Hours / 7 Days a week (Toll-Free, Multilingual)',
    instructions: 'Dial 139 from any mobile or landline. Press 1 for Security & Medical, 2 for Train PNR/Schedule, 3 for Catering, 4 for General Complaints.'
  },
  {
    id: 'national-112',
    title: 'National Emergency Response (112)',
    number: '112',
    category: 'Primary Helpline',
    description: 'Unified pan-India emergency number for immediate Police, Fire, and Ambulance dispatch across Telangana stations and state jurisdiction.',
    availability: '24 Hours / 7 Days a week (All Telecom Networks)',
    instructions: 'State your location clearly with the station name, platform number, or nearest landmark in Telangana.'
  },
  {
    id: 'rpf-control',
    title: 'Railway Protection Force (RPF) Control Room',
    number: '040-27829158',
    category: 'Police & Security',
    description: 'South Central Railway RPF Secunderabad Division Control Room for crime prevention, passenger security, and onboard safety issues.',
    availability: '24/7 Operations Room',
    instructions: 'Call for immediate on-train security escorts, theft prevention, or trespasser concerns.'
  },
  {
    id: 'grp-telangana',
    title: 'Government Railway Police (GRP) Telangana',
    number: '040-27702816',
    category: 'Police & Security',
    description: 'State police department with statutory jurisdiction to register FIRs, investigate crimes, and maintain law and order within railway premises.',
    availability: '24/7 Thana & Control Desk',
    instructions: 'Contact for filing formal FIRs regarding theft, harassment, or law-and-order offenses on train coaches or platforms.'
  },
  {
    id: 'medical-108',
    title: 'Emergency Medical & Ambulance (108)',
    number: '108',
    category: 'Medical',
    description: 'Government of Telangana emergency medical response network with dedicated tie-ups for critical transfers from major railway stations.',
    availability: '24/7 Emergency Dispatch',
    instructions: 'For critical onboard medical emergencies, alert the Train Ticket Examiner (TTE) or call 108 specifying the incoming station.'
  },
  {
    id: 'women-safety',
    title: 'Meri Saheli & Women Passenger Safety',
    number: '182 / 139',
    category: 'Special Assistance',
    description: 'Specialized initiative of RPF ensuring end-to-end security for female passengers, especially those traveling alone.',
    availability: '24/7 Dedicated Teams',
    instructions: 'RPF women officer teams visit coaches at origin and intermediate stations to note seat numbers and check welfare throughout the journey.'
  },
  {
    id: 'childline-1098',
    title: 'Childline India (Railway Children)',
    number: '1098',
    category: 'Special Assistance',
    description: 'Emergency rescue and rehabilitation support for missing, runaway, or distressed children found around railway stations.',
    availability: '24/7 Toll-Free Support',
    instructions: 'If you spot an unaccompanied minor or child in distress at any station, alert 1098 or the nearest RPF help desk immediately.'
  }
];
