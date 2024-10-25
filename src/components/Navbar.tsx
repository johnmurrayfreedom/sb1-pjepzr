import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, PlusCircle, BarChart2 } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-lg border-t border-slate-800 px-6 py-2 safe-area-bottom">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <NavLink to="/dashboard" icon={<Home className="w-6 h-6 mb-1" />} label="Home" active={location.pathname === '/dashboard'} />
          <NavLink to="/routines" icon={<Calendar className="w-6 h-6 mb-1" />} label="Routines" active={location.pathname === '/routines'} />
          <NavLink to="/add-routine" icon={<PlusCircle className="w-6 h-6 mb-1" />} label="Add" active={location.pathname === '/add-routine'} />
          <NavLink to="/statistics" icon={<BarChart2 className="w-6 h-6 mb-1" />} label="Stats" active={location.pathname === '/statistics'} />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, label, active }: { to: string; icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`w-16 flex flex-col items-center py-2 ${
        active ? 'text-indigo-400' : 'text-gray-400 hover:text-gray-300'
      }`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
}