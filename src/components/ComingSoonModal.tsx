import { motion } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const BEHANCE_URL = 'https://www.behance.net/leonardadams';
const IPAYBTC_URL = 'https://www.behance.net/gallery/246745305/iPayBTC-Rebrand';

interface Props {
  projectTitle: string;
  onClose: () => void;
}

export default function ComingSoonModal({ projectTitle, onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center px-4 pb-4 md:pb-0"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, ease }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-[500px] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-8 h-8 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors"
        >
          <X size={13} className="text-zinc-500" />
        </button>

        {/* Top band — large expressive type */}
        <div className="px-8 pt-10 pb-8 border-b border-zinc-900">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-600 mb-4"
          >
            {projectTitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="text-[38px] md:text-[46px] font-bold tracking-[-0.03em] leading-[1] text-white"
          >
            You're&nbsp;early.
          </motion.h2>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
            className="text-[14px] text-zinc-400 leading-relaxed mb-6"
          >
            This case study is still being written up properly — it deserves more than a rushed write-up.{' '}
            <span className="text-white font-medium">IpayBTC</span> is the most recent one live if you want to see what that looks like.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.28 }}
            className="text-[13px] text-zinc-600 leading-relaxed mb-8"
          >
            In the meantime, my older projects live on Behance — swing by and take a look around.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.34 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={IPAYBTC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 bg-white text-black font-bold text-[13px] tracking-tight py-[14px] px-5 rounded-xl hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
            >
              View IpayBTC
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 bg-zinc-900 text-white font-bold text-[13px] tracking-tight py-[14px] px-5 rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 border border-zinc-800"
            >
              Browse Behance
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Soft note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease, delay: 0.44 }}
            className="text-center text-[11px] text-zinc-700 mt-5"
          >
            Need the full story now?{' '}
            <a
              href="https://mail.google.com/mail/?view=cm&to=leoadams348@gmail.com&su=Case%20Study%20Request"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 underline underline-offset-2 hover:text-white transition-colors"
            >
              Reach out
            </a>{' '}
            and I'll walk you through it.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
