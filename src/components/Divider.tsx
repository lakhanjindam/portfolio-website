// src/components/Divider.tsx
import React from 'react';

interface DividerProps {
  height?: string;
  color?: string;
  gradient?: string;
  style?: React.CSSProperties;
  width?: string; 
}

const Divider: React.FC<DividerProps> = ({
  height = '2px',
  color = 'transparent',
  gradient,
  style,
  width = '80%', // Default width
}) => {
  return (
    <div
      style={{
        height,
        background: gradient ? gradient : color,
        width, // Use the specified width
        maxWidth: '100%', // Ensure it doesn't exceed container width
        margin: '0 auto', // Center the divider
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scaleY(1.05)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scaleY(1)';
      }}
    />
  );
};

export default Divider;