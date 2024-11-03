import React from 'react';
import { Users, CalendarCheck, Activity, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      icon: Users,
      label: 'Total Patients',
      value: '1,234',
      change: '+12%',
      changeType: 'increase'
    },
    {
      icon: CalendarCheck,
      label: 'Today\'s Appointments',
      value: '28',
      change: '4 pending',
      changeType: 'neutral'
    },
    {
      icon: Activity,
      label: 'Consultations Today',
      value: '18',
      change: '+3',
      changeType: 'increase'
    },
    {
      icon: AlertTriangle,
      label: 'Critical Cases',
      value: '3',
      change: '-1',
      changeType: 'decrease'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' :
                  stat.changeType === 'decrease' ? 'text-red-600' :
                  'text-gray-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Patients */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Patients
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Patient Name</h4>
                    <p className="text-sm text-gray-500">PHN: 123456789</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Upcoming Appointments
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CalendarCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">10:30 AM</h4>
                    <p className="text-sm text-gray-500">General Checkup</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Confirmed
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;