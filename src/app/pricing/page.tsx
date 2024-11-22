"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useRouter } from 'next/navigation';
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "@/hooks/useAuth";
import Included from "./included";

// Initialize Stripe outside component to avoid recreation
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Type definitions
type PlanType = "monthly" | "lifetime";

interface CheckoutResponse {
  id: string;
  url?: string;
  error?: string;
  code?: string;
}

export default function PricingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleSubscription = async (plan: PlanType) => {
    try {
      setError(null);
      
      if (!user) {
        sessionStorage.setItem('intendedPlan', plan);
        router.push('/signup?redirect=/pricing');
        return;
      }

      setIsLoading(true);

      // Make the API call
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          plan,
          userId: user.uid,
          email: user.email,
        }),
      });

      const data: CheckoutResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment initialization failed');
      }

      // If Stripe returns a URL, use it directly
      if (data.url) {
        window.location.href = data.url;
        return;
      }

      // Otherwise, use redirectToCheckout
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (stripeError) {
        throw stripeError;
      }

    } catch (error) {
      console.error('Payment Error:', error);
      
      const userMessage = error instanceof Error
        ? `Payment failed: ${error.message}`
        : 'An unexpected error occurred';
      
      setError(userMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to handle redirect back from login
  useEffect(() => {
    if (user && !loading) {
      const intendedPlan = sessionStorage.getItem('intendedPlan') as PlanType | null;
      if (intendedPlan) {
        handleSubscription(intendedPlan);
        sessionStorage.removeItem('intendedPlan');
      }
    }
  }, [user, loading]);

  return (
    <div className="min-h-screen bg-white">
      {/* Pricing Header */}
      <div className="pt-48 text-center">
        <h1 className="text-black pt-6 text-5xl font-bold mb-4">
          {/* Our <span className="text-blue-600">Pricing</span> */}
          The <span className="text-blue-600">Smartest </span>  Investment You'll Ever Make.
        </h1>
        <p className="pb-28 max-w-2xl mx-auto text-gray-600 mt-8 px-4">
        Code2Career is an AI-driven interactive learning platform dedicated to making programming and computer science education accessible to all. We're committed to continuously expanding our content offerings, ensuring that students have the resources they need to succeed in these fields
        </p>
      </div>

      {/* Error Display */}
      {error && (
        <div className="max-w-2xl mx-auto -mt-20 mb-8">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      )}

      {/* Pricing Cards Container */}
      <div className="relative mx-auto px-4 pb-20">
        {/* Background Container */}
        <div className="absolute left-4 right-4 h-[550px] bg-gray-100 rounded-3xl transform translate-y-12 w-[900px] mx-auto" />

        {/* Cards Grid */}
        <div className="relative flex justify-center gap-8 items-start">
          {/* Monthly Plan */}
          <div className="w-[400px] rounded-3xl p-10 transform translate-y-0">
            <div className="pt-14 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 text-left">
                Monthly Access
              </h2>
              <div className="mt-4 text-left flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$15</span>
                <span className="text-gray-600 ml-2">/month</span>
                <span className="ml-3 text-lg line-through font-medium text-gray-400">$22/mo</span>
                <span className="ml-2 text-lg text-green-600 font-medium">Save 32%</span>
              </div>
              <p className="text-left text-gray-500 mt-2 pb-8">Billed annually</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Complete Course Access",
                "Interactive Coding Environment",
                "Career Coaching Sessions",
                "Project-Based Learning",
                "Interview Preparation",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleSubscription("monthly")}
              disabled={isLoading || loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : loading ? "Loading..." : "Choose plan"}
            </button>
          </div>

          {/* Lifetime Plan */}
          <div className="w-[400px] bg-blue-600 rounded-3xl p-10 text-white shadow-xl shadow-blue-200 transform translate-y-0">
            <div className="pt-8 absolute -top-2 right-8">
              <span className="font-semibold text-md bg-white text-blue-600 px-4 py-2 rounded-full">
                MOST POPULAR
              </span>
            </div>

            <div className="mb-6 pt-12">
              <h2 className="pb-2 text-2xl font-bold text-left">Lifetime Access</h2>
              <div className="mt-4 text-left flex items-baseline">
                <span className="text-5xl font-bold">$300</span>
                <span className="ml-2">one-time</span>
                <span className="ml-3 text-lg line-through opacity-75">$600</span>
                <span className="ml-2 text-sm bg-white text-blue-600 px-2 py-0.5 rounded-full font-medium">50% OFF</span>
              </div>
              <p className="text-left mt-2 pb-8">Pay once, own forever</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Everything in Monthly Plan",
                "Lifetime Updates",
                "Priority Support",
                "Exclusive Community Access",
                "Advanced Learning Materials",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleSubscription("lifetime")}
              disabled={isLoading || loading}
              className="w-full bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : loading ? "Loading..." : "Choose plan"}
            </button>

          </div>
        </div>
      </div>

      {/* Included */}
      <Included />

      

    </div>
  );
}