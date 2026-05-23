import { useEffect, useRef } from "react";
import gsap from "gsap";
import dualriftIcon from "@assets/IMG_2776_(1)_1779423085437.jpeg";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
          onComplete();
        }
      });

      // Shimmer/Pulse effect on logo
      tl.to(logoRef.current, {
        scale: 1.05,
        opacity: 0.8,
        duration: 0.5,
        yoyo: true,
        repeat: 2,
        ease: "power1.inOut"
      })
      // Pause
      .to(logoRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      })
      // Split panels
      .to([leftPanelRef.current, rightPanelRef.current], {
        xPercent: (i) => (i === 0 ? -100 : 100),
        duration: 1,
        ease: "power4.inOut",
        stagger: 0
      }, "-=0.2");
      
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div 
        ref={leftPanelRef} 
        className="absolute inset-y-0 left-0 w-1/2 bg-black origin-left"
      />
      <div 
        ref={rightPanelRef} 
        className="absolute inset-y-0 right-0 w-1/2 bg-black origin-right"
      />
      
      <img 
        ref={logoRef}
        src={dualriftIcon} 
        alt="DualRift Loading" 
        className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-contain opacity-50"
      />
    </div>
  );
}
