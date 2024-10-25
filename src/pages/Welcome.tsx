import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
            <Brain size={40} />
          </div>
          <h1 className="text-4xl font-bold">Autism Pathways</h1>
          <p className="text-slate-400">
            Your companion for managing routines, tracking moods, and monitoring well-being
          </p>
        </div>

        <button
          onClick={() => navigate('/onboarding')}
          className="w-full bg-blue-500 text-white rounded-lg py-3 px-4 font-medium hover:bg-blue-600 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}