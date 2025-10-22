"use client";

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Check if preloader has been shown in this session
    const hasSeenPreloader = sessionStorage.getItem('preloaderShown');
    
    if (hasSeenPreloader) {
      setShowPreloader(false);
      setPreloaderComplete(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);
    sessionStorage.setItem('preloaderShown', 'true');
    
    // Small delay before hiding to ensure smooth transition
    setTimeout(() => {
      setShowPreloader(false);
    }, 100);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <div className='h-full w-full' style={{ opacity: preloaderComplete ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        {children}
      </div>
    </>
  );
}
