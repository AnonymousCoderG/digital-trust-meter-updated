
import React from 'react';

interface GaugeProps {
  value: number;
}

export const Gauge: React.FC<GaugeProps> = ({ value }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  // Custom colors matching the logo
  const getColor = (v: number) => {
    if (v < 40) return '#D73A27'; // Red from logo (Warning)
    if (v < 75) return '#f59e0b'; // Amber (Progressing)
    return '#2D4A8D'; // Blue from logo (Trusted)
  };

  return (
    <div className="relative flex items-center justify-center w-48 h-48 drop-shadow-2xl">
      <svg className="transform -rotate-90 w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D73A27" />
            <stop offset="100%" stopColor="#2D4A8D" />
          </linearGradient>
        </defs>
        {/* Background track */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="14"
          fill="transparent"
        />
        {/* Progress arc */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          stroke={getColor(value)}
          strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {/* Decorative center value */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-black transition-colors duration-500 tracking-tighter" style={{ color: getColor(value) }}>
          {value}
        </div>
      </div>
    </div>
  );
};
