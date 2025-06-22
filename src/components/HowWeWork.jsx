import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Research & Planning",
  "Design & Prototyping",
  "Development & Testing",
  "Deployment & Launch",
  "Maintenance & Support",
];

const HowWeWork = () => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    // Animate progress bar height synced with scroll
    gsap.fromTo(
      progressRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    // Animate each step sliding in & glowing
    stepRefs.current.forEach((step, i) => {
      if (!step) return;

      gsap.fromTo(
        step,
        {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          boxShadow: "0 0 0 rgba(206,24,24,0)",
        },
        {
          opacity: 1,
          x: 0,
          boxShadow: "0 0 20px 6px rgba(206,24,24,0.7)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative max-w-4xl mx-auto bg-white text-jet-black py-20 px-8 min-h-screen select-none"
    >
      <h2 className="text-center text-4xl font-Sackers-Heavy mb-20">
        <span className="text-bloody-red">How</span> We Work
      </h2>

      {/* Vertical progress bar on left */}
      <div className="absolute left-0 top-0 w-1 h-full bg-jet-black/20 rounded">
        <div
          ref={progressRef}
          className="w-full bg-bloody-red rounded"
          style={{ height: "0%" }}
        />
      </div>

      {/* Timeline steps */}
      <div className="flex flex-col space-y-20 pl-12">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (stepRefs.current[i] = el)}
            className={`relative bg-white p-6 rounded-md shadow-md max-w-3xl ${
              i % 2 === 0
                ? "self-start border-l-8 border-bloody-red"
                : "self-end border-r-8 border-bloody-red"
            }`}
            style={{ width: "70%" }}
          >
            <p className="text-2xl font-Sackers-Light">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
