import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

function AnimatedEyes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const springCfg = { stiffness: 60, damping: 18, mass: 0.8 };
  const x = useSpring(useTransform(mouseX, [-800, 800], [-22, 22]), springCfg);
  const y = useSpring(useTransform(mouseY, [-500, 500], [-10, 10]), springCfg);
  const rotate = useSpring(useTransform(mouseX, [-800, 800], [-12, 12]), { stiffness: 40, damping: 16 });

  return (
    <motion.span style={{ x, y, rotate, display: 'inline-block' }}>
      👀
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto pt-24 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-end justify-between pb-8 border-b border-zinc-800"
      >
        {/* Left — label + year */}
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-600 mb-4 block">
            Work ↓
          </span>
          <span className="text-[16vw] md:text-[12vw] font-bold leading-none tracking-[-0.05em]">
            2026
          </span>
        </div>

        {/* Right — Portfolio + eyes */}
        <span className="text-[16vw] md:text-[12vw] font-bold leading-none tracking-[-0.05em] flex items-end gap-3">
          Portfolio <AnimatedEyes />
        </span>
      </motion.div>
    </section>
  );
}
