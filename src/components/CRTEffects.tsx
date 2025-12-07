import React from 'react';

export const CRTEffects: React.FC = () => {
  return (
    <>
      {/* Scanline overlay */}
      <div className="crt-scanlines" aria-hidden="true" />
      
      {/* Screen curvature vignette */}
      <div className="crt-curve" aria-hidden="true" />
    </>
  );
};

export const ScanlineRace: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none animate-scanline-race"
      style={{
        background: 'linear-gradient(transparent 0%, hsla(38, 100%, 50%, 0.1) 50%, transparent 100%)',
        height: '20%',
      }}
      aria-hidden="true"
    />
  );
};

export const ScreenFlash: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none bg-primary/20"
      style={{
        animation: 'fade-out 0.3s ease-out forwards',
      }}
      aria-hidden="true"
    />
  );
};
