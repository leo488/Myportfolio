import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  color?: string;
}

const PROJECTS: Project[] = [
  {
    title: "IpayBTC",
    subtitle: "OrangePure — Bitcoin education & payments",
    desc: "CASE STUDY",
    image: "ipaybtc.png",
  },
  {
    title: "ESCRO",
    subtitle: "Fintech escrow platform for secure peer-to-peer transactions",
    desc: "",
    image: "escro.png",
  },
  {
    title: "Knoq",
    subtitle: "Learning and mentorship platform for skill development and mentorship at scale",
    desc: "",
    image: "knoq.png",
  },
  {
    title: "Squaremetre",
    subtitle: "Fractional real estate ownership platform for Nigerians",
    desc: "",
    image: "sqm.png",
  },
  {
    title: "Deshadow",
    subtitle: "",
    desc: "",
    image: "deshadow.png",
  }
];

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } }
};

const mediaVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } }
};

const infoVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col md:flex-row gap-12 mb-40 group cursor-pointer"
      id={`project-${index}`}
    >
      <motion.div
        variants={mediaVariants}
        className="md:w-[70%] overflow-hidden rounded-sm bg-zinc-900 group-hover:rounded-2xl transition-all duration-700 aspect-[16/10] relative"
      >
        <motion.img
          style={{ y }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={`/thumbnails/${project.image}`}
          alt={project.title}
          className="w-full h-[115%] object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        variants={infoVariants}
        className="md:w-[30%] flex flex-col justify-between py-2"
      >
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-bold tracking-tight text-white">{project.title}</h3>
            <ArrowUpRight className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={28} />
          </div>
          <p className="text-[15px] text-zinc-500 font-medium leading-relaxed max-w-[240px]">
            {project.subtitle}
          </p>
        </div>

        {project.desc && (
          <div className="mt-8">
            <span className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-600 block mb-1">
              {project.desc}
            </span>
            <div className="w-8 h-[1px] bg-zinc-800" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={i} project={project} index={i} />
      ))}
    </section>
  );
}
