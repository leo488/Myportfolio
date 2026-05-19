import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const SOCIALS = [
  { label: 'Behance', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Linkedin', href: '#' },
];

export default function Footer() {
  return (
    <footer className="px-8 py-40 max-w-7xl mx-auto flex flex-col gap-40">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <a href="mailto:leoadams348@gmail.com" className="block text-2xl font-bold tracking-tight hover:opacity-50 transition-opacity">leoadams348@gmail.com</a>
          <a href="https://thisiskora.com" className="block text-2xl font-bold tracking-tight hover:opacity-50 transition-opacity">thisiskora.com</a>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-600 mt-8 font-bold">currently residing in FCT, Abuja</span>
        </motion.div>

        <div className="flex flex-col gap-8 w-full md:w-auto">
          {SOCIALS.map(({ label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="flex items-center justify-between gap-32 group pb-2 border-b border-zinc-900 hover:border-white transition-colors"
            >
              <span className="text-[32px] md:text-[40px] font-bold tracking-tighter">{label}</span>
              <ArrowUpRight className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-zinc-900" />

      <div className="relative flex justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[12vw] font-bold tracking-[-0.05em] text-white flex items-center gap-4 group cursor-pointer leading-none"
        >
          @leonardAdams <ArrowUpRight className="w-[10vw] h-[10vw] group-hover:translate-x-4 group-hover:-translate-y-4 transition-all opacity-20 group-hover:opacity-100" />
        </motion.div>
      </div>
    </footer>
  );
}
