import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StepOneProps {
  userData: {
    name: string;
    role: string;
  };
  onUpdate: (data: Partial<{ name: string; role: string }>) => void;
  onNext: () => void;
}

export function StepOne({ userData, onUpdate, onNext }: StepOneProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome!</h1>
        <p className="text-gray-400">Let's get to know you better</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Your Name</label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Your Role</label>
          <select
            value={userData.role}
            onChange={(e) => onUpdate({ role: e.target.value })}
            className="w-full px-4 py-3 bg-slate-900 rounded-lg border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            required
          >
            <option value="">Select your role</option>
            <option value="autistic">Autistic Individual</option>
            <option value="parent">Parent/Guardian</option>
            <option value="carer">Professional Carer</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}