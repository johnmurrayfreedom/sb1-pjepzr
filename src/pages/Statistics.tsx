import React from 'react';
import { useStore } from '../store';
import { Activity, Brain, Pill, Moon, HeartPulse } from 'lucide-react';

export function Statistics() {
  const routines = useStore((state) => state.routines);

  const stats = {
    totalRoutines: routines.length,
    completedToday: routines.filter(
      (r) => r.lastCompleted?.startsWith(new Date().toISOString().split('T')[0])
    ).length,
    longestStreak: Math.max(...routines.map((r) => r.streak), 0),
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Statistics</h1>
        <p className="text-slate-400">Track your progress and achievements.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="text-sm text-slate-400">Total Routines</div>
          <div className="text-2xl font-bold">{stats.totalRoutines}</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="text-sm text-slate-400">Completed Today</div>
          <div className="text-2xl font-bold">{stats.completedToday}</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg col-span-2">
          <div className="text-sm text-slate-400">Longest Streak</div>
          <div className="text-2xl font-bold">{stats.longestStreak} days</div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Routine Types</h2>
        <div className="space-y-2">
          {[
            { icon: Activity, label: 'Activities', type: 'activity' },
            { icon: Brain, label: 'Meltdowns', type: 'meltdown' },
            { icon: Pill, label: 'Medications', type: 'medication' },
            { icon: HeartPulse, label: 'Moods', type: 'mood' },
            { icon: Moon, label: 'Sleep', type: 'sleep' },
          ].map(({ icon: Icon, label, type }) => (
            <div key={type} className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon size={20} />
                <span>{label}</span>
              </div>
              <span className="font-medium">
                {routines.filter((r) => r.type === type).length}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}