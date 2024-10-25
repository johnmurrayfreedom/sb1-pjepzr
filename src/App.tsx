import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStore } from './store';
import { AuthGuard } from './components/AuthGuard';
import { Layout } from './components/Layout';
import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { AddRoutine } from './pages/AddRoutine';
import { Statistics } from './pages/Statistics';

export function App() {
  const { user, userData } = useStore();

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : !userData?.onboardingComplete ? (
          <Route path="*" element={<Onboarding />} />
        ) : (
          <Route element={<AuthGuard><Layout /></AuthGuard>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddRoutine />} />
            <Route path="/stats" element={<Statistics />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}