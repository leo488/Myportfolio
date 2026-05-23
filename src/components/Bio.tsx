import { useState } from 'react';
import { motion } from 'motion/react';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function AnimatedEyes() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      className="inline-flex gap-[3px] select-none cursor-pointer"
      style={{ verticalAlign: '-2px' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {[0, 1].map((i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            width: 22,
            height: 15,
            background: 'white',
            borderRadius: '50%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.span
            key={hovered ? `hover-${i}` : `idle-${i}`}
            style={{
              position: 'absolute',
              width: 9,
              height: 9,
              background: '#0f0f0f',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={hovered ? { x: [-5, 5, -5, 5, 0] } : { x: [0, -5, 0, 5, 0] }}
            transition={
              hovered
                ? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 2.2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }
            }
          />
        </span>
      ))}
    </motion.span>
  );
}

export default function Bio() {
  return (
    <section className="px-4 md:px-8 py-14 md:py-32 max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-y-8 border-t border-zinc-900">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className=""
      >
        <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-600">Facts ↓</p>
      </motion.div>

      {/* Paragraphs */}
      <div className="space-y-6 text-[16px] md:text-[18px] font-medium leading-relaxed tracking-tight text-white max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
        >
          I'm a super-charged creative, I design brands and digital products with clarity, character, and motion. <AnimatedEyes />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.05 }}
          className="text-zinc-400"
        >
          Branding, product design, and motion for startups building real products — not just pretty screens.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          I'm a creative product developer who genuinely loves building — brands, products, and ideas from nothing. I work closely with founders to pull ideas out of their heads and turn them into real, usable things that people can touch, use, and grow with.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          I'm driven by impact, especially across Africa, and excited by the power of creation — watching something go from a thought to a living product never gets old.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="text-zinc-500"
        >
          When I'm not designing, I'm probably deep into competitive gaming, tinkering with ideas, or just appreciating how much possibility there is in making things. Above all, I love God ❤️
        </motion.p>
      </div>
    </section>
  );
}
