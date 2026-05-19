import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Message, sendMessage, subscribeToMessages } from '../services/chatService';
import { UserProfile } from '../services/userService';
import { Send, X, Loader2, MessageCircle } from 'lucide-react';
import { auth } from '../lib/firebase';

interface ChatOverlayProps {
  user: UserProfile;
  onClose: () => void;
}

export default function ChatOverlay({ user, onClose }: ChatOverlayProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = subscribeToMessages(user.uid, setMessages);
    return unsub;
  }, [user.uid]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || sending) return;

    setSending(true);
    try {
      await sendMessage(user.uid, inputText);
      setInputText('');
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl z-[100] flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden">
            <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h4 className="font-bold text-white leading-none mb-1">{user.displayName}</h4>
            <span className="text-[10px] text-green-400 uppercase tracking-widest font-bold">Online</span>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-50">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <MessageCircle size={24} />
            </div>
            <p className="text-sm text-white">No messages yet. Say hi to {user.displayName}!</p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={msg.id || i}
              className={`flex ${msg.senderId === auth.currentUser?.uid ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.senderId === auth.currentUser?.uid
                    ? 'bg-white text-black rounded-br-none'
                    : 'bg-zinc-800 text-white rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 bg-zinc-800 border-t border-white/10 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Write a message..."
          className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
          id="chat-input"
        />
        <button
          disabled={sending || !inputText.trim()}
          type="submit"
          className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
          id="chat-send-btn"
        >
          {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        </button>
      </form>
    </motion.div>
  );
}
