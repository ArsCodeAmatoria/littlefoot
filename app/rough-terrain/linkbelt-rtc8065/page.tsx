import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title: 'Linkbelt RTC8065 Specifications | Rough Terrain Cranes | lilfoot',
  description:
    'Load charts and specifications for the Linkbelt RTC8065 rough terrain crane.',
};

export default function LinkbeltRTC8065Page() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Linkbelt RTC8065 Rough Terrain Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The Linkbelt RTC8065 is a versatile 65-ton rough terrain crane
          designed for exceptional mobility and lifting performance in
          challenging terrain. This page will provide comprehensive
          specifications, load charts, and operational guidelines for crane
          operators.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing comprehensive content for the Linkbelt
          RTC8065 rough terrain crane. Our team is working to provide accurate
          and detailed specifications and load charts.
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
              65-ton (59 mt) maximum lifting capacity
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              110 ft (33.5 m) four-section full power boom
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Superior off-road mobility with 4-wheel drive
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Advanced PULSE operating system
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
