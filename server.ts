import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { SAMPLE_STATIONS, SAMPLE_TRAINS } from './src/data/railwayData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // JSON Body Parser middleware
  app.use(express.json());

  // CORS Headers for API requests
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      return;
    }
    next();
  });

  // 1. GET /api/status - Backend Health and Service Confirmation
  app.get('/api/status', (req: Request, res: Response) => {
    res.json({
      status: 'online',
      message: 'Telangana Railway Information Portal demonstration backend is running successfully.',
      timestamp: new Date().toISOString(),
      version: '1.0.0-lab',
      zone: 'South Central Railway (SCR) - Educational Demonstration API',
      totalStations: SAMPLE_STATIONS.length,
      totalTrains: SAMPLE_TRAINS.length,
      endpoints: [
        'GET /api/status',
        'GET /api/stations',
        'GET /api/trains',
        'POST /api/contact'
      ],
      notice: 'This is a demonstration backend for educational purposes, not an official Indian Railways API.'
    });
  });

  // 2. GET /api/stations - Returns station information as JSON (with optional filtering)
  app.get('/api/stations', (req: Request, res: Response) => {
    try {
      const search = (req.query.search || req.query.query || '').toString().toLowerCase().trim();
      const district = (req.query.district || '').toString().toLowerCase().trim();

      let filtered = [...SAMPLE_STATIONS];

      if (search) {
        filtered = filtered.filter(
          (s) =>
            s.name.toLowerCase().includes(search) ||
            s.code.toLowerCase().includes(search) ||
            s.cityDistrict.toLowerCase().includes(search) ||
            s.facilities.some((f) => f.toLowerCase().includes(search))
        );
      }

      if (district && district !== 'all') {
        filtered = filtered.filter((s) => s.cityDistrict.toLowerCase().includes(district));
      }

      res.json({
        success: true,
        count: filtered.length,
        total: SAMPLE_STATIONS.length,
        isDemonstration: true,
        data: filtered
      });
    } catch (error) {
      console.error('Error serving stations:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve station information'
      });
    }
  });

  // 3. GET /api/trains - Returns sample train information as JSON (with optional query filtering)
  app.get('/api/trains', (req: Request, res: Response) => {
    try {
      const search = (req.query.search || req.query.query || '').toString().toLowerCase().trim();
      const from = (req.query.from || '').toString().toLowerCase().trim();
      const to = (req.query.to || '').toString().toLowerCase().trim();
      const type = (req.query.type || '').toString().toLowerCase().trim();

      let filtered = [...SAMPLE_TRAINS];

      if (search) {
        filtered = filtered.filter(
          (t) =>
            t.trainNumber.toLowerCase().includes(search) ||
            t.trainName.toLowerCase().includes(search) ||
            t.startingStation.toLowerCase().includes(search) ||
            t.destination.toLowerCase().includes(search) ||
            t.majorHalts.some((h) => h.toLowerCase().includes(search))
        );
      }

      if (from) {
        filtered = filtered.filter(
          (t) =>
            t.startingStation.toLowerCase().includes(from) ||
            t.startingStationCode.toLowerCase().includes(from) ||
            t.majorHalts.some((h) => h.toLowerCase().includes(from))
        );
      }

      if (to) {
        filtered = filtered.filter(
          (t) =>
            t.destination.toLowerCase().includes(to) ||
            t.destinationCode.toLowerCase().includes(to) ||
            t.majorHalts.some((h) => h.toLowerCase().includes(to))
        );
      }

      if (type && type !== 'all') {
        filtered = filtered.filter((t) => t.type.toLowerCase().includes(type));
      }

      res.json({
        success: true,
        count: filtered.length,
        total: SAMPLE_TRAINS.length,
        isDemonstration: true,
        disclaimer: 'Sample train schedules for demonstration. Not live railway running data.',
        data: filtered
      });
    } catch (error) {
      console.error('Error serving trains:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve train schedule information'
      });
    }
  });

  // 4. POST /api/contact - Local Contact Form Handler with Validation
  app.post('/api/contact', (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validation
      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        res.status(400).json({
          success: false,
          error: 'Please provide a valid name (at least 2 characters).'
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
        res.status(400).json({
          success: false,
          error: 'Please provide a valid email address.'
        });
        return;
      }

      if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
        res.status(400).json({
          success: false,
          error: 'Please provide a subject line.'
        });
        return;
      }

      if (!message || typeof message !== 'string' || message.trim().length < 10) {
        res.status(400).json({
          success: false,
          error: 'Message must be at least 10 characters long.'
        });
        return;
      }

      const referenceId = `DEMO-TRIP-${Date.now().toString().slice(-6)}`;

      res.json({
        success: true,
        message: 'Your message has been processed successfully in this demonstration portal.',
        referenceId,
        submittedData: {
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim()
        },
        notice: 'Demonstration Notice: This message was processed locally by the educational Express backend and was not transmitted to a real railway department or authority.',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({
        success: false,
        error: 'Server error processing contact submission'
      });
    }
  });

  // Vite Integration for Full-Stack React SPA
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the compiled dist directory
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚂 Telangana Railway Information Portal Backend running on http://0.0.0.0:${PORT}`);
    console.log(`📡 Ready to serve /api/status, /api/stations, /api/trains, /api/contact`);
  });
}

startServer();
