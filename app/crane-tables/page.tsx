import React from 'react';
import CraneTables from '../components/CraneTables';
import Liebherr81kCapacityChart from '../components/Liebherr81kCapacityChart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liebherr 81k Self-Erecting Crane | Littlefoot',
  description: 'Detailed specifications and load tables for the Liebherr 81k self-erecting tower crane.',
};

export default function Liebherr81kPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-4">Liebherr 81k Self-Erecting Crane</h1>
        <p className="text-gray-400 mb-6">
          The Liebherr 81k is a versatile self-erecting tower crane designed for efficiency and rapid deployment
          on construction sites. With its 45-meter jib length and maximum lifting capacity of 6,000 kg, it's
          ideal for residential and commercial construction projects.
        </p>
      </div>

      {/* Key Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Technical Specifications</h2>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-400">Max. Lifting Capacity:</span>
              <span className="text-white font-medium">6,000 kg</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Max. Jib Length:</span>
              <span className="text-white font-medium">45 meters</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Max. Hook Height:</span>
              <span className="text-white font-medium">40.4 meters</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Max. Radius:</span>
              <span className="text-white font-medium">45 meters</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Tower Height:</span>
              <span className="text-white font-medium">21.3 - 26.0 meters</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Power Supply:</span>
              <span className="text-white font-medium">400V / 32A</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Self-Erection Time:</span>
              <span className="text-white font-medium">~20 minutes</span>
            </li>
          </ul>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Transport Dimensions</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex justify-between">
              <span className="text-gray-400">Length:</span>
              <span className="text-white font-medium">15.3 meters</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Width:</span>
              <span className="text-white font-medium">2.5 meters</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Height:</span>
              <span className="text-white font-medium">3.9 meters</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Total Weight:</span>
              <span className="text-white font-medium">24,800 kg</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-highlight mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Quick and efficient assembly without auxiliary crane</li>
            <li>Compact transport dimensions for versatile site access</li>
            <li>Variable jib configurations including 30° angle</li>
            <li>Remote control operation with safety features</li>
            <li>Energy-efficient electric drive system</li>
          </ul>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-highlight mb-2">Residential Construction</h3>
            <p className="text-gray-400">
              Perfect for single-family homes, townhouses, and multi-family residential buildings up to 4-5 stories.
              Its compact footprint and easy setup make it ideal for urban settings.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-highlight mb-2">Commercial Projects</h3>
            <p className="text-gray-400">
              Efficiently handles small to medium commercial buildings, retail centers, and office complexes.
              The adjustable jib angle allows operation in height-restricted areas.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-highlight mb-2">Infrastructure Work</h3>
            <p className="text-gray-400">
              Supports bridge construction, small civil engineering projects, and municipal installations.
              The Load-Plus configuration enhances lifting capability for heavier materials.
            </p>
          </div>
        </div>
      </div>

      {/* Crane Load Tables Component */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Load Capacity Tables</h2>
        <p className="text-gray-400 mb-6">
          These tables provide detailed information about the Liebherr 81k's lifting capacity
          at different boom lengths and operating radii. Use the tabs to switch between different configurations.
        </p>
        <CraneTables />
      </div>

      {/* Load Capacity Charts Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Load Capacity Charts</h2>
        <p className="text-gray-400 mb-6">
          These charts visualize the load capacity of the Liebherr 81k at different jib radii.
          The diagrams show how the maximum load capacity decreases as the jib radius increases,
          helping operators determine safe operating limits for specific configurations.
        </p>
        
        {/* Load-Plus Configuration Chart */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-highlight mb-4">Load-Plus Configuration</h3>
          <Liebherr81kCapacityChart configuration="loadPlus" />
          <div className="mt-4 text-sm text-gray-400">
            <span className="text-highlight font-medium">Note:</span> This chart represents the Liebherr 81k in Load-Plus configuration.
            The Load-Plus configuration enhances the standard lifting capacity by using additional counterweights and
            specialized boom configurations. This setup provides up to 20% more lifting capacity compared to the standard
            LM1 configuration, making it ideal for heavy lifting operations.
          </div>
        </div>
        
        {/* LM1 Configuration Chart */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-highlight mb-4">LM1 Configuration</h3>
          <Liebherr81kCapacityChart configuration="lm1" />
          <div className="mt-4 text-sm text-gray-400">
            <span className="text-highlight font-medium">Note:</span> This chart represents the Liebherr 81k in LM1 configuration.
            It shows the relationship between jib radius (from 12.0 m to 48.0 m) and maximum lifting capacity,
            demonstrating how capacity decreases as the hook moves further from the mast. The LM1 configuration provides
            balanced performance for most everyday lifting operations.
          </div>
        </div>
        
        {/* 30° Jib Angle Chart */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-highlight mb-4">30° Jib Angle Configuration</h3>
          <Liebherr81kCapacityChart configuration="jibAngle" />
          <div className="mt-4 text-sm text-gray-400">
            <span className="text-highlight font-medium">Note:</span> This chart represents the Liebherr 81k with the jib angled at 30°.
            When the jib is angled at 30 degrees, the crane achieves an increased hook height of up to 40.4 meters.
            This configuration maintains good lifting capacity while allowing the crane to reach over obstacles or work
            in height-restricted areas.
          </div>
        </div>
      </div>

      {/* Operational Configurations */}
      <div className="bg-black p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Operational Configurations</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">Load-Plus Configuration</h3>
            <p className="text-gray-400">
              The Load-Plus configuration enhances the standard lifting capacity by using additional counterweights
              and specialized boom configurations. This setup provides up to 20% more lifting capacity compared
              to the standard configuration, making it ideal for heavy lifting operations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">LM1 Configuration</h3>
            <p className="text-gray-400">
              The LM1 configuration represents the standard setup for the Liebherr 81k with normal counterweights.
              This configuration offers balanced performance for most everyday lifting operations while optimizing
              energy consumption and operational costs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">30° Jib Angle</h3>
            <p className="text-gray-400">
              When the jib is angled at 30 degrees, the Liebherr 81k achieves an increased hook height of up to 40.4 meters,
              approximately 14 meters higher than in horizontal configuration. This setup is particularly useful for
              reaching over obstacles or working in height-restricted areas.
            </p>
          </div>
        </div>
      </div>

      {/* Safety Systems */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Safety Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">Electronic Monitoring</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Automatic load moment limitation</li>
              <li>Wind speed monitoring with alerts</li>
              <li>Slewing angle limitation capability</li>
              <li>Anti-collision system compatibility</li>
              <li>Hook height limitation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">Operational Safety</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Remote control with emergency stop</li>
              <li>Automatic overload prevention</li>
              <li>Working range limitation</li>
              <li>Stable foundation monitoring</li>
              <li>Visibility aids and warning systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-900 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-2">Manufacturer Information</h2>
        <p className="text-gray-400">
          The Liebherr 81k is manufactured by Liebherr-Werk Biberach GmbH, a division of the Liebherr Group,
          a family-owned multinational equipment manufacturer founded in 1949 in Germany. Liebherr is one of the
          world's leading manufacturers of construction machinery and is known for innovative technology and
          high-quality products.
        </p>
        <p className="text-gray-400 mt-4">
          For official specifications and the latest information, visit {' '}
          <a 
            href="https://www.liebherr.com/en/int/products/construction-machines/tower-cranes/fast-erecting-cranes/81-k.1/81k.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-highlight hover:underline"
          >
            Liebherr's official website
          </a>.
        </p>
      </div>
    </div>
  );
} 