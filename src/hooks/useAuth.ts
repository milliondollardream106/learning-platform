// src/hooks/useAuth.ts

import { useAuthState as useFirebaseAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebase';

export function useAuth() {
  const [user, loading, error] = useFirebaseAuthState(auth);
  
  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
  };
}