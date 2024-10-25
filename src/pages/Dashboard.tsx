import React from 'react';
import { useStore } from '../store';
import { RoutineCard } from '../components/RoutineCard';

export function Dashboard() {
  const { name, routines, completeRoutine } = useStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, {name}!</h1>
        <p className="text-slate-400">Here are your routines for today.</p>
      </div>

      {routines.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-400">No routines yet. Add your first routine to get started!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {routines.map((routine) => (
            <RoutineCard
              key={routine.id}
              name={routine.name}
              type={routine.type}
              time={routine.time}
              streak={routine.streak}
              onComplete={() => completeRoutine(routine.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}