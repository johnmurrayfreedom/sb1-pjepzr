import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface StepTwoProps {
  userData: {
    selectedHabits: string[];
  };
  onUpdate: (data: Partial<{ selectedHabits: string[] }>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepTwo({ userData, onUpdate, onNext, onBack }: StepTwoProps) {
  const habits = [
    { id: 'daily-routine', label: 'Daily Routine', icon: '📅' },
    { id: 'medication', label: 'Medication Tracking', icon: '💊' },
    { id: 'mood', label: 'Mood Tracking', icon: '😊' },
    { id: 'meltdown', label: 'Meltdown Tracking', icon: '🌊' },
    { id: 'sensory', label: 'Sensory Needs', icon: '🎧' },
    { id: 'sleep', label: 'Sleep Schedule', icon: '😴' },
    { id: 'exercise', label: 'Exercise', icon: '🏃' },
    { id: 'food', label: 'Food/Diet', icon: '🍽️' },
  ];

  const toggleHabit = (habitId: string) => {
    const newHabits = userData.selectedHabits.includes(habitId)
      ? userData.selectedHabits.filter((id) => id !== habitId)
      : [...userData.selectedHabits, habitId];
    onUpdate({ selectedHabits: newHabits });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">What would you like to track?</h1>
        <p className="text-gray-400">Select all that apply</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {habits.map((habit) => (
          <button
            key={habit.id}
            onClick={() => toggleHabit(habit.id)}
            className={`p-4 rounded-lg border ${
              userData.selectedHabits.includes(habit.id)
                ? 'border-indigo-500 bg-indigo-500/20'
                : 'border-slate-800 hover:border-indigo-500/50'
            } transition-colors text-left`}
          >
            <span className="text-2xl mb-2 block">{habit.icon}</span>
            <span className="font-medium">{habit.label}</span>
          </button>
        ))}
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
          disabled={userData.selectedHabits.length === 0}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}