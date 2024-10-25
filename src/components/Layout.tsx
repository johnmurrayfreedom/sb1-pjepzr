import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20">
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
}