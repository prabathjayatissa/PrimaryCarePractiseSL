export interface Patient {
  phn: string;
  fullName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  contactNumber: string;
  address: string;
  lastVisit?: string;
  bloodGroup?: string;
  allergies: string[];
}

export interface Appointment {
  id: string;
  phn: string;
  patientName: string;
  dateTime: string;
  reason: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface VitalSigns {
  bloodPressure: string;
  heartRate: number;
  temperature: number;
  spO2: number;
  weight: number;
  height: number;
}

export interface Prescription {
  id: string;
  phn: string;
  patientName: string;
  date: string;
  medications: Medication[];
  instructions: string;
  doctorName: string;
  status: 'pending' | 'dispensed' | 'completed';
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  quantity: number;
}

export interface LabTest {
  id: string;
  phn: string;
  patientName: string;
  testName: string;
  date: string;
  status: 'pending' | 'in-progress' | 'completed';
  results?: string;
  referredBy: string;
  priority: 'routine' | 'urgent';
  cost: number;
}

export interface Payment {
  id: string;
  phn: string;
  patientName: string;
  date: string;
  amount: number;
  type: 'consultation' | 'laboratory' | 'pharmacy' | 'other';
  status: 'pending' | 'completed' | 'refunded';
  reference: string;
  method: 'cash' | 'card' | 'online';
}