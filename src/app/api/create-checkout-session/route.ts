// src/app/api/create-checkout-session/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Validate the environment variable at startup
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

// Initialize Stripe with the latest stable API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia', // Use the latest stable version
});

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { plan, userId, email } = body;

    // Validate required fields
    if (!plan || !userId || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Define price IDs for each plan
    const prices = {
      monthly: {
        id: 'price_1QNU8gGEmyrm3vXOMhVf12Gd',
        type: 'subscription',
      },
      lifetime: {
        id: 'price_1QNUedGEmyrm3vXOQYacoWYu',
        type: 'payment',
      },
    } as const;

    // Validate selected plan
    const selectedPlan = prices[plan as keyof typeof prices];
    if (!selectedPlan) {
      return NextResponse.json(
        { error: `Invalid plan: ${plan}` },
        { status: 400 }
      );
    }

    // Ensure environment variables are available
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (!appUrl) {
      throw new Error('NEXT_PUBLIC_APP_URL is not defined');
    }

    // Create Checkout Session with proper error handling
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: selectedPlan.id,
          quantity: 1,
        },
      ],
      mode: selectedPlan.type,
      success_url: `${appUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/pricing`,
      customer_email: email,
      client_reference_id: userId,
      allow_promotion_codes: true,
      metadata: {
        userId,
        plan,
      },
    });

    // Return successful response
    return NextResponse.json({ 
      id: session.id,
      url: session.url // Include the URL for better integration
    });

  } catch (error) {
    // Log the error for debugging
    console.error('Stripe error:', error);

    // Handle Stripe errors
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { 
          error: error.message,
          code: error.code 
        },
        { status: error.statusCode || 500 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS(request: Request) {
  return NextResponse.json({}, { status: 200 });
}