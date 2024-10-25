import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
}

interface UserData {
  name: string;
  role: string;
  onboardingComplete: boolean;
  selectedHabits: string[];
  reminderTimes: string[];
}

interface Store {
  user: User | null;
  userData: UserData | null;
  setUser: (user: User | null) => void;
  setUserData: (userData: UserData | null) => void;
  updateUserData: (data: Partial<UserData>) => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      userData: null,
      setUser: (user) => set({ user }),
      setUserData: (userData) => set({ userData }),
      updateUserData: (data) =>
        set((state) => ({
          userData: state.userData ? { ...state.userData, ...data } : null,
        })),
    }),
    {
      name: 'autism-pathways-store',
    }
  )
);