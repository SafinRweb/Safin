import React, { useState, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import dragonNewsPNG from '../assets/Images/Dragon-News.png';
import bikersZonePNG from '../assets/Images/Bikers-Zone.png';
import boiPokaPNG from '../assets/Images/Boi-Poka.png';
import g3ArcPNG from '../assets/Images/G3 Arcitecture.png';
import GsapBtn from './GSAPBtn';

const projects = [
  { title: 'Dragon News', img: dragonNewsPNG },
  { title: 'Bikers Zone', img: bikersZonePNG },
  { title: 'Boi Poka', img: boiPokaPNG },
  { title: 'G3 Arch', img: g3ArcPNG },
];

const FeaturedProjects = () => {
  const [hoverImage, setHoverImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const bloodRefs = useRef([]);
  const waveGroupRefs = useRef([]);
  const waveTweens = useRef([]);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (img, idx) => {
    setHoverImage(img);
    gsap.to(bloodRefs.current[idx], {
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
    // Animate the wave horizontally in a continuous left-to-right loop
    waveTweens.current[idx] = gsap.to(waveGroupRefs.current[idx], {
      x: 40, // move the wave horizontally from 0 to 40
      repeat: -1,
      yoyo: false,
      duration: 1.2,
      ease: 'linear',
    });
  };

  const handleMouseLeave = (idx) => {
    setHoverImage(null);
    gsap.to(bloodRefs.current[idx], {
      y: '100%',
      duration: 0.6,
      ease: 'power2.inOut',
    });
    // Stop the wave animation and reset position
    if (waveTweens.current[idx]) {
      waveTweens.current[idx].kill();
      gsap.to(waveGroupRefs.current[idx], { x: 0, duration: 0.4, ease: 'sine.inOut' });
    }
  };

  // Reset SVG position on mount
  React.useEffect(() => {
    projects.forEach((_, idx) => {
      if (bloodRefs.current[idx]) {
        gsap.set(bloodRefs.current[idx], { y: '100%' });
      }
      if (waveGroupRefs.current[idx]) {
        gsap.set(waveGroupRefs.current[idx], { x: 0 });
      }
    });
  }, []);

  return (
    <section
      className="relative pb-30 bg-jet-black text-soft-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <h1 className="text-6xl font-Sackers-Heavy py-5 px-7">Featured Projects</h1>

      <div className="w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(project.img, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="group relative w-full h-[80px] overflow-hidden border-t border-b border-bloody-red cursor-pointer"
          >
            {/* Animated blood fill SVG with wavy top edge */}
            <span className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <svg
                ref={el => (bloodRefs.current[index] = el)}
                className="absolute left-0 bottom-0 w-full h-full"
                viewBox="0 0 200 80"
                preserveAspectRatio="none"
                style={{ display: 'block', overflow: 'hidden' }}
              >
                <g ref={el => (waveGroupRefs.current[index] = el)}>
                  <path
                    d="M-40,0 Q-30,15 -20,0 T0,0 Q10,15 20,0 T40,0 T60,0 T80,0 T100,0 T120,0 T140,0 T160,0 T180,0 T200,0 Q210,15 220,0 T240,0 V80 H-40 Z"
                    fill="#880808"
                  />
                </g>
              </svg>
            </span>
            {/* Text */}
            <h2 className="relative z-10 text-4xl font-Sackers-Light px-20 h-full flex items-center">
              {project.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Show my works Link button */}
      <div className="mt-7 px-7">
        <Link
          to="/works"
        >
          <GsapBtn>Show my works</GsapBtn>
        </Link>
      </div>

      {/* Floating preview image */}
      {hoverImage && (
        <img
          src={hoverImage}
          alt="Preview"
          className="pointer-events-none fixed z-50 w-140 h-100 object-cover rounded shadow-lg transition duration-200"
          style={{
            top: mousePos.y + 20,
            left: mousePos.x + 20,
          }}
        />
      )}
    </section>
  );
};

export default FeaturedProjects;
