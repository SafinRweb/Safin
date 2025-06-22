import React, { useState } from 'react';
import { Link } from 'react-router';
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

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (img) => {
    setHoverImage(img);
  };

  const handleMouseLeave = () => {
    setHoverImage(null);
  };

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
            onMouseEnter={() => handleMouseEnter(project.img)}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full h-[80px] overflow-hidden border-t border-b border-bloody-red cursor-pointer"
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-bloody-red origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0" />

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
