import { 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  serverTimestamp, 
  doc, 
  updateDoc, 
  setDoc,
  getDoc
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase';

export interface Message {
  id?: string;
  text: string;
  senderId: string;
  receiverId: string;
  createdAt: any;
  conversationId: string;
}

export interface Conversation {
  id?: string;
  participants: string[];
  lastMessage: string;
  updatedAt: any;
}

export const sendMessage = async (receiverId: string, text: string) => {
  const senderId = auth.currentUser?.uid;
  if (!senderId) throw new Error("Not authenticated");

  // Sorted conversation ID to ensure uniqueness between two users
  const conversationId = [senderId, receiverId].sort().join('_');

  const convRef = doc(db, 'conversations', conversationId);
  const convSnap = await getDoc(convRef);

  if (!convSnap.exists()) {
    await setDoc(convRef, {
      participants: [senderId, receiverId],
      lastMessage: text,
      updatedAt: serverTimestamp(),
    });
  } else {
    await updateDoc(convRef, {
      lastMessage: text,
      updatedAt: serverTimestamp(),
    });
  }

  const messageData = {
    text,
    senderId,
    receiverId,
    createdAt: serverTimestamp(),
    conversationId,
  };

  await addDoc(collection(db, 'conversations', conversationId, 'messages'), messageData);
};

export const subscribeToMessages = (receiverId: string, callback: (messages: Message[]) => void) => {
  const senderId = auth.currentUser?.uid;
  if (!senderId) return () => {};

  const conversationId = [senderId, receiverId].sort().join('_');
  const q = query(
    collection(db, 'conversations', conversationId, 'messages'),
    orderBy('createdAt', 'asc')
  );

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
    callback(messages);
  });
};

export const subscribeToConversations = (callback: (conversations: Conversation[]) => void) => {
  const userId = auth.currentUser?.uid;
  if (!userId) return () => {};

  const q = query(
    collection(db, 'conversations'),
    where('participants', 'array-contains', userId),
    orderBy('updatedAt', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const conversations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Conversation));
    callback(conversations);
  });
};
