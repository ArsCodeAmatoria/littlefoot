import React from 'react';
import { Timer, Construction } from 'lucide-react';
import PdfDownload from '../../components/PdfDownload';

export const metadata = {
  title: 'Potain HD40A Specifications | Self-Erect Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Potain HD40A self-erecting tower crane.',
};

export default function PotainHD40APage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Potain HD40A Self-Erect Tower Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The Potain HD40A is a versatile self-erecting tower crane known for
          its excellent lifting capacity and reliability. This page will provide
          comprehensive specifications, load charts, and operational guidelines
          for crane operators.
        </p>
      </div>

      <div className="mb-8 rounded-lg bg-gray-900 p-8">
        <h2 className="mb-6 text-2xl font-bold">Documentation</h2>
        <p className="mb-6 text-gray-400">
          Download the official Potain HD40A specifications and technical data sheet below.
          This document includes essential information for planning, operation, and maintenance.
        </p>
        <PdfDownload 
          title="Potain HD40A Technical Specifications"
          description="Official technical data, dimensions, load charts, and operating parameters for the Potain HD40A self-erecting tower crane."
          pdfPath="/pdfs/potain-hd-40-a.pdf"
          fileSize="3.8 MB"
        />
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing comprehensive content for the Potain HD40A
          self-erect tower crane. Our team is working to provide accurate and
          detailed specifications and load charts.
        </p>
        <div className="mt-6 flex items-center text-gray-500">
          <Timer size={20} className="mr-2" />
          <span>Estimated completion: Q2 2025</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">What to Expect</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Detailed technical specifications
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Load charts for various configurations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Working radius information
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Interactive visualization tools
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Key Features</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Fast setup and deployment
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Compact footprint for tight job sites
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Variable jib length configurations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Advanced safety features
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
