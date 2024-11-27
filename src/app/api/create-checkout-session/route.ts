// src/app/api/create-checkout-session/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Stripe
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

// Define price IDs
const PRICES = {
  monthly: {
    id: 'price_1QNU8gGEmyrm3vXOMhVf12Gd',
    type: 'subscription',
  },
  lifetime: {
    id: 'price_1QNUedGEmyrm3vXOQYacoWYu',
    type: 'payment',
  },
} as const;

// Initialize Firebase Admin
const initializeFirebaseAdmin = () => {
  if (getApps().length === 0) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    
    if (!projectId || !clientEmail || !privateKey) {
      throw new Error('Firebase Admin credentials are not configured');
    }
    
    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: privateKey.replace(/\\n/g, '\n')
      })
    });
  }
  return getFirestore();
};

export async function POST(request: Request) {
  try {
    console.log('Received checkout request');
    const { userId, email, plan } = await request.json();
    
    // Validate required parameters
    if (!userId || !email || !plan) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Validate plan type and get plan details
    const selectedPlan = PRICES[plan as keyof typeof PRICES];
    if (!selectedPlan) {
      return NextResponse.json(
        { error: `Invalid plan: ${plan}` },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: selectedPlan.id,
          quantity: 1,
        },
      ],
      mode: selectedPlan.type,
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/courses?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/pricing?canceled=true`,
      customer_email: email,
      client_reference_id: userId,
      allow_promotion_codes: true,
      metadata: {
        userId,
        plan,
      },
    });

    // Store session in Firebase
    const db = initializeFirebaseAdmin();
    const checkoutSessionRef = db
      .collection('customers')
      .doc(userId)
      .collection('checkout_sessions')
      .doc(session.id);

    await checkoutSessionRef.set({
      sessionId: session.id,
      url: session.url,
      created: new Date().toISOString(),
      mode: selectedPlan.type,
      metadata: {
        userId,
        plan
      }
    });

    // Return successful response with URL
    return NextResponse.json({ 
      id: session.id,
      url: session.url
    });
    
  } catch (error) {
    console.error('Checkout session error:', error);
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode || 500 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}