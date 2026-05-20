import { motion } from 'motion/react';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Category {
  label: string;
  count: number;
}

const CATEGORIES: Category[] = [
  { label: 'ALL',              count: 9  },
  { label: 'FINTECH',          count: 3  },
  { label: 'REAL ESTATE',      count: 2  },
  { label: 'BLOCKCHAIN',       count: 1  },
  { label: 'CREATOR ECONOMY',  count: 1  },
  { label: 'ENTERPRISE',       count: 1  },
  { label: 'MARKETING',        count: 1  },
];

export default function FilterBar() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        className="flex items-center gap-0 overflow-x-auto scrollbar-none"
      >
        {CATEGORIES.map((cat, i) => {
          const isActive = i === 0;
          return (
            <button
              key={cat.label}
              className={`
                relative shrink-0 px-5 py-4 text-[11px] font-bold tracking-[0.18em] transition-colors duration-200
                ${isActive
                  ? 'text-white border-b-2 border-white -mb-[2px]'
                  : 'text-zinc-600 hover:text-zinc-400 border-b-2 border-transparent -mb-[2px]'
                }
              `}
            >
              {cat.label}
              <sup className={`ml-[3px] text-[8px] font-bold tracking-normal ${isActive ? 'text-zinc-400' : 'text-zinc-700'}`}>
                ({cat.count})
              </sup>
            </button>
          );
        })}
      </motion.div>
    </section>
  );
}
