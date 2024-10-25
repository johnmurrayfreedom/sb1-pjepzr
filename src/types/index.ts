export interface Routine {
  id: string;
  title: string;
  description?: string;
  type: 'daily' | 'sensory' | 'activity';
  timeOfDay?: 'morning' | 'afternoon' | 'evening';
  reminders: string[];
  completed: boolean;
  mood?: 'calm' | 'happy' | 'overwhelmed' | 'anxious';
  notes?: string;
  timestamp: number;
}

export interface SensoryLog {
  id: string;
  type: 'meltdown' | 'sensory-overload' | 'anxiety';
  triggers: string[];
  intensity: 1 | 2 | 3 | 4 | 5;
  duration: number;
  notes?: string;
  timestamp: number;
}