import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dualriftLogo from "@assets/IMG_2776_1779423085437.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // --- GSAP Animations ---
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.8 }); // Wait for loading screen

      tl.fromTo(logoRef.current, 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.6"
      )
      .fromTo(subheadRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.4"
      );

      // Parallax on scroll
      gsap.to(mountRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: mountRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // --- Three.js Setup ---
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const isMobile = width < 768;

    let animFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let onDocumentMouseMove: ((event: MouseEvent) => void) | null = null;
    let handleResize: (() => void) | null = null;

    // Dispose helpers captured per-run
    let geometry1: THREE.IcosahedronGeometry | null = null;
    let material1: THREE.MeshBasicMaterial | null = null;
    let geometry2: THREE.IcosahedronGeometry | null = null;
    let material2: THREE.MeshBasicMaterial | null = null;
    let particlesGeo: THREE.BufferGeometry | null = null;
    let particlesMat: THREE.PointsMaterial | null = null;

    try {
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.001);

      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 30;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      geometry1 = new THREE.IcosahedronGeometry(12, isMobile ? 1 : 2);
      material1 = new THREE.MeshBasicMaterial({ 
        color: 0x444444, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const sphere1 = new THREE.Mesh(geometry1, material1);
      
      geometry2 = new THREE.IcosahedronGeometry(14, isMobile ? 1 : 2);
      material2 = new THREE.MeshBasicMaterial({ 
        color: 0x1E90FF,
        wireframe: true,
        transparent: true,
        opacity: 0.1
      });
      const sphere2 = new THREE.Mesh(geometry2, material2);

      const group = new THREE.Group();
      group.add(sphere1);
      group.add(sphere2);
      scene.add(group);

      particlesGeo = new THREE.BufferGeometry();
      const particleCount = isMobile ? 300 : 1000;
      const posArray = new Float32Array(particleCount * 3);
      for(let i=0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
      }
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesMat = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xffffff,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      });
      const particles = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particles);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      const windowHalfX = width / 2;
      const windowHalfY = height / 2;

      onDocumentMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
      };

      if (!isMobile) {
        document.addEventListener('mousemove', onDocumentMouseMove);
      }

      const animate = () => {
        animFrameId = requestAnimationFrame(animate);

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        group.rotation.y += 0.002;
        group.rotation.x += 0.001;
        
        sphere1.rotation.y += 0.001;
        sphere2.rotation.x -= 0.002;

        particles.rotation.y += 0.0005;

        if (!isMobile) {
          group.rotation.y += 0.05 * (targetX - group.rotation.y);
          group.rotation.x += 0.05 * (targetY - group.rotation.x);
          
          camera.position.x += (mouseX * 0.01 - camera.position.x) * 0.05;
          camera.position.y += (-mouseY * 0.01 - camera.position.y) * 0.05;
          camera.lookAt(scene.position);
        }

        renderer!.render(scene, camera);
      };

      animate();

      handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer!.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);
    } catch (_err) {
      // WebGL not available — CSS animated background remains as fallback
    }

    return () => {
      ctx.revert();
      cancelAnimationFrame(animFrameId);
      if (handleResize) window.removeEventListener('resize', handleResize);
      if (onDocumentMouseMove && !isMobile) {
        document.removeEventListener('mousemove', onDocumentMouseMove);
      }
      if (renderer) {
        if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
      geometry1?.dispose();
      material1?.dispose();
      geometry2?.dispose();
      material2?.dispose();
      particlesGeo?.dispose();
      particlesMat?.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Three.js Background */}
      <div ref={mountRef} className="absolute inset-0 z-0 bg-black" />
      
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 mt-16 max-w-5xl mx-auto">
        <img 
          ref={logoRef}
          src={dualriftLogo} 
          alt="DualRift" 
          className="w-48 md:w-64 lg:w-80 object-contain mb-8 mix-blend-screen opacity-0"
        />
        
        <h1 ref={headlineRef} className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase opacity-0 mix-blend-difference drop-shadow-2xl">
          Built <span className="text-primary">Different</span>
        </h1>
        
        <p ref={subheadRef} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-sans opacity-0">
          Raw power meets precision. Luxury streetwear forged for the apex predator. Welcome to the rift.
        </p>
        
        <a 
          ref={ctaRef as React.RefObject<HTMLAnchorElement>}
          href="https://www.instagram.com/dual.rift"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest overflow-hidden opacity-0 hover:text-white transition-colors duration-300"
          data-testid="link-shop-hero"
        >
          <span className="relative z-10">Shop the Drop</span>
          <div className="absolute inset-0 h-full w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full z-0" />
        </a>
      </div>
    </section>
  );
}
