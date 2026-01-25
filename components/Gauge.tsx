
import React from 'react';

interface GaugeProps {
  value: number;
}

export const Gauge: React.FC<GaugeProps> = ({ value }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const getColor = (v: number) => {
    if (v < 40) return '#D73A27';
    if (v < 75) return '#f59e0b';
    return '#2D4A8D';
  };

  return (
    <div className="relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48 drop-shadow-2xl">
      <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 192 192">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D73A27" />
            <stop offset="100%" stopColor="#2D4A8D" />
          </linearGradient>
        </defs>
        <circle
          cx="96"
          cy="96"
          r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="14"
          fill="transparent"
        />
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
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl md:text-4xl font-black transition-colors duration-500 tracking-tighter" style={{ color: getColor(value) }}>
          {value}%
        </div>
      </div>
    </div>
  );
};
