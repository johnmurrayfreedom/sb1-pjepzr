import React from 'react';
import { Activity, Brain, Pill, Moon, HeartPulse } from 'lucide-react';
import type { RoutineType } from '../store';

const iconMap: Record<RoutineType, typeof Activity> = {
  activity: Activity,
  medication: Pill,
  meltdown: Brain,
  mood: HeartPulse,
  sleep: Moon,
};

interface RoutineCardProps {
  name: string;
  type: RoutineType;
  time?: string;
  streak: number;
  onComplete: () => void;
}

export function RoutineCard({ name, type, time, streak, onComplete }: RoutineCardProps) {
  const Icon = iconMap[type];

  return (
    <button
      onClick={onComplete}
      className="w-full bg-slate-800 rounded-lg p-4 flex items-center space-x-4 hover:bg-slate-700 transition-colors"
    >
      <div className="bg-slate-700 p-2 rounded-lg">
        <Icon size={24} />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-medium">{name}</h3>
        {time && (
          <p className="text-sm text-slate-400">{time}</p>
        )}
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-blue-400">
          {streak} day streak
        </div>
      </div>
    </button>
  );
}