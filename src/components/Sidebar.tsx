import React from 'react';
import { 
  Users, 
  CalendarCheck, 
  ClipboardList, 
  Settings,
  Activity,
  FileText,
  Home,
  Flask,
  Pill,
  CreditCard
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Patients', path: '/patients' },
    { icon: CalendarCheck, label: 'Appointments', path: '/appointments' },
    { icon: ClipboardList, label: 'Consultations', path: '/consultations' },
    { icon: Pill, label: 'Prescriptions', path: '/prescriptions' },
    { icon: Flask, label: 'Laboratory', path: '/laboratory' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: Activity, label: 'Vitals', path: '/vitals' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-indigo-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8 px-4">
        <Activity className="h-8 w-8" />
        <h1 className="text-xl font-bold">MediCare HIS</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors
                ${isActive 
                  ? 'bg-indigo-800 text-white' 
                  : 'text-indigo-100 hover:bg-indigo-800'}`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};