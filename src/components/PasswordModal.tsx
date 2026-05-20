import { motion } from 'motion/react';
import { useState } from 'react';
import { Lock, ArrowRight, X } from 'lucide-react';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PASSWORD = 'kora2026';

interface Props {
  projectTitle: string;
  onSuccess: () => void;
  onClose: () => void;
}

export default function PasswordModal({ projectTitle, onSuccess, onClose }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 450);
      setValue('');
    }
  };

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
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.4, ease }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-[440px] bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-10"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors"
        >
          <X size={13} className="text-zinc-500" />
        </button>

        {/* Lock icon */}
        <div className="w-11 h-11 rounded-full border border-zinc-800 flex items-center justify-center mb-7">
          <Lock size={16} className="text-zinc-400" />
        </div>

        {/* Copy */}
        <h2 className="text-[22px] font-bold tracking-tight text-white mb-2">
          This one's locked.
        </h2>
        <p className="text-[14px] text-zinc-500 leading-relaxed mb-8">
          <span className="text-zinc-300 font-medium">{projectTitle}</span> is shared selectively — not everything goes public.
          Got the password? You're in. If not,{' '}
          <a
            href="https://mail.google.com/mail/?view=cm&to=leoadams348@gmail.com&su=Project%20Access%20Request"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            reach out
          </a>{' '}
          and I'll send it over.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <motion.div
            animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <input
              type="password"
              value={value}
              onChange={e => { setValue(e.target.value); setError(false); }}
              placeholder="Password"
              autoFocus
              className={`w-full bg-zinc-900 border rounded-xl px-4 py-4 text-[15px] text-white placeholder:text-zinc-600 outline-none transition-colors ${
                error ? 'border-red-500/50 focus:border-red-500/70' : 'border-zinc-800 focus:border-zinc-600'
              }`}
            />
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-[12px] mt-2 mb-1"
            >
              Wrong password — try again or reach out for access.
            </motion.p>
          )}

          <div className="flex items-center gap-3 mt-4">
            <button
              type="submit"
              className="group flex-1 bg-white text-black font-bold text-[13px] tracking-tight py-[14px] rounded-xl hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
            >
              View project
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
