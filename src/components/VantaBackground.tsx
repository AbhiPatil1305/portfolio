import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VantaBackground() {
  const [, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  
  // Rotating effect on scroll
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 24]);

  useEffect(() => {
    let effect: any = null;
    
    // Polling interval to wait for the Vanta CDN script to load
    const intervalId = setInterval(() => {
      if (window.VANTA && window.VANTA.RINGS && !effect) {
        clearInterval(intervalId);
        effect = window.VANTA.RINGS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x8b5cf6, // Purple accent color
          backgroundColor: 0x09090b, // Dark theme background
          backgroundAlpha: 1.0
        });
        setVantaEffect(effect);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-auto overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ rotate }}
        className="relative w-[200vw] h-[200vh] flex-shrink-0 origin-center"
      >
        <div ref={vantaRef} className="absolute inset-0" />
      </motion.div>
      {/* Overlay to dim the rings slightly so text remains completely legible */}
      <div className="absolute inset-0 bg-background/75 pointer-events-none" />
    </div>
  );
}
