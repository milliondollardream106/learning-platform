// src/app/config/firebase.ts

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

// Separate required and optional config
const requiredConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const optionalConfig = {
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check required config values
const missingValues = Object.entries(requiredConfig).filter(([_, value]) => !value);
if (missingValues.length > 0) {
  console.error('Missing required Firebase configuration values:', missingValues.map(([key]) => key));
  throw new Error('Missing required Firebase configuration values');
}

// Combine configurations, only including defined optional values
const firebaseConfig = {
  ...requiredConfig,
  ...Object.fromEntries(
    Object.entries(optionalConfig).filter(([_, value]) => value !== undefined)
  ),
};

// Initialize Firebase only if it hasn't been initialized
let app: FirebaseApp;
try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

// Initialize and export auth
export const auth: Auth = getAuth(app);

// Log successful initialization
console.log('Firebase initialized successfully with config:', {
  ...firebaseConfig,
  apiKey: firebaseConfig.apiKey?.slice(0, 5) + '...' // Hide full API key in logs
});