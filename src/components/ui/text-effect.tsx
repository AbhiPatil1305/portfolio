import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type TextEffectProps = {
  children: string;
  className?: string;
  
  delay?: number;
};


const defaultItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export function TextEffect({
  children,
  className,
  
  delay = 0,
}: TextEffectProps) {
  const words = children.split(' ');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: delay },
        },
      }}
      className={cn('inline-flex flex-wrap', className)}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-flex whitespace-pre">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={defaultItemVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {index < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.div>
  );
}
