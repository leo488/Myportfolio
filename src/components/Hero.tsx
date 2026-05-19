import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-48 px-8 pb-32 max-w-7xl mx-auto flex flex-col justify-between">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl"
      >
        <h1 className="text-[10vw] md:text-[6.5vw] font-bold tracking-[-0.03em] leading-[0.95] mb-12 text-white" id="hero-title">
          I'm a super-charged creative, I design brands and digital products with clarity, character, and motion. 👀
        </h1>
        <p className="text-[18px] md:text-[22px] text-zinc-500 max-w-2xl font-light leading-relaxed" id="hero-desc">
          Branding, product design, and motion for startups building real products — not just pretty screens.
        </p>
      </motion.div>

      <div className="mt-20">
        <div className="w-full h-[1px] bg-zinc-800 mb-10" />
        <div className="flex justify-between items-end text-[12px] uppercase tracking-[0.2em] font-medium text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="max-w-[280px] normal-case tracking-normal text-zinc-600">A few projects where strategy, design, and execution came together.</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-lg"
            >
              ↓
            </motion.span>
          </div>
          <div className="text-[12vw] md:text-[8vw] font-bold text-zinc-900 leading-none mb-[-2vw]" id="hero-year">
            © 2026
          </div>
        </div>
      </div>
    </section>
  );
}
