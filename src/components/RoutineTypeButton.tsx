import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RoutineTypeButtonProps {
  icon: LucideIcon;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function RoutineTypeButton({ icon: Icon, label, selected, onClick }: RoutineTypeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-4 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
        selected ? 'bg-blue-500' : 'bg-slate-800 hover:bg-slate-700'
      }`}
    >
      <Icon size={24} />
      <span className="text-sm">{label}</span>
    </button>
  );
}