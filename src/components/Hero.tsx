import { MouseEvent } from "react";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TextEffect } from './ui/text-effect';
import { socials } from '../data/socials';

export default function Hero() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center text-center">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-bold leading-[1.1] tracking-tight hover:text-accent transition-colors duration-500 max-w-4xl mx-auto mb-6">
          <TextEffect delay={0.2}>
            Building digital
          </TextEffect>
          <br />
          <TextEffect delay={0.4}>
            experiences that
          </TextEffect>
          <br />
          <TextEffect delay={0.6}>
            matter.
          </TextEffect>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg md:text-xl text-secondaryText leading-relaxed hover:text-primaryText transition-colors duration-300 max-w-2xl mx-auto mb-10"
        >
          I'm a software developer exploring modern web experiences and UI/UX design. I enjoy turning ideas and real-world problems into useful digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, 'projects')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primaryText text-background rounded-lg font-medium hover:bg-white/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primaryText"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="inline-flex items-center justify-center px-6 py-3 bg-surface border border-borderDark text-primaryText rounded-lg font-medium hover:bg-borderDark/50 hover:border-accent/50 hover:text-accent hover:scale-105 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-borderDark"
          >
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mt-8 text-secondaryText"
        >
          {socials.filter(s => s.name === 'GitHub' || s.name === 'LinkedIn').map(social => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-accent hover:scale-110 hover:-translate-y-1 transition-all p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label={social.name}
            >
              <social.icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
