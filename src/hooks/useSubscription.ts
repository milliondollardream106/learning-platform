import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useAuth } from './useAuth';

interface SubscriptionStatus {
  isSubscribed: boolean;
  isLifetime: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useSubscription = () => {
  const { user } = useAuth();
  const [status, setStatus] = useState<SubscriptionStatus>({
    isSubscribed: false,
    isLifetime: false,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const checkSubscription = async () => {
      if (!user) {
        setStatus({
          isSubscribed: false,
          isLifetime: false,
          isLoading: false,
          error: null
        });
        return;
      }

      try {
        const db = getFirestore();
        const customerRef = doc(db, 'customers', user.uid);
        const customerDoc = await getDoc(customerRef);

        if (!customerDoc.exists()) {
          setStatus({
            isSubscribed: false,
            isLifetime: false,
            isLoading: false,
            error: null
          });
          return;
        }

        const data = customerDoc.data();
        const subscriptionData = data?.subscriptionStatus;
        const lifetimeAccess = data?.lifetimeAccess;

        setStatus({
          isSubscribed: subscriptionData?.status === 'active' || lifetimeAccess,
          isLifetime: !!lifetimeAccess,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setStatus({
          isSubscribed: false,
          isLifetime: false,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to check subscription'
        });
      }
    };

    checkSubscription();
  }, [user]);

  return status;
};