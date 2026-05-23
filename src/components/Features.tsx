import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    title: "Premium Materials",
    description: "Sourced globally, crafted locally. We use only the finest heavyweight cottons, technical nylons, and distressed denims.",
    number: "01"
  },
  {
    title: "Limited Runs",
    description: "Once it's gone, it's gone. No restocks. No second chances. We keep the circle tight.",
    number: "02"
  },
  {
    title: "Pack Mentality",
    description: "More than a brand. A collective of creators, disruptors, and rule-breakers.",
    number: "03"
  },
  {
    title: "Relentless Design",
    description: "Every seam, zipper, and print is obsessed over. Perfection is the baseline.",
    number: "04"
  }
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade in
      gsap.fromTo(cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center"
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-12 lg:px-24 bg-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
            The <span className="text-gray-500">Anatomy</span>
          </h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 perspective-[1000px]">
          {features.map((feat, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="bg-card border border-card-border p-8 md:p-12 relative overflow-hidden group cursor-default transition-colors hover:border-primary/50"
            >
              <div className="absolute -right-4 -top-8 text-[8rem] font-display font-bold text-white/5 select-none pointer-events-none transition-transform group-hover:scale-110 duration-700">
                {feat.number}
              </div>
              
              <h3 className="text-2xl font-bold font-display text-white mb-4 relative z-10">
                {feat.title}
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed relative z-10">
                {feat.description}
              </p>
              
              {/* Subtle inner glow on hover could be added via a pseudo-element following mouse, but keeping it simple for performance */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
