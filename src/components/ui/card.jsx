import React from 'react';

export function Card({ children, className = '' }) {
  return <div className={`bg-white rounded-xl p-0 ${className}`.trim()}>{children}</div>;
}
export function CardHeader({ children, className = '' }) {
  return <div className={`px-6 py-4 border-b ${className}`.trim()}>{children}</div>;
}
export function CardTitle({ children, className = '' }) {
  return <h3 className={`text-lg ${className}`.trim()}>{children}</h3>;
}
export function CardContent({ children, className = '' }) {
  return <div className={`p-6 ${className}`.trim()}>{children}</div>;
}