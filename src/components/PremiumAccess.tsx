"use client";

import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

interface PremiumAccessProps {
  children: ReactNode;
}

export function PremiumAccess({ children }: PremiumAccessProps) {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      if (!user) {
        setHasAccess(false);
        setIsChecking(false);
        return;
      }

      try {
        const db = getFirestore();
        const customerRef = doc(db, 'customers', user.uid);
        const customerDoc = await getDoc(customerRef);

        if (customerDoc.exists()) {
          const data = customerDoc.data();
          // Check if user has lifetime access or active subscription
          setHasAccess(
            data.lifetimeAccess === true || 
            data.subscriptionStatus?.status === 'active'
          );
        } else {
          setHasAccess(false);
        }
      } catch (error) {
        console.error('Error checking access:', error);
        setHasAccess(false);
      }

      setIsChecking(false);
    }

    checkAccess();
  }, [user]);

  // Show loading spinner while checking
  if (authLoading || isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Show upgrade prompt if no access
  if (!hasAccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Content</h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          {!user 
            ? "Please log in to access this content."
            : "This content is available exclusively to our premium members."
          }
        </p>
        <div className="space-x-4">
          {!user ? (
            <>
              <button
                onClick={() => router.push('/signup')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </button>
              <button
                onClick={() => router.push('/login')}
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors"
              >
                Login
              </button>
            </>
          ) : (
            <button
              onClick={() => router.push('/pricing')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Upgrade Now
            </button>
          )}
        </div>
      </div>
    );
  }

  // User has access, show the content
  return <>{children}</>;
}