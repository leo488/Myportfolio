import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { syncUserProfile } from '../services/userService';

interface NavigationProps {
  onShowNetwork: () => void;
  onShowHome: () => void;
  isHome: boolean;
  currentUser: any;
}

const NAV_LINKS = ['Work', 'Resume', 'Profile', 'Kora'];

export default function Navigation({ onShowNetwork, onShowHome, isHome, currentUser }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24);
  });

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      await syncUserProfile();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavClick = (label: string) => {
    if (label === 'Work') onShowHome();
    else if (label === 'Profile') onShowNetwork();
  };

  return (
    <motion.nav
      animate={{
        paddingTop: scrolled ? '16px' : '32px',
        paddingBottom: scrolled ? '16px' : '32px',
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 px-8 flex justify-between items-center text-white transition-[background,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-2xl border-b border-white/[0.07]'
          : 'mix-blend-difference'
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-bold text-2xl tracking-tighter cursor-pointer"
        onClick={onShowHome}
        id="nav-logo"
      >
        la.
      </motion.div>

      <div className="hidden md:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.2em]">
        {NAV_LINKS.map((label, i) => {
          const isActive = (label === 'Work' && isHome) || (label === 'Profile' && !isHome);
          return (
            <motion.button
              key={label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: isActive ? 1 : 0.4, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.07 }}
              whileHover={{ opacity: 1 }}
              onClick={() => handleNavClick(label)}
              id={`nav-${label.toLowerCase()}`}
            >
              {label}
            </motion.button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="flex items-center gap-6"
      >
        {currentUser ? (
          <div className="flex items-center gap-4">
            <button onClick={onShowNetwork} className="flex items-center gap-2 hover:opacity-50 text-[11px] font-medium uppercase tracking-widest" id="nav-network-btn">
              Network
            </button>
            <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden" id="nav-user-img">
              <img
                src={currentUser.photoURL || ''}
                alt="Profile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="text-[11px] font-medium uppercase tracking-widest flex items-center gap-1 hover:opacity-50 transition-opacity"
            id="nav-signin"
          >
            Work with me <ArrowUpRight size={14} className="mb-0.5" />
          </button>
        )}
      </motion.div>
    </motion.nav>
  );
}
