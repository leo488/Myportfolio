import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PasswordModal from './PasswordModal';
import ComingSoonModal from './ComingSoonModal';

interface Project {
  title: string;
  subtitle: string;
  desc: string[];
  images: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    title: "IpayBTC",
    subtitle: "OrangePure — Bitcoin education & payments",
    desc: ["CASE STUDY"],
    images: [
      "ipaybtc.png",
      "ipay_thumb 01.png",
      "ipay_thumb 03.png",
      "ipay_thumb 05.png",
    ],
    link: "https://www.behance.net/gallery/246745305/iPayBTC-Rebrand",
  },
  {
    title: "Squaremetre",
    subtitle: "Fractional real estate ownership platform for Nigerians",
    desc: ["STRATEGY", "PRODUCT DESIGN / DEV", "LED THE TEAM", "BRANDING"],
    images: [
      "sqm.png",
      "01Squaremetre_thumbnail.png",
      "02Squaremetre_thumbnail.png",
    ],
    link: "https://www.behance.net/gallery/249865443/Squaremetre-BrandProduct-development-%28crash%29",
  },
  {
    title: "TagMi",
    subtitle: "Creator economy platform that returns value to those who build audiences online",
    desc: ["BRAND STRATEGY", "PRODUCT DESIGN"],
    images: [
      "tagmi_01.png",
      "tagmi_02.png",
      "tagmi_03.png",
      "tagmi_04.png",
    ],
  },
  {
    title: "3 Projects",
    subtitle: "Architects of enterprise transformation — technology strategy that helps large organizations grow revenue and optimize cost at scale",
    desc: ["BRAND IDENTITY", "STRATEGY", "MARKET POSITIONING", "WEB DEVELOPMENT"],
    images: [
      "3projects _thumbnail 01.png",
      "3projects _thumbnail 02.png",
      "3projects _thumbnail 03.png",
      "3projects _thumbnail 04.png",
    ],
  },
  {
    title: "Refreeg",
    subtitle: "Blockchain-powered donation platform — full UX overhaul and market repositioning following a ₦50M funding raise",
    desc: ["UX STRATEGY", "MARKET POSITIONING", "PRODUCT REDESIGN"],
    images: [
      "refreeG_thumbnail.png",
      "refreeG_thumbnail-1.png",
      "refreeG_thumbnail-2.png",
      "refreeG_thumbnail-3.png",
    ],
  },
  {
    title: "ESCRO",
    subtitle: "Fintech escrow platform for secure peer-to-peer transactions",
    desc: ["PRODUCT DESIGN"],
    images: [
      "escro.png",
      "escro_thumbnail.png",
      "escro_thumbnail-1.png",
      "escro_thumbnail-2.png",
    ],
  },
  {
    title: "Cleon",
    subtitle: "Import & export platform for premium cleaning equipment — bridging global trade with an integrated cleaning services directory",
    desc: ["BRAND IDENTITY", "STRATEGY"],
    images: [
      "cleon_thumbnail.png",
      "cleon_thumbnail-1.png",
      "cleon_thumbnail-2.png",
    ],
  },
  // {
  //   title: "Uhubu",
  //   subtitle: "International marketing studio helping businesses penetrate African markets — timeless creative built on ancient wisdom",
  //   desc: ["BRAND IDENTITY", "STRATEGY", "MARKET POSITIONING"],
  //   images: [
  //     "ohobu_thumbnail01.png",
  //     "ohobu_thumbnail02.png",
  //     "ohobu_thumbnail03.png",
  //   ],
  // },
  // {
  //   title: "FourStrides",
  //   subtitle: "Making apartment rentals in Nigeria accessible, transparent, and easy",
  //   desc: ["PRODUCT DESIGN", "UX DESIGN"],
  //   images: [
  //     "fourstrides_thumbnail 01.png",
  //     "fourstrides_thumbnail 02.png",
  //   ],
  // },
  {
    title: "Knoq",
    subtitle: "Learning and mentorship platform for skill development and mentorship at scale",
    desc: ["PRODUCT DESIGN", "UX DESIGN"],
    images: ["knoq.png"],
  },
  {
    title: "Deshadow",
    subtitle: "",
    desc: ["BRAND IDENTITY"],
    images: ["deshadow.png"],
  }
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface CardProps {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}

function ProjectCard({ project, index, onProjectClick }: CardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  const isInView = useInView(ref, { margin: '100px' });
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = project.images.length > 1;

  useEffect(() => {
    if (!hasMultiple || !isInView) return;
    const baseInterval = 3800 + (index % 5) * 650;
    const startDelay = index * 1100;
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setImgIndex(prev => (prev + 1) % project.images.length);
      }, baseInterval);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [project.images.length, hasMultiple, index, isInView]);

  const col = index % 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease, delay: col * 0.12 }}
      onClick={() => onProjectClick(project)}
      className="group flex flex-col cursor-pointer"
    >
      {/* Tag above image */}
      <div className="mb-2 min-h-[16px]">
        {project.desc.length > 0 && (
          <span className="text-[9px] uppercase tracking-[0.22em] font-bold text-zinc-500">
            {project.desc[0]}
          </span>
        )}
      </div>

      {/* Thumbnail */}
      <div className="overflow-hidden bg-zinc-900 aspect-[16/10] relative">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div className="relative w-full h-full scale-[1.1] group-hover:scale-[1.04] transition-transform duration-700">
            <AnimatePresence mode="sync">
              <motion.img
                key={imgIndex}
                src={`/thumbnails/${encodeURIComponent(project.images[imgIndex])}`}
                alt={project.title}
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Info below image */}
      <div className="mt-5">
        <div className="flex justify-between items-start mb-1.5">
          <h3 className="text-[17px] font-bold tracking-tight text-white leading-tight">
            {project.title}
          </h3>
          <ArrowUpRight
            className="text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
            size={18}
          />
        </div>
        {project.subtitle && (
          <p className="text-[13px] text-zinc-500 leading-relaxed mb-3">
            {project.subtitle}
          </p>
        )}
        {project.desc.length > 1 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {project.desc.slice(1).map((tag) => (
              <span key={tag} className="text-[9px] uppercase tracking-[0.18em] font-bold text-zinc-700">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [lockedModal, setLockedModal] = useState<{ link: string; title: string } | null>(null);
  const [comingModal, setComingModal] = useState<string | null>(null);

  const handleProjectClick = (project: Project) => {
    if (project.link) {
      // setLockedModal({ link: project.link, title: project.title });
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      setComingModal(project.title);
    }
  };

  const handleUnlock = () => {
    if (lockedModal) {
      window.open(lockedModal.link, '_blank', 'noopener,noreferrer');
      setLockedModal(null);
    }
  };

  return (
    <section className="px-4 md:px-8 pt-8 md:pt-16 pb-16 md:pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-20">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            onProjectClick={handleProjectClick}
          />
        ))}
      </div>

      <AnimatePresence>
        {lockedModal && (
          <PasswordModal
            projectTitle={lockedModal.title}
            onSuccess={handleUnlock}
            onClose={() => setLockedModal(null)}
          />
        )}
        {comingModal && (
          <ComingSoonModal
            projectTitle={comingModal}
            onClose={() => setComingModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
