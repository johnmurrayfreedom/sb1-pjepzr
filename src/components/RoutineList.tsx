import React from 'react';
import { Check, Clock } from 'lucide-react';

export function RoutineList() {
  const routines = [
    {
      id: '1',
      title: 'Morning Routine',
      time: '8:00 AM',
      completed: true,
      tasks: ['Brush teeth', 'Get dressed', 'Eat breakfast']
    },
    {
      id: '2',
      title: 'Afternoon Activities',
      time: '2:00 PM',
      completed: false,
      tasks: ['Reading time', 'Sensory break', 'Light exercise']
    }
  ];

  return (
    <div className="space-y-4">
      {routines.map((routine) => (
        <div
          key={routine.id}
          className="bg-slate-900/50 rounded-xl p-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{routine.title}</h3>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {routine.time}
              </div>
            </div>
            <button
              className={`p-2 rounded-full ${
                routine.completed
                  ? 'bg-green-500/20 text-green-500'
                  : 'bg-slate-800 text-gray-400'
              }`}
            >
              <Check className="w-5 h-5" />
            </button>
          </div>
          <div className="pl-4 border-l border-slate-800 space-y-1">
            {routine.tasks.map((task, index) => (
              <p key={index} className="text-sm text-gray-400">
                {task}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}