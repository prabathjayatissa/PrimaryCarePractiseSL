import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import type { Prescription } from '../types';

const Prescriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual API calls
  const prescriptions: Prescription[] = [
    {
      id: "1",
      phn: "19950721001",
      patientName: "Kumara Bandara",
      date: "2024-03-15",
      medications: [
        {
          name: "Amoxicillin",
          dosage: "500mg",
          frequency: "3 times daily",
          duration: "7 days",
          quantity: 21
        }
      ],
      instructions: "Take after meals",
      doctorName: "Dr. Sarah Perera",
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Prescriptions</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="h-5 w-5" />
          New Prescription
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search prescriptions..."
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
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium text-gray-900">{prescription.patientName}</h3>
                <p className="text-sm text-gray-500">PHN: {prescription.phn}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm
                ${prescription.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  prescription.status === 'dispensed' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'}`}>
                {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
              </span>
            </div>

            <div className="space-y-4">
              {prescription.medications.map((medication, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{medication.name}</h4>
                      <p className="text-sm text-gray-600">{medication.dosage} - {medication.frequency}</p>
                      <p className="text-sm text-gray-600">Duration: {medication.duration}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      Qty: {medication.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <div>
                <p>Prescribed by: {prescription.doctorName}</p>
                <p>Date: {prescription.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-indigo-600 hover:text-indigo-800">View Details</button>
                <button className="text-indigo-600 hover:text-indigo-800">Print</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prescriptions;