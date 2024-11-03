import React, { useState } from 'react';
import { Search, Plus, Filter, Flask } from 'lucide-react';
import type { LabTest } from '../types';

const Laboratory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual API calls
  const labTests: LabTest[] = [
    {
      id: "1",
      phn: "19950721001",
      patientName: "Kumara Bandara",
      testName: "Complete Blood Count",
      date: "2024-03-15",
      status: "pending",
      referredBy: "Dr. Sarah Perera",
      priority: "routine",
      cost: 2500
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Laboratory Tests</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="h-5 w-5" />
          New Lab Test
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search lab tests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="h-5 w-5 text-gray-500" />
          Filters
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm divide-y">
        {labTests.map((test) => (
          <div key={test.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Flask className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{test.testName}</h3>
                  <p className="text-sm text-gray-500">{test.patientName} - PHN: {test.phn}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm
                  ${test.priority === 'urgent' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                  {test.priority.charAt(0).toUpperCase() + test.priority.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm
                  ${test.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    test.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'}`}>
                  {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Referred By</p>
                <p className="font-medium text-gray-900">{test.referredBy}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium text-gray-900">{test.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cost</p>
                <p className="font-medium text-gray-900">Rs. {test.cost.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                View Details
              </button>
              {test.status === 'completed' && (
                <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg">
                  Download Report
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laboratory;