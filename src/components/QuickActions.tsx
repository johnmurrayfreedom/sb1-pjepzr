import React from 'react';
import { Brain, Activity, AlertTriangle, Heart } from 'lucide-react';

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <QuickActionButton
        icon={<Brain className="w-6 h-6" />}
        label="Log Sensory Event"
        color="bg-purple-600"
        onClick={() => {/* TODO */}}
      />
      <QuickActionButton
        icon={<Activity className="w-6 h-6" />}
        label="Track Mood"
        color="bg-blue-600"
        onClick={() => {/* TODO */}}
      />
      <QuickActionButton
        icon={<AlertTriangle className="w-6 h-6" />}
        label="Emergency Contact"
        color="bg-red-600"
        onClick={() => {/* TODO */}}
      />
      <QuickActionButton
        icon={<Heart className="w-6 h-6" />}
        label="Calming Tools"
        color="bg-green-600"
        onClick={() => {/* TODO */}}
      />
    </div>
  );
}

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

function QuickActionButton({ icon, label, color, onClick }: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${color} p-4 rounded-xl flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition-opacity`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}