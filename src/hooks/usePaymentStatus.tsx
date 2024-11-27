import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useAuth } from './useAuth';

interface PaymentStatus {
  hasPaid: boolean;
  isLoading: boolean;
  plan?: 'lifetime' | 'monthly' | null;
  status?: 'active' | 'cancelled' | 'pending' | null;
  error?: string | null;
}

export function usePaymentStatus() {
  const { user } = useAuth();
  const [status, setStatus] = useState<PaymentStatus>({
    hasPaid: false,
    isLoading: true,
    plan: null,
    status: null,
    error: null
  });

  useEffect(() => {
    async function checkPaymentStatus() {
      if (!user) {
        setStatus({
          hasPaid: false,
          isLoading: false,
          plan: null,
          status: null,
          error: null
        });
        return;
      }

      try {
        const db = getFirestore();
        const customerRef = doc(db, 'customers', user.uid);
        const customerSnap = await getDoc(customerRef);

        if (!customerSnap.exists()) {
          setStatus({
            hasPaid: false,
            isLoading: false,
            plan: null,
            status: null,
            error: null
          });
          return;
        }

        const data = customerSnap.data();
        
        // Check for valid payment status
        const hasPaid = 
          data.status === 'active' || 
          data.paymentCompleted === true ||
          data.lifetimeAccess === true;

        setStatus({
          hasPaid,
          isLoading: false,
          plan: data.plan || null,
          status: data.status || null,
          error: null
        });

      } catch (error) {
        setStatus(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Error checking payment status'
        }));
      }
    }

    checkPaymentStatus();
  }, [user]);

  return status;
}