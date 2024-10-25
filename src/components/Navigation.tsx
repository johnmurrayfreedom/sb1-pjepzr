import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PlusCircle, BarChart2, Settings } from 'lucide-react';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-lg border-t border-slate-800 safe-area-bottom">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          <NavLink 
            to="/" 
            icon={<Home className="w-6 h-6" />} 
            label="Home" 
            active={isActive('/')} 
          />
          <NavLink 
            to="/add" 
            icon={<PlusCircle className="w-6 h-6" />} 
            label="Add" 
            active={isActive('/add')} 
          />
          <NavLink 
            to="/stats" 
            icon={<BarChart2 className="w-6 h-6" />} 
            label="Stats" 
            active={isActive('/stats')} 
          />
          <NavLink 
            to="/settings" 
            icon={<Settings className="w-6 h-6" />} 
            label="Settings" 
            active={isActive('/settings')} 
          />
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

function NavLink({ to, icon, label, active }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
        active 
          ? 'text-blue-400' 
          : 'text-slate-400 hover:text-slate-300'
      }`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
}