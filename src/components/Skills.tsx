import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

const SKILLS = [
  "Brand identity design",
  "UI design (web & mobile)",
  "UX flows & wireframing",
  "Motion design",
  "Product prototyping (Figma)",
  "Creative direction",
  "Design for startups & MVPs"
];

export default function Skills() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-40 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
      <div className="md:w-1/3">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-600">
          Focus <ArrowDownRight size={13} />
        </div>
      </div>
      <div className="md:w-2/3 flex flex-col">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="group py-4 border-b border-zinc-800 flex justify-between items-end hover:border-white transition-colors cursor-default"
          >
            <span className="text-3xl md:text-[5vw] font-bold tracking-tighter leading-none text-zinc-300 group-hover:text-white transition-colors">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
