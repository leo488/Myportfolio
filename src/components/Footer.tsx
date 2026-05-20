import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SOCIALS = [
  { label: 'Behance', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

const buttonVariants = {
  initial: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
  hover: {},
};

const fillVariants = {
  initial: { scaleX: 0 },
  visible: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.55, ease } },
};

const arrowVariants = {
  initial: { y: 0 },
  visible: { y: 0 },
  hover: { y: 5, transition: { duration: 0.35, ease } },
};

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 pt-12 pb-16 md:pt-16 md:pb-24 max-w-7xl mx-auto border-t border-zinc-900 flex flex-col gap-14 md:gap-20">

      {/* Big Download CTA */}
      <motion.a
        href="/resume.pdf"
        download="LeonardAdams-Resume.pdf"
        variants={buttonVariants}
        initial="initial"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-80px" }}
        className="group relative w-full border border-zinc-800 rounded-full flex items-center justify-between px-10 md:px-14 py-8 md:py-10 overflow-hidden hover:border-transparent transition-colors duration-500 cursor-pointer"
      >
        <motion.div
          variants={fillVariants}
          className="absolute inset-0 bg-white origin-left rounded-full"
        />
        <span className="relative z-10 text-[7vw] md:text-[4vw] font-bold tracking-[-0.03em] text-white group-hover:text-black transition-colors duration-500 leading-none">
          Download CV
        </span>
        <div className="relative z-10 flex items-center gap-4 shrink-0">
          <span className="hidden md:block text-[11px] uppercase tracking-[0.18em] font-bold text-zinc-500 group-hover:text-zinc-500 transition-colors duration-500">
            LeonardAdams.pdf
          </span>
          <motion.div
            variants={arrowVariants}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700 group-hover:border-black flex items-center justify-center transition-colors duration-500"
          >
            <ArrowDown size={20} className="text-white group-hover:text-black transition-colors duration-500" />
          </motion.div>
        </div>
      </motion.a>

      {/* Contact + Socials — offset to align with Skills/Facts content column */}
      <div className="flex flex-col md:flex-row items-start gap-0">
        <div className="hidden md:block md:w-1/3 shrink-0" />
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
        {/* Left — contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="space-y-3"
        >
          <a href="mailto:leoadams348@gmail.com" className="block text-[18px] md:text-[20px] font-bold tracking-tight hover:opacity-40 transition-opacity">
            leoadams348@gmail.com
          </a>
          <a href="https://thisiskora.com" target="_blank" rel="noopener noreferrer" className="block text-[18px] md:text-[20px] font-bold tracking-tight hover:opacity-40 transition-opacity">
            thisiskora.com
          </a>
          <span className="block text-[11px] uppercase tracking-[0.22em] text-zinc-600 pt-6 font-bold">
            currently residing in FCT, Abuja
          </span>
        </motion.div>

        {/* Right — socials */}
        <div className="flex flex-col gap-5">
          {SOCIALS.map(({ label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="flex items-center gap-6 group"
            >
              <span className="text-[28px] md:text-[32px] font-bold tracking-tight group-hover:opacity-40 transition-opacity">
                {label}
              </span>
              <ArrowUpRight
                className="text-zinc-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                size={22}
              />
            </motion.a>
          ))}
        </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-zinc-900" />

      {/* Big handle */}
      <div className="relative flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-[11vw] font-bold tracking-[-0.05em] text-white flex items-center gap-4 group cursor-pointer leading-none"
        >
          @leonardAdams <ArrowUpRight className="w-[9vw] h-[9vw] group-hover:translate-x-4 group-hover:-translate-y-4 transition-all opacity-20 group-hover:opacity-100" />
        </motion.div>
      </div>

    </footer>
  );
}
