import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Network from './components/Network';

export default function App() {
  const [view, setView] = useState<'home' | 'network'>('home');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black text-white font-mono text-xs uppercase tracking-widest animate-pulse">
        Initializing...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation 
        currentUser={user} 
        isHome={view === 'home'} 
        onShowHome={() => setView('home')} 
        onShowNetwork={() => setView('network')} 
      />

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Projects />
            <Skills />
            <Bio />
            <Footer />
          </motion.main>
        ) : (
          <motion.main
            key="network"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Network />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

