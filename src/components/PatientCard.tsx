import React from 'react';
import { User, Phone, MapPin, Calendar, Activity } from 'lucide-react';
import type { Patient } from '../types';

interface PatientCardProps {
  patient: Patient;
  onClick: () => void;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-3 rounded-full">
            <User className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{patient.fullName}</h3>
            <p className="text-sm text-gray-500">PHN: {patient.phn}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm
          ${patient.lastVisit ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {patient.lastVisit ? 'Active' : 'New Patient'}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{patient.dateOfBirth}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="h-4 w-4" />
          <span className="text-sm">{patient.contactNumber}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{patient.address}</span>
        </div>
        {patient.bloodGroup && (
          <div className="flex items-center gap-2 text-gray-600">
            <Activity className="h-4 w-4" />
            <span className="text-sm">Blood Group: {patient.bloodGroup}</span>
          </div>
        )}
      </div>

      {patient.allergies.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-red-600">Allergies:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {patient.allergies.map((allergy, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs"
              >
                {allergy}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientCard;