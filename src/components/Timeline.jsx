import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    title: '1. Initial Contact',
    description: 'Reach out via my contact form or email to share your project idea and requirements.'
  },
  {
    title: '2. Discovery Call',
    description: 'We schedule a call to discuss your goals, vision, and expectations in detail.'
  },
  {
    title: '3. Proposal & Agreement',
    description: 'I send you a tailored proposal with scope, timeline, and pricing. Once agreed, we sign a contract.'
  },
  {
    title: '4. Design & Development',
    description: 'I start designing and building your project, keeping you updated with progress and feedback rounds.'
  },
  {
    title: '5. Review & Launch',
    description: 'You review the final product, request any tweaks, and once approved, we launch your project!'
  },
  {
    title: '6. Ongoing Support',
    description: 'I provide post-launch support and am available for future updates or questions.'
  },
];

const Timeline = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
    // Cleanup
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="py-20 bg-jet-black text-soft-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-7xl font-DMC text-bloody-red mb-12 text-center">How We Can Work Together</h2>
        <div className="relative border-l-4 border-bloody-red pl-8">
          {timelineSteps.map((step, idx) => (
            <div
              key={idx}
              ref={el => (stepsRef.current[idx] = el)}
              className="mb-16 relative"
            >
              <div className="absolute -left-6 top-1 w-6 h-6 bg-bloody-red rounded-full border-4 border-jet-black shadow-lg" />
              <h3 className="text-2xl font-Sackers-Heavy mb-2">{step.title}</h3>
              <p className="text-lg font-Sackers-Light text-soft-white/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

