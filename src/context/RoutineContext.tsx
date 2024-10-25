import React, { createContext, useContext, useState } from 'react';
import { Routine } from '../types';

interface RoutineContextType {
  routines: Routine[];
  addRoutine: (routine: Omit<Routine, 'id' | 'timestamp'>) => void;
  toggleRoutineComplete: (id: string) => void;
}

const RoutineContext = createContext<RoutineContextType | undefined>(undefined);

export function RoutineProvider({ children }: { children: React.ReactNode }) {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const addRoutine = (routineData: Omit<Routine, 'id' | 'timestamp'>) => {
    const newRoutine: Routine = {
      ...routineData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      completed: false,
    };
    setRoutines((prev) => [...prev, newRoutine]);
  };

  const toggleRoutineComplete = (id: string) => {
    setRoutines((prev) =>
      prev.map((routine) =>
        routine.id === id
          ? { ...routine, completed: !routine.completed }
          : routine
      )
    );
  };

  return (
    <RoutineContext.Provider
      value={{ routines, addRoutine, toggleRoutineComplete }}
    >
      {children}
    </RoutineContext.Provider>
  );
}

export function useRoutines() {
  const context = useContext(RoutineContext);
  if (context === undefined) {
    throw new Error('useRoutines must be used within a RoutineProvider');
  }
  return context;
}