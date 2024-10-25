import React from 'react';
import { CircularProgress } from './CircularProgress';

export function DailyProgress() {
  return (
    <div className="bg-slate-900/50 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">Daily Progress</h3>
          <p className="text-sm text-gray-400">4 of 6 tasks completed</p>
        </div>
        <CircularProgress progress={66} />
      </div>
    </div>
  );
}