import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getAllUsers, UserProfile } from '../services/userService';
import { MessageCircle, X } from 'lucide-react';
import ChatOverlay from './ChatOverlay';
import { auth } from '../lib/firebase';

export default function Network() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <section className="min-h-screen pt-40 px-6 pb-20 max-w-7xl mx-auto bg-black text-white rounded-t-[40px]">
      <div className="mb-20">
        <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">The Creative Network</h2>
        <p className="text-xl text-gray-400 max-w-xl">Connect with other designers, shares ideas, and collaborate on projects.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.filter(u => u.uid !== auth.currentUser?.uid).map((user, i) => (
          <motion.div
            key={user.uid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all group"
            id={`user-${user.uid}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10">
                <img 
                  src={user.photoURL} 
                  alt={user.displayName} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{user.displayName}</h3>
                <span className="text-xs text-gray-500 uppercase tracking-widest italic">{user.email}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-8 line-clamp-2">
              {user.bio || "No bio yet."}
            </p>
            <button
              onClick={() => setSelectedUser(user)}
              className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
              id={`message-btn-${user.uid}`}
            >
              <MessageCircle size={18} />
              Message
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedUser && (
          <ChatOverlay 
            user={selectedUser} 
            onClose={() => setSelectedUser(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
