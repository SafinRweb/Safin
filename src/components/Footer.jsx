import React, { useEffect, useState } from 'react';
import GsapBtn from './GSAPBtn';

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time for Bangladesh (UTC+6) in 24-hour format
  const getBangladeshTime = () => {
    const bdTime = new Date(dateTime.getTime() + (6 * 60 - dateTime.getTimezoneOffset()) * 60000);
    return bdTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  return (
    <footer className="relative bg-white text-black h-screen flex flex-col justify-end overflow-hidden">
      {/* Centered GSAP Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <GsapBtn>Start a Project</GsapBtn>
        </div>
      </div>
      {/* Huge Safin bottom left */}
      <div className="absolute left-0 bottom-0 select-none pointer-events-none z-0">
        <span className="text-bloody-red text-[18vw] leading-none font-DMC opacity-90 pl-2 pb-0 block" style={{lineHeight: 0.85}}>Safin</span>
      </div>
      {/* Bottom Section: Top bar + Info bar stacked above Safin */}
      <div className="w-full flex flex-col items-stretch z-10 mb-[18vw]">
        {/* Top Bar: Github and LinkedIn */}
        <div className="flex flex-row justify-between items-center px-8 text-base font-semibold mb-1 font-Sackers-Light">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-Sackers-Heavy">Github</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-Sackers-Heavy">LinkedIn</a>
        </div>
        {/* Info Bar */}
        <div className="w-full border-t border-black flex flex-row justify-between items-center px-8 py-3 text-xs md:text-base font-medium bg-white font-Sackers-Light">
          <span><a href="mailto:Safinr.gg@gmail.com" className="font-Sackers-Light">Safinr.gg@gmail.com</a></span>
          <span className="text-center font-Sackers-Heavy text-bloody-red">ALL RIGHTS RESERVED SAFIN 2025</span>
          <span>Bangladesh {getBangladeshTime()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;