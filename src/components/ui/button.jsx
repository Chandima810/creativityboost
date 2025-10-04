import React from 'react';

export function Button({ children, className = '', variant, disabled, ...props }) {
  const base = 'px-4 py-2 rounded-lg font-medium focus:outline-none transition';
  const outline = 'border border-gray-300 bg-white';
  const solid = 'bg-indigo-600 text-white hover:bg-indigo-700';
  const applied = variant === 'outline' ? outline : solid;

  return (
    <button
      className={`${base} ${applied} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}