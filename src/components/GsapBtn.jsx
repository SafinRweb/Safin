import React, { useRef } from 'react';
import { gsap } from 'gsap';

const GsapBtn = ({ children, className = '', ...props }) => {
  const fillRef = useRef(null);

  const onEnter = () => {
    gsap.to(fillRef.current, {
      scaleY: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const onLeave = () => {
    gsap.to(fillRef.current, {
      scaleY: 0,
      duration: 0.4,
      ease: 'power2.in',
    });
  };

  return (
    <button
      {...props}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden border-2 border-white bg-jet-black text-white px-4 py-2 rounded-lg font-Sackers-Light ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Animated bloody-red background */}
      <span
        ref={fillRef}
        className="absolute bottom-0 left-0 w-full h-full bg-bloody-red"
        style={{
          transform: 'scaleY(0)',
          transformOrigin: 'bottom',
          zIndex: -1,
        }}
      />
      
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GsapBtn;
