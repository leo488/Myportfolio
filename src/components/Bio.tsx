import { motion } from 'motion/react';

export default function Bio() {
  return (
    <section className="px-8 py-40 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6"
      >
        <p className="text-[20px] text-zinc-300 font-light leading-relaxed max-w-sm">
          A super-charged creative who loves turning ideas into real products.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        <div className="space-y-6 text-[18px] md:text-[22px] font-medium leading-normal tracking-tight text-white">
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            I'm a creative product developer who genuinely loves building — brands, products, and ideas from nothing. I work closely with founders to pull ideas out of their heads and turn them into real, usable things that people can touch, use, and grow with. I'm driven by impact, especially across Africa, and excited by the power of creation — watching something go from a thought to a living product never gets old.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          >
            When I'm not designing, I'm probably deep into competitive gaming, tinkering with ideas, or just appreciating how much possibility there is in making things. Above all, I love God ❤️
          </motion.p>
        </div>
      </div>
    </section>
  );
}
