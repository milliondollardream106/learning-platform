"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Eye, EyeOff } from 'lucide-react';
import { auth } from '@/config/firebase';
import { 
  signInWithPopup, 
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut 
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/pricing'); // Redirect to dashboard if logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      const provider = new GoogleAuthProvider();
      
      // Configure Google sign-in
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign in successful:', result.user.email);
      router.push('/pricing');
    } catch (error: any) {
      console.error('Google sign in error:', error);
      
      switch (error.code) {
        case 'auth/popup-blocked':
          setError('Please enable popups for this website to sign in.');
          break;
        case 'auth/popup-closed-by-user':
          setError('Sign-in was cancelled.');
          break;
        case 'auth/unauthorized-domain':
          setError('This domain is not authorized for sign-in. Please contact support.');
          break;
        default:
          setError('An error occurred during sign in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('GitHub sign in successful:', result.user.email);
      router.push('/dashboard');
    } catch (error: any) {
      console.error('GitHub sign in error:', error);
      setError('An error occurred during GitHub sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const LoginForm = () => (
    <div className="space-y-4 mb-8">
      <button
        className="w-full h-12 relative border-2 rounded-lg hover:bg-gray-50 flex items-center border-blue-600 justify-center gap-3 text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleGoogleSignIn}
        disabled={loading}
      >
        <Image
          src="/Google__G__logo.svg"
          alt="Google"
          width={20}
          height={20}
        />
        {loading ? 'Signing in...' : 'Continue with Google'}
      </button>
      <button
        className="w-full h-12 relative border-2 rounded-lg hover:bg-gray-50 flex items-center border-blue-600 justify-center gap-3 text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleGithubSignIn}
        disabled={loading}
      >
        <Github size={20} />
        {loading ? 'Signing in...' : 'Continue with GitHub'}
      </button>
      {error && (
        <div className="text-red-500 text-sm text-center mt-2">
          {error}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Code2Career Logo"
              width={240}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-white w-full rounded-2xl">
          <div className="text-center mb-8">
            <h1 className="text-black text-3xl font-bold mb-2">
              {isLogin ? 'Welcome Back' : 'Welcome to Code2Career'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? 'Sign in to continue' : 'Sign up to get started'}
            </p>
          </div>

          {/* Auth Buttons */}
          <div className="space-y-4 mb-8">
            <button
              className="w-full h-12 relative border-2 rounded-lg hover:bg-gray-50 flex items-center border-blue-600 justify-center gap-3 text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <Image
                src="/Google__G__logo.svg"
                alt="Google"
                width={20}
                height={20}
              />
              {loading ? 'Signing in...' : 'Continue with Google'}
            </button>
            {/* <button
              className="w-full h-12 relative border-2 rounded-lg hover:bg-gray-50 flex items-center border-blue-600 justify-center gap-3 text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleGithubSignIn}
              disabled={loading}
            >
              <Github size={20} />
              {loading ? 'Signing in...' : 'Continue with GitHub'}
            </button> */}
            {error && (
              <div className="text-red-500 text-sm text-center mt-2">
                {error}
              </div>
            )}
          </div>

          {!isLogin && (
            <div className="text-center text-sm text-gray-600 mb-8">
              By signing in, you agree to Code2Career's{' '}
              <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                terms of service
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                privacy policy
              </Link>
            </div>
          )}
        </div>

        {/* Toggle Login/Signup */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

