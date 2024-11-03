import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Prescriptions from './pages/Prescriptions';
import Laboratory from './pages/Laboratory';
import Payments from './pages/Payments';
import { Activity } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        
        <div className="flex-1 ml-64">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
              <div className="flex items-center gap-2">
                <Activity className="h-6 w-6 text-indigo-600" />
                <h1 className="text-xl font-semibold text-gray-800">
                  Primary Care HIS
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                  Dr. Sarah Perera
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/laboratory" element={<Laboratory />} />
              <Route path="/payments" element={<Payments />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;