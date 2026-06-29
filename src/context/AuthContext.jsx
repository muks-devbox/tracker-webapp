import { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

export const AuthContext = createContext(null);

const ALLOWED_EMAIL = import.meta.env.VITE_ALLOWED_EMAIL;

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        if (ALLOWED_EMAIL && firebaseUser.email !== ALLOWED_EMAIL) {
          // Wrong account — boot immediately
          await firebaseSignOut(auth);
          setAuthError('Wrong Google account. Sign in with ' + ALLOWED_EMAIL);
          setUser(null);
        } else {
          setAuthError(null);
          setUser(firebaseUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe; // cleanup listener on unmount
  }, []);

  const signIn = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setAuthError('Sign-in failed. Please try again.');
      console.error(err);
    }
  };

  const signOut = () => firebaseSignOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, authError, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}