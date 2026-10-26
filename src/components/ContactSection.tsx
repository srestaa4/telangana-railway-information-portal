import React, { useState } from 'react';
import { ContactFormData, ContactSubmissionResult } from '../types/railway.ts';
import { RotateCcw } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ContactSubmissionResult | null>(null);

  const subjects = [
    'General Inquiry about Telangana Railway Stations',
    'Station Facilities & Accessibility Query',
    'Demonstration Train Timetable Feedback',
    'Student / Academic Lab Examination Review',
    'Suggestion for Portal Improvement'
  ];

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        setSubmissionResult({
          success: true,
          message: result.message || 'Message recorded in demonstration mode.',
          referenceId: result.referenceId || `DEMO-${Date.now().toString().slice(-6)}`,
          data: { ...formData },
          submittedAt: new Date().toLocaleTimeString()
        });
      } else {
        setSubmissionResult({
          success: true,
          message: 'Message processed locally in demonstration mode.',
          referenceId: `DEMO-${Date.now().toString().slice(-6)}`,
          data: { ...formData },
          submittedAt: new Date().toLocaleTimeString()
        });
      }
    } catch {
      setSubmissionResult({
        success: true,
        message: 'Message recorded locally.',
        referenceId: `DEMO-${Date.now().toString().slice(-6)}`,
        data: { ...formData },
        submittedAt: new Date().toLocaleTimeString()
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmissionResult(null);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {/* Title Card */}
      <div className="bg-white border border-gray-300 rounded p-6 shadow-xs">
        <h2 className="text-xl font-bold text-[#991b1b] mb-1">
          Contact Portal Administrators
        </h2>
        <p className="text-xs text-gray-600">
          Send inquiries or student project feedback to the portal administrator
        </p>
      </div>

      {/* Demonstration Notice */}
      <div className="bg-amber-50 border border-amber-300 rounded p-3 text-xs text-amber-950">
        <strong>Important Notice:</strong> This demonstration contact form does NOT send messages to a real railway department or South Central Railway. For official complaints or queries, please use RailMadad (railmadad.indianrailways.gov.in) or call 139.
      </div>

      {/* Confirmation State */}
      {submissionResult ? (
        <div className="bg-white border border-green-300 rounded p-6 shadow-xs space-y-4">
          <div className="text-green-800">
            <h3 className="text-base font-bold">
              Message Submitted Successfully!
            </h3>
            <p className="text-xs text-green-700">
              Your feedback was recorded locally in this demonstration portal at {submissionResult.submittedAt}.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded p-4 text-xs space-y-2">
            <div>
              <span className="font-bold text-gray-700">Demo Reference ID: </span>
              <span className="font-mono font-bold text-[#991b1b]">{submissionResult.referenceId}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700">Name: </span>
              <span>{submissionResult.data.name}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700">Email: </span>
              <span>{submissionResult.data.email}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700">Subject: </span>
              <span>{submissionResult.data.subject}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700">Message: </span>
              <p className="mt-1 bg-white p-2 border border-gray-200 rounded text-gray-700">{submissionResult.data.message}</p>
            </div>
          </div>

          <button
            onClick={handleResetForm}
            className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-4 py-1.5 rounded text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Submit Another Message</span>
          </button>
        </div>
      ) : (
        /* Contact Form */
        <div className="bg-white border border-gray-300 rounded p-6 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1">
                Your Name: <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1">
                Email Address: <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-gray-700 mb-1">
                Subject: <span className="text-red-600">*</span>
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
              >
                <option value="">Select subject...</option>
                {subjects.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
              {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1">
                Message: <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full p-2.5 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#991b1b]"
              />
              {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#991b1b] hover:bg-[#7f1d1d] text-white px-5 py-2 rounded text-xs font-bold transition disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Message'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
