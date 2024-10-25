import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, CheckCircle2, AlertCircle, Brain, ChevronDown, MoreVertical } from 'lucide-react';

export function RoutineDetail() {
  const { id } = useParams();
  const [showNotes, setShowNotes] = useState(false);

  // Mock data - would come from a store/API
  const routine = {
    id,
    title: 'Morning Routine',
    type: 'daily',
    timeOfDay: 'morning',
    time: '8:00 AM',
    supportNeeded: 'minimal',
    tasks: [
      { id: '1', text: 'Wake up', completed: true },
      { id: '2', text: 'Take medication', completed: true },
      { id: '3', text: 'Brush teeth', completed: false },
      { id: '4', text: 'Get dressed', completed: false },
    ],
    sensoryConsiderations: ['Noise Sensitive', 'Light Sensitive'],
    notes: [],
  };

  const progress = Math.round(
    (routine.tasks.filter(t => t.completed).length / routine.tasks.length) * 100
  );

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{routine.title}</h1>
          <div className="flex items-center text-gray-400 mt-1">
            <Clock className="w-4 h-4 mr-1" />
            <span>{routine.time}</span>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-slate-800">
          <MoreVertical className="w-5 h-5" />
        </button>
      </header>

      {/* Progress Card */}
      <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Today's Progress</h2>
          <span className="text-2xl font-bold text-indigo-400">{progress}%</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Tasks */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Tasks</h2>
        <div className="space-y-3">
          {routine.tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </section>

      {/* Support & Sensory Info */}
      <section className="bg-slate-900/50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-yellow-500" />
            <span className="font-medium">Support Level</span>
          </div>
          <span className="text-sm bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full">
            {routine.supportNeeded}
          </span>
        </div>
      </section>

      {/* Sensory Considerations */}
      <section className="bg-slate-900/50 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Brain className="w-5 h-5 text-purple-500" />
          <h2 className="font-medium">Sensory Considerations</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {routine.sensoryConsiderations.map(item => (
            <span
              key={item}
              className="text-sm bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Notes Section */}
      <section className="bg-slate-900/50 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowNotes(!showNotes)}
          className="w-full p-4 flex items-center justify-between"
        >
          <span className="font-medium">Notes & Observations</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              showNotes ? 'transform rotate-180' : ''
            }`}
          />
        </button>
        {showNotes && (
          <div className="p-4 pt-0">
            {routine.notes.length === 0 ? (
              <p className="text-gray-400 text-sm">No notes yet</p>
            ) : (
              <div className="space-y-2">
                {routine.notes.map((note, index) => (
                  <div key={index} className="text-sm text-gray-300">
                    {note}
                  </div>
                ))}
              </div>
            )}
            <button className="mt-3 text-sm text-indigo-400 hover:text-indigo-300">
              + Add note
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

function TaskItem({ task }: { task: Task }) {
  return (
    <div className="flex items-center space-x-3 p-3 bg-slate-900/50 rounded-lg">
      <button
        className={`p-2 rounded-full transition-colors ${
          task.completed
            ? 'bg-green-500/20 text-green-500'
            : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
        }`}
      >
        <CheckCircle2 className="w-5 h-5" />
      </button>
      <span className={task.completed ? 'text-gray-400 line-through' : ''}>
        {task.text}
      </span>
    </div>
  );
}