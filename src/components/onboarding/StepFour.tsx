import React from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

interface StepFourProps {
  userData: {
    name: string;
    role: string;
    selectedHabits: string[];
    reminderTimes: string[];
  };
  onUpdate: (data: Partial<typeof userData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepFour({ userData, onNext, onBack }: StepFourProps) {
  const habitLabels: Record<string, string> = {
    'daily-routine': 'Daily Routine',
    medication: 'Medication Tracking',
    mood: 'Mood Tracking',
    meltdown: 'Meltdown Tracking',
    sensory: 'Sensory Needs',
    sleep: 'Sleep Schedule',
    exercise: 'Exercise',
    food: 'Food/Diet',
  };

  const roleLabels: Record<string, string> = {
    autistic: 'Autistic Individual',
    parent: 'Parent/Guardian',
    carer: 'Professional Carer',
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-indigo-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">You're all set!</h1>
        <p className="text-gray-400">Here's a summary of your preferences</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-sm text-gray-400 mb-1">Profile</h2>
          <div className="p-4 bg-slate-900 rounded-lg">
            <p className="font-medium">{userData.name}</p>
            <p className="text-gray-400">{roleLabels[userData.role]}</p>
          </div>
        </div>

        <div>
          <h2 className="text-sm text-gray-400 mb-1">Selected Tracking</h2>
          <div className="p-4 bg-slate-900 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {userData.selectedHabits.map((habit) => (
                <span
                  key={habit}
                  className="px-3 py-1 bg-indigo-500/20 rounded-full text-sm"
                >
                  {habitLabels[habit]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm text-gray-400 mb-1">Reminder Times</h2>
          <div className="p-4 bg-slate-900 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {userData.reminderTimes.map((time) => (
                <span
                  key={time}
                  className="px-3 py-1 bg-indigo-500/20 rounded-full text-sm"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
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
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}