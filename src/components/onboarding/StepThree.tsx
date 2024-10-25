import React from 'react';
import { ArrowRight, ArrowLeft, Plus, X } from 'lucide-react';

interface StepThreeProps {
  userData: {
    reminderTimes: string[];
  };
  onUpdate: (data: Partial<{ reminderTimes: string[] }>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepThree({ userData, onUpdate, onNext, onBack }: StepThreeProps) {
  const addTime = (time: string) => {
    if (!userData.reminderTimes.includes(time)) {
      onUpdate({ reminderTimes: [...userData.reminderTimes, time].sort() });
    }
  };

  const removeTime = (time: string) => {
    onUpdate({
      reminderTimes: userData.reminderTimes.filter((t) => t !== time),
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">When should we remind you?</h1>
        <p className="text-gray-400">Add your preferred reminder times</p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <input
            type="time"
            className="flex-1 px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            onChange={(e) => addTime(e.target.value)}
          />
          <button
            onClick={() => {
              const now = new Date();
              const time = `${now.getHours().toString().padStart(2, '0')}:${now
                .getMinutes()
                .toString()
                .padStart(2, '0')}`;
              addTime(time);
            }}
            className="px-4 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {userData.reminderTimes.map((time) => (
            <div
              key={time}
              className="px-3 py-1 bg-indigo-500/20 rounded-full flex items-center gap-2"
            >
              <span>{time}</span>
              <button
                onClick={() => removeTime(time)}
                className="hover:text-red-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 px-6 py-3 bg-slate-800 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 px-6 py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          disabled={userData.reminderTimes.length === 0}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}