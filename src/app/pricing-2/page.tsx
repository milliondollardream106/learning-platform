// app/pricing/page.tsx"use client";

"use client";
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { auth } from '@/config/firebase';
import { useAuth  } from '@/hooks/useAuth';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PricingPage() {

  const [isLoading, setIsLoading] = useState(false);
  const { user, loading } = useAuth();

  const handleSubscription = async () => {
    try {
      setIsLoading(true);
  
      if (!user) {
        alert('Please sign in to continue');
        return;
      }
  
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.uid,
          email: user.email,
          plan: 'monthly', // Ensure this matches your defined plans
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server Error:', errorText);
        alert('Failed to create checkout session. Please try again.');
        return;
      }
  
      const session = await response.json();
  
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (error) {
        console.error('Stripe error:', error);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  
    return (
      <div className="min-h-screen bg-white">
        {/* Pricing Header */}
        <div className="py-16 text-center">
          <h1 className="pt-20 text-black text-[40px] font-bold mb-4">
            Our <span className="text-blue-600">Pricing</span>
          </h1>
          <div className="relative">
    
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 mt-8 px-4">
            code2career is an AI powered interactive learning platform that offers a
            streamlined, three-step process designed to help you land a job in technology.
          </p>
        </div>
  
        {/* Pricing Card */}
        <div className="max-w-lg mx-auto px-4 pb-20">
          <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-6 right-6">
              {/* <span className="bg-white text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                MOST POPULAR
              </span> */}
            </div>
  
            {/* Price */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">All-Access Pass</h2>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold">$120</span>
                <span className="ml-2 text-lg opacity-80">/year</span>
              </div>
              <p className="mt-2 text-sm opacity-80">Billed annually</p>
            </div>
  
            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Complete Course Access</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Interactive Coding Environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Career Coaching Sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Project-Based Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Interview Preparation</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Community Access</span>
              </div>
            </div>
  
            {/* CTA Button */}
            <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Choose plan
            </button>
  
            {/* Money Back Guarantee */}
            <p className="text-center text-sm mt-6 opacity-80">
              30-day money-back guarantee
            </p>
          </div>
        </div>
  
        {/* Additional Info */}
        <div className="max-w-2xl mx-auto px-4 pb-20 text-center">
          <h3 className="text-black text-xl font-semibold mb-4">
            Everything you need to start your tech career
          </h3>
          <p className="text-gray-600">
            Join thousands of students who have successfully transitioned into tech careers
            through our comprehensive learning platform.
          </p>
        </div>
      </div>
    );
  }