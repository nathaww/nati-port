"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase, SplitText);

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    CustomEase.create('hop', '0.9, 0, 0.1, 1');

    const createSplit = (selector: string, type: 'chars' | 'lines', className: string) => {
      return SplitText.create(selector, {
        type: type,
        [type + 'Class']: className,
        mask: type,
      });
    };

    // Split text elements
    const splitPreloaderHeader = createSplit(
      '.preloader-header span',
      'chars',
      'char'
    );
    const splitPreloaderCopy = createSplit('.preloader-copy p', 'lines', 'line');

    const chars = splitPreloaderHeader.chars as HTMLElement[];
    const lines = splitPreloaderCopy.lines as HTMLElement[];
    
    // Find indices of 'N' and 'E' (first char of NATNAEL and first char of ENDALE)
    // NATNAEL ENDALE -> N is at index 0, E is at index 7
    const firstNameFirstChar = chars[0]; // 'N' from NATNAEL
    const lastNameFirstChar = chars[7]; // 'E' from ENDALE

    // Set initial positions for chars (alternating up/down)
    chars.forEach((char, index) => {
      gsap.set(char, { yPercent: index % 2 === 0 ? -100 : 100 });
    });

    gsap.set(lines, { yPercent: 100 });

    // Create main timeline
    const tl = gsap.timeline({ 
      delay: 0.25,
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Progress bar animation
    tl.to('.progress-bar', {
      scaleX: 1,
      duration: 4,
      ease: 'power3.inOut',
    })
      .set('.progress-bar', { transformOrigin: 'right' })
      .to('.progress-bar', {
        scaleX: 0,
        duration: 1,
        ease: 'power3.in',
      });

    // Copy text slides up
    tl.to(
      lines,
      {
        yPercent: 0,
        duration: 2,
        ease: 'hop',
        stagger: 0.1,
      },
      '-=5.5'
    );

    // Header chars animate in
    tl.to(
      chars,
      {
        yPercent: 0,
        duration: 1,
        ease: 'hop',
        stagger: 0.025,
      },
      '-=5'
    );

    // Copy text slides out
    tl.to(
      lines,
      {
        y: '-125%',
        duration: 2,
        ease: 'hop',
        stagger: 0.1,
      },
      '-=2'
    );

    // Header chars animate out (keep only 'N' from NATNAEL and 'E' from ENDALE)
    tl.to(
      chars,
      {
        yPercent: (index: number) => {
          // Keep N (index 0) from NATNAEL and E (index 7) from ENDALE
          if (index === 0 || index === 7) {
            return 0;
          }
          return index % 2 === 0 ? 100 : -100;
        },
        duration: 1,
        ease: 'hop',
        stagger: 0.025,
        delay: 0.5,
        onStart: () => {
          const firstCharMask = firstNameFirstChar.parentElement;
          const lastCharMask = lastNameFirstChar.parentElement;

          if (
            firstCharMask &&
            firstCharMask.classList.contains('char-mask')
          ) {
            firstCharMask.style.overflow = 'visible';
          }

          if (lastCharMask && lastCharMask.classList.contains('char-mask')) {
            lastCharMask.style.overflow = 'visible';
          }

          const viewportWidth = window.innerWidth;
          const centerX = viewportWidth / 2;
          const firstCharRect = firstNameFirstChar.getBoundingClientRect();
          const lastCharRect = lastNameFirstChar.getBoundingClientRect();

          // First and last chars move to center
          gsap.to([firstNameFirstChar, lastNameFirstChar], {
            duration: 1,
            ease: 'hop',
            delay: 0.5,
            x: (i: number) => {
              if (i === 0) {
                return centerX - firstCharRect.left - firstCharRect.width;
              } else {
                return centerX - lastCharRect.left;
              }
            },
            onComplete: () => {
              gsap.set('.preloader-header', { mixBlendMode: 'difference' });
              gsap.to('.preloader-header', {
                y: '2rem',
                scale: 0.35,
                duration: 1.75,
                ease: 'hop',
              });
            },
          });
        },
      },
      '-=2.5'
    );

    // Preloader clips away
    tl.to(
      '.preloader',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1.75,
        ease: 'hop',
      },
      '-=0.5'
    );

    // Cleanup
    return () => {
      tl.kill();
      splitPreloaderHeader.revert();
      splitPreloaderCopy.revert();
    };
  }, [onComplete]);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-screen bg-black overflow-hidden z-[9999] preloader"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      ref={preloaderRef}
    >
      <div 
        className="progress-bar absolute top-0 left-0 w-full h-[7px] bg-white"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
        ref={progressBarRef}
      />

      <div 
        className="preloader-copy absolute bottom-20 left-1/2 -translate-x-1/2 w-[30%] text-white md:w-[80%]"
        ref={copyRef}
      >
        <p className="uppercase text-center text-[0.8rem] font-medium">
          Product Manager & Technical Leader Building data-driven products with people-first leadership
        </p>
      </div>

      <div className="preloader-header fixed w-full flex justify-center items-center z-[10000] translate-y-[60vh] origin-top md:translate-y-[50vh]">
        <span 
          className="uppercase text-white font-agdasima text-[7.5rem] font-semibold leading-[0.9] block md:text-[4rem]"
        >
          NATNAEL ENDALE
        </span>
      </div>
    </div>
  );
};

export default Preloader;
