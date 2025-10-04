import React from 'react';

export function Progress({ value = 0, className = '' }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        style={{ width: `${pct}%` }}
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
      />
    </div>
  );
}