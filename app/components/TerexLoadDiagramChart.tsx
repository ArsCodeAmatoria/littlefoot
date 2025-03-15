'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '#/components/ui/table';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TerexLoadDiagramChart = () => {
  // Distance values (x-axis)
  const distances = [
    "65.6", "82", "98.4", "114.8", "131.2", "147.6", 
    "164.1", "180.5", "196.9", "213.3", "229.7", "242.8", "246.1"
  ];
  
  // Load values for 2-part line (y-axis)
  const twoPartLineData = [
    22046, 22046, 22046, 19621, 16755, 14330, 
    12566, 11023, 9700, 8598, 7716, 5512, 7055
  ];
  
  // Load values for 4-part line (y-axis)
  const fourPartLineData = [
    37479, 28440, 22487, 18298, 15212, 13007, 
    11023, 9480, 8157, 7055, 6173, 5512, 7055
  ];

  // Chart data
  const chartData = {
    labels: distances,
    datasets: [
      {
        label: '2-Part Line (lbs)',
        data: twoPartLineData,
        borderColor: '#ef4444', // Red color
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        tension: 0.4, // For curved lines
        borderWidth: 2,
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: '4-Part Line (lbs)',
        data: fourPartLineData,
        borderColor: '#3b82f6', // Blue color
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4, // For curved lines
        borderWidth: 2,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Terex SK 415-20 Load Capacity Chart',
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} lbs`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Distance (ft)',
          color: '#ffffff',
        },
        ticks: {
          color: '#cccccc',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Load Capacity (lbs)',
          color: '#ffffff',
        },
        ticks: {
          color: '#cccccc',
          callback: function(value: any) {
            return value.toLocaleString();
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        beginAtZero: true,
      },
    },
  };

  // Helper to highlight specific cells
  const highlightCell = (value: string, isHighlighted: boolean) => {
    if (isHighlighted) {
      return <span className="font-bold text-red-500">{value}</span>;
    }
    return value;
  };

  return (
    <div className="space-y-8">
      {/* Crane specifications and illustrations */}
      <div className="bg-black p-6 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Crane illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] bg-gray-900 rounded-lg flex items-center justify-center p-4">
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-full"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                {/* Base tower */}
                <rect x="175" y="250" width="50" height="50" className="fill-gray-800 stroke-gray-700" />
                
                {/* Main tower */}
                <rect x="185" y="150" width="30" height="100" className="fill-gray-800 stroke-gray-700" />
                
                {/* Boom */}
                <line x1="200" y1="150" x2="350" y2="80" className="stroke-yellow-500 stroke-2" />
                
                {/* Counter weight */}
                <line x1="200" y1="150" x2="50" y2="120" className="stroke-yellow-500 stroke-2" />
                
                {/* Hook and line */}
                <line x1="300" y1="100" x2="300" y2="180" className="stroke-white stroke-1" strokeDasharray="5,5" />
                <circle cx="300" cy="185" r="5" className="fill-white stroke-white" />
                
                {/* Measurements */}
                <text x="220" y="100" fill="#ef4444" fontSize="12">73.2 ft</text>
                <text x="210" y="180" fill="#ef4444" fontSize="12">33.1 ft</text>
                <text x="320" y="70" fill="#ef4444" fontSize="12">242.8 ft to 246.1 ft</text>
                <text x="290" y="200" fill="#ef4444" fontSize="12">5,512 lbs - 7,055 lbs</text>
              </svg>
            </div>
          </div>
          
          {/* Crane specifications */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-xl font-bold text-white">Terex SK 415-20 Specifications</h3>
            <div className="space-y-2">
              <div className="bg-gray-900 p-3 rounded-md">
                <span className="font-medium text-white">SR WB 66-100/4F</span>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <span className="font-medium text-white">SR WB 102-100/4F</span>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <span className="font-medium text-white">BG (6,834 lbs), 8 Sections</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Boom Length:</span>
                <span className="font-bold text-red-500">73.2 ft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Height:</span>
                <span className="font-bold text-red-500">33.1 ft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Jib Endpoint:</span>
                <span className="font-bold text-red-500">242.8 ft to 246.1 ft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Load Capacities:</span>
                <span className="font-bold text-red-500">5,512 lbs and 7,055 lbs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chart */}
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="h-80">
          <Line options={options} data={chartData} />
        </div>
      </div>
      
      {/* Load capacity table */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Load Capacity Table</h3>
        <div className="overflow-x-auto rounded-md">
          <Table className="border-collapse">
            <TableCaption>Load capacity chart for Terex SK 415-20 showing capacities in pounds at different distances</TableCaption>
            <TableHeader className="bg-gray-900">
              <TableRow>
                <TableHead className="border border-gray-800 sticky left-0 z-10 bg-gray-900">Distance (ft)</TableHead>
                {distances.map((distance, index) => (
                  <TableHead key={index} className="border border-gray-800 text-center">
                    {index === 11 || index === 12 ? 
                      <span className="font-bold text-red-500">{distance}</span> : distance}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-gray-900/30">
                <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">
                  2-Part Line (lbs)
                </TableCell>
                {twoPartLineData.map((value, index) => (
                  <TableCell key={index} className="border border-gray-800 text-center">
                    {index === 11 || index === 12 ? 
                      <span className="font-bold text-red-500">{value.toLocaleString()}</span> : 
                      value.toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">
                  4-Part Line (lbs)
                </TableCell>
                {fourPartLineData.map((value, index) => (
                  <TableCell key={index} className="border border-gray-800 text-center">
                    {index === 11 || index === 12 ? 
                      <span className="font-bold text-red-500">{value.toLocaleString()}</span> : 
                      value.toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TerexLoadDiagramChart; 