import { motion } from 'motion/react';
import { ArrowUpRight, Download } from 'lucide-react';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const EXPERIENCE = [
  {
    role: "Growth & Marketing Designer",
    company: "IPAYBTC",
    period: "June 2025 – Jan 2026",
    desc: "Driving creative direction and design for marketing campaigns that support Bitcoin adoption across Africa. Focused on improving engagement, conversion, and overall brand consistency across digital channels.",
  },
  {
    role: "Product / Interactive Designer",
    company: "FourStrides",
    period: "April 2023 – August 2024",
    desc: "As the lead interactive designer, responsible for building key interactions for the FourStrides web app. Worked closely with a cross-functional team to ensure seamless user experiences across all platforms.",
  },
  {
    role: "Lead Product Designer",
    company: "Disrupt Africa",
    period: "August 2023 – January 2024",
    desc: "Oversaw the entire design function, successfully led the Talentsphere product design project through to launch, and transformed Disrupt's brand identity. The rebrand was formally recognised by the board.",
  },
  {
    role: "Product Designer / Game Designer",
    company: "Whot Studios",
    period: "August 2022 – August 2023 (Hybrid)",
    desc: "Led end-to-end UX and brand redesign, driving product clarity, retention, and growth — scaling the app to 1M+ users post-relaunch.",
  },
  {
    role: "BootCamp Instructor",
    company: "Seedbuilders",
    period: "November 2022 – Present (Onsite)",
    desc: "Trained 70+ students with a curriculum that increased learning by over 50%. Over 50% of students secured contracts with quality designs and qualified for new opportunities.",
  },
  {
    role: "Product Designer",
    company: "Beam Innovations NIG LTD.",
    period: "May 2021 – Jun 2022 (Onsite)",
    desc: "Co-founded BEAM, leading design and project management for its app and brand. Selected as one of the top five for the Project NINJA Accelerator, received $8,000 funding.",
  },
  {
    role: "Design Intern",
    company: "POE Int'l (Design Agency)",
    period: "April 2023 – June 2023 (Hybrid)",
    desc: "Led design for Wallid Baz's internship training in Lebanon. Designed marketing and social media campaigns, resulting in a 25% increase in engagement.",
  },
];

const SKILLS = ["Illustration", "Prototyping", "Visual Design", "User Research", "Usability Testing", "Product Thinking", "Interactive Design", "Heuristic Evaluation"];
const TOOLS = ["Figma", "Miro / Mural", "HTML5 / CSS3", "Webflow / Tailwind", "Whimsical / Fig-jam", "Illustrator / Photoshop"];

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Name + title */}
      <section className="px-8 pt-40 pb-16 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="text-[15vw] md:text-[12vw] font-bold tracking-[-0.04em] leading-none mb-10"
        >
          @leo
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="w-full h-[1px] bg-zinc-800 mb-10"
        />

        <div className="flex items-end justify-between gap-8 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="text-[5vw] md:text-[2.8vw] font-bold tracking-tight leading-tight"
          >
            Creative Product Designer&nbsp;·&nbsp;Brand&nbsp;·&nbsp;UX&nbsp;·&nbsp;Motion
          </motion.h2>

          <motion.a
            href="/resume.pdf"
            download="LeonardAdams-Resume.pdf"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold border border-zinc-700 hover:border-white px-5 py-3 rounded-full transition-colors group shrink-0"
          >
            <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </motion.a>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500"
          >
            Work Experience
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-[11px] text-zinc-600"
          >
            {EXPERIENCE.length} roles
          </motion.span>
        </div>

        <div className="border-t border-zinc-900">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease, delay: i * 0.06 }}
              className="flex items-start justify-between gap-8 py-8 border-b border-zinc-900 group"
            >
              <div className="flex flex-col gap-2 max-w-[70%]">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h4 className="text-[17px] md:text-[19px] font-bold text-white tracking-tight">{item.role}</h4>
                  <span className="text-[13px] text-zinc-400 font-medium">/ {item.company}</span>
                </div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-zinc-600 font-bold">{item.period}</p>
                <p className="text-[14px] text-zinc-500 leading-relaxed mt-1 max-w-xl">{item.desc}</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-zinc-700 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mt-1 shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills + Tools + Education — 3 col */}
      <section className="px-8 py-20 max-w-7xl mx-auto border-t border-zinc-900 grid md:grid-cols-3 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 mb-6">Skills</p>
          <ul className="space-y-2">
            {SKILLS.map(s => (
              <li key={s} className="text-[15px] text-white font-medium">{s}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 mb-6">Tools</p>
          <ul className="space-y-2">
            {TOOLS.map(t => (
              <li key={t} className="text-[15px] text-white font-medium">{t}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 mb-6">Education</p>
          <div className="space-y-1">
            <p className="text-[16px] font-bold text-white">Benue State University</p>
            <p className="text-[13px] text-zinc-500">Aug 2014 — Nov 2019</p>
            <p className="text-[14px] text-zinc-400 mt-2">B.Sc. Rapid MicroBiology</p>
          </div>
        </motion.div>
      </section>

      {/* Bio */}
      <section className="px-8 py-24 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="max-w-2xl space-y-6 text-[18px] md:text-[20px] font-medium leading-relaxed tracking-tight text-white">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            I'm a creative product developer who genuinely loves building — brands, products, and ideas from nothing. I work closely with founders to pull ideas out of their heads and turn them into real, usable things that people can touch, use, and grow with. I'm driven by impact, especially across Africa, and excited by the power of creation — watching something go from a thought to a living product never gets old.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            When I'm not designing, I'm probably deep into competitive gaming, tinkering with ideas, or just appreciating how much possibility there is in making things. Above all, I love God ❤️
          </motion.p>
        </div>
      </section>

    </div>
  );
}
