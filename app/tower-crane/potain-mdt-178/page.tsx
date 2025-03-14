import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title: 'Potain MDT-178 Specifications | Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Potain MDT-178 tower crane.',
};

export default function PotainMDT178Page() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Potain MDT-178 Tower Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The Potain MDT-178 is a topless tower crane designed for optimum
          performance in urban construction environments where multiple cranes
          need to operate in close proximity. This page will provide
          comprehensive specifications, load charts, and operational guidelines
          for crane operators.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing comprehensive content for the Potain
          MDT-178 tower crane. Our team is working to provide accurate and
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
              Topless MDT design for multi-crane environments
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              178 meter-tonne capacity rating
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Quick assembly and disassembly times
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Manitowoc CCS control system
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
