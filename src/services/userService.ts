import { doc, setDoc, getDocs, collection, query, limit } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';

export interface UserProfile {
  uid: string;
  displayName: string;
  photoURL: string;
  bio: string;
  email: string;
}

export const syncUserProfile = async () => {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    displayName: user.displayName || 'Anonymous',
    photoURL: user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`,
    email: user.email,
    bio: "I'm a designer joining the network!",
  }, { merge: true });
};

export const getAllUsers = async (): Promise<UserProfile[]> => {
  const q = query(collection(db, 'users'), limit(50));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as UserProfile);
};
