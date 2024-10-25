import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface InfoTooltipProps {
  content: string;
}

export function InfoTooltip({ content }: InfoTooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="p-1 text-gray-400 hover:text-gray-300 transition-colors"
      >
        <HelpCircle className="w-4 h-4" />
      </button>
      {show && (
        <div className="absolute z-10 w-64 p-2 text-sm bg-slate-800 rounded-lg shadow-lg -left-1/2 transform -translate-x-1/2 mt-1">
          {content}
        </div>
      )}
    </div>
  );
}