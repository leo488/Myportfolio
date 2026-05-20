import { motion } from 'motion/react';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Bio() {
  return (
    <section className="px-4 md:px-8 py-14 md:py-32 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-16 border-t border-zinc-900">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className="md:w-1/3 shrink-0"
      >
        <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-600">Facts ↓</p>
      </motion.div>

      {/* Paragraphs */}
      <div className="md:w-2/3 space-y-6 text-[16px] md:text-[18px] font-medium leading-relaxed tracking-tight text-white max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
        >
          I'm a creative product developer who genuinely loves building — brands, products, and ideas from nothing. I work closely with founders to pull ideas out of their heads and turn them into real, usable things that people can touch, use, and grow with.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          I'm driven by impact, especially across Africa, and excited by the power of creation — watching something go from a thought to a living product never gets old.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="text-zinc-500"
        >
          When I'm not designing, I'm probably deep into competitive gaming, tinkering with ideas, or just appreciating how much possibility there is in making things. Above all, I love God ❤️
        </motion.p>
      </div>
    </section>
  );
}
