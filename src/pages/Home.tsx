import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-indigo-600 rounded-full flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Spectrum Support
        </h1>
        <p className="text-gray-400 max-w-md">
          A gentle companion for autism support, routine tracking, and well-being monitoring
        </p>
      </div>
      
      <button
        onClick={() => navigate('/onboarding')}
        className="px-8 py-3 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 transition-colors"
      >
        Get Started
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        <FeatureCard
          title="Routine Tracking"
          description="Build and maintain daily routines with visual schedules and reminders"
        />
        <FeatureCard
          title="Sensory Journal"
          description="Monitor sensory experiences and identify patterns"
        />
        <FeatureCard
          title="Progress Insights"
          description="Track development and celebrate achievements"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
      <h3 className="text-lg font-semibold text-indigo-400 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}