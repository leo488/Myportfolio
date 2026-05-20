import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onShowNetwork: () => void;
  onShowHome: () => void;
  onShowProfile: () => void;
  isHome: boolean;
  isProfile: boolean;
  currentUser: any;
}

const NAV_LINKS = ['Work', 'Resume', 'Profile', 'Kora'];

export default function Navigation({ onShowNetwork, onShowHome, onShowProfile, isHome, isProfile, currentUser }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  const handleNavClick = (label: string) => {
    if (label === 'Work') onShowHome();
    else if (label === 'Resume') window.open('/resume.pdf', '_blank');
    else if (label === 'Profile') onShowProfile();
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        animate={{
          paddingTop: scrolled ? '14px' : '22px',
          paddingBottom: scrolled ? '14px' : '22px',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 px-5 md:px-8 grid grid-cols-[1fr_auto_1fr] items-center text-white transition-[background,border-color,backdrop-filter] duration-500 ${
          scrolled ? 'bg-black/70 backdrop-blur-2xl border-b border-white/[0.06]' : ''
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-[22px] tracking-tight cursor-pointer"
          onClick={onShowHome}
        >
          la.
        </motion.div>

        {/* Center links — desktop only */}
        <div className="hidden md:flex items-center gap-8 text-[12px] font-medium tracking-[0.03em]">
          {NAV_LINKS.map((label, i) => {
            const isActive = (label === 'Work' && isHome) || (label === 'Profile' && isProfile);
            return (
              <motion.button
                key={label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: isActive ? 1 : 0.4, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.07 }}
                whileHover={{ opacity: 1 }}
                onClick={() => handleNavClick(label)}
              >
                {label}
              </motion.button>
            );
          })}
        </div>

        {/* Right — desktop CTA / mobile hamburger */}
        <div className="flex justify-end">
          {/* Desktop */}
          <div className="hidden md:flex items-center">
            {currentUser ? (
              <div className="flex items-center gap-4">
                <button onClick={onShowNetwork} className="text-[12px] opacity-40 hover:opacity-100 transition-opacity">
                  Network
                </button>
                <div className="w-6 h-6 rounded-full border border-white/20 overflow-hidden">
                  <img src={currentUser.photoURL || ''} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            ) : (
              <a
                href="https://mail.google.com/mail/?view=cm&to=leoadams348@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[12px] opacity-40 hover:opacity-100 transition-opacity"
              >
                Work with me <ArrowUpRight size={12} className="mb-0.5" />
              </a>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col px-6 py-8"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between mb-16">
              <span className="font-bold text-[22px] tracking-tight text-white">la.</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <X size={15} className="text-white" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-2 flex-1">
              {NAV_LINKS.map((label, i) => (
                <motion.button
                  key={label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                  onClick={() => handleNavClick(label)}
                  className="text-left text-[11vw] font-bold tracking-tight text-white opacity-90 hover:opacity-40 transition-opacity py-2 border-b border-zinc-900"
                >
                  {label}
                </motion.button>
              ))}
            </nav>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
              className="pt-10"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&to=leoadams348@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Work with me <ArrowUpRight size={13} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
