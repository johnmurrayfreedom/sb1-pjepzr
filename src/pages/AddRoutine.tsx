import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Brain, Pill, Moon, HeartPulse } from 'lucide-react';
import { useStore, RoutineType } from '../store';
import { RoutineTypeButton } from '../components/RoutineTypeButton';

export function AddRoutine() {
  const navigate = useNavigate();
  const addRoutine = useStore((state) => state.addRoutine);
  const [type, setType] = useState<RoutineType>('activity');
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'custom'>('daily');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRoutine({
      name,
      type,
      time,
      frequency,
    });
    navigate('/dashboard');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Add New Routine</h1>
        <p className="text-slate-400">Create a new routine to track.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <RoutineTypeButton
            icon={Activity}
            label="Activity"
            selected={type === 'activity'}
            onClick={() => setType('activity')}
          />
          <RoutineTypeButton
            icon={Brain}
            label="Meltdown"
            selected={type === 'meltdown'}
            onClick={() => setType('meltdown')}
          />
          <RoutineTypeButton
            icon={Pill}
            label="Medication"
            selected={type === 'medication'}
            onClick={() => setType('medication')}
          />
          <RoutineTypeButton
            icon={HeartPulse}
            label="Mood"
            selected={type === 'mood'}
            onClick={() => setType('mood')}
          />
          <RoutineTypeButton
            icon={Moon}
            label="Sleep"
            selected={type === 'sleep'}
            onClick={() => setType('sleep')}
          />
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Routine name"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as typeof frequency)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Add Routine
        </button>
      </form>
    </div>
  );
}