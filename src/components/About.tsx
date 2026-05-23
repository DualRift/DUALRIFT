import { useEffect, useRef } from "react";
import gsap from "gsap";
import dualriftIcon from "@assets/IMG_2776_(1)_1779423085437.jpeg";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      tl.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      )
      .fromTo(textRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Image/Abstract Mark */}
        <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <img 
            src={dualriftIcon} 
            alt="DualRift Mark" 
            className="w-64 md:w-96 h-auto object-contain relative z-10 mix-blend-screen drop-shadow-2xl"
          />
        </div>

        {/* Right: Text */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-sm tracking-[0.3em] text-primary font-bold uppercase mb-4">
            The Manifesto
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase leading-tight">
            Two Sides. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">One Vision.</span>
          </h3>
          <p className="text-gray-400 font-sans text-lg mb-6 leading-relaxed">
            The wolf silhouette represents duality. Light and shadow. Restraint and aggression. We stand at the intersection of high fashion and street culture, building garments that command attention without begging for it.
          </p>
          <p className="text-gray-400 font-sans text-lg mb-8 leading-relaxed">
            Founded in the underground, built for the global stage. DualRift isn't just apparel; it's a declaration of independence.
          </p>
          
        </div>

      </div>
    </section>
  );
}
