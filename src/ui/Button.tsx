import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      style={{
        padding: '8px 16px',
        background: '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
      }}
    >
      {children}
    </button>
  );
};