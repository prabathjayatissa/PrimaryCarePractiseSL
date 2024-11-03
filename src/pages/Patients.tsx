import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import PatientCard from '../components/PatientCard';
import type { Patient } from '../types';

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - replace with actual API calls
  const patients: Patient[] = [
    {
      phn: "19950721001",
      fullName: "Kumara Bandara",
      dateOfBirth: "1995-07-21",
      gender: "male",
      contactNumber: "+94 71 234 5678",
      address: "123 Galle Road, Colombo 03",
      lastVisit: "2024-03-10",
      bloodGroup: "O+",
      allergies: ["Penicillin", "Peanuts"]
    },
    {
      phn: "19880315002",
      fullName: "Malini Fernando",
      dateOfBirth: "1988-03-15",
      gender: "female",
      contactNumber: "+94 77 345 6789",
      address: "45 Kandy Road, Kadawatha",
      bloodGroup: "A+",
      allergies: []
    },
    // Add more mock patients as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Patients</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="h-5 w-5" />
          Add New Patient
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search patients by name or PHN..."
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <PatientCard
            key={patient.phn}
            patient={patient}
            onClick={() => console.log('View patient details', patient.phn)}
          />
        ))}
      </div>
    </div>
  );
};

export default Patients;