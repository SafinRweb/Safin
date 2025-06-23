import React, { useRef } from 'react';
import { gsap } from 'gsap';

const GsapBtn = ({ children, className = '', ...props }) => {
  const bloodRef = useRef(null);
  const waveGroupRef = useRef(null);
  const waveTween = useRef(null);

  const onEnter = () => {
    gsap.to(bloodRef.current, {
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
    // Animate the wave horizontally in a continuous left-to-right loop
    waveTween.current = gsap.to(waveGroupRef.current, {
      x: 80,
      repeat: -1,
      yoyo: false,
      duration: 2,
      ease: 'linear',
    });
  };

  const onLeave = () => {
    gsap.to(bloodRef.current, {
      y: '100%',
      duration: 0.6,
      ease: 'power2.inOut',
    });
    // Stop the wave animation and reset position
    if (waveTween.current) {
      waveTween.current.kill();
      gsap.to(waveGroupRef.current, { x: 0, duration: 0.4, ease: 'sine.inOut' });
    }
  };

  // Reset SVG position on mount
  React.useEffect(() => {
    gsap.set(bloodRef.current, { y: '100%' });
    gsap.set(waveGroupRef.current, { x: 0 });
  }, []);

  return (
    <button
      {...props}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden border-2 border-white bg-jet-black text-white px-4 py-2 rounded-lg font-Sackers-Light ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Animated blood fill SVG with flowing wave */}
      <span
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <svg
          ref={bloodRef}
          className="absolute left-0 bottom-0 w-full h-full"
          viewBox="0 0 200 50"
          preserveAspectRatio="none"
          style={{ display: 'block', overflow: 'hidden' }}
        >
          <g ref={waveGroupRef}>
            <path
              d="M-80,10 Q-60,0 -40,10 T0,10 T40,10 T80,10 T120,10 T160,10 T200,10 T240,10 T280,10 V50 H-80 Z"
              fill="#880808"
            />
          </g>
        </svg>
      </span>
      {/* Button text */}
      <span className="relative z-10 transition-all duration-300">
        {children}
      </span>
    </button>
  );
};

export default GsapBtn;
