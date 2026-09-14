import { type Analytics, getAnalytics, isSupported, logEvent } from "firebase/analytics";
import { type FirebaseApp, getApps, initializeApp } from "firebase/app";

/**
 * Firebase config for this project's web app. The API key and app id
 * below are public, client-side identifiers by design (Firebase does
 * not treat them as secrets) — safe to ship in the browser bundle.
 * Real access control happens via Firebase Security Rules / API
 * restrictions, not by hiding this object.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;
let initPromise: Promise<Analytics | null> | null = null;

/**
 * Lazily initializes Firebase Analytics, once, on the client only.
 * `isSupported()` guards environments where the Analytics SDK can't
 * run (SSR, some browsers/privacy modes without IndexedDB) so this is
 * safe to call from anywhere without crashing the render.
 */
export function initAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined" || !firebaseConfig.measurementId) {
    return Promise.resolve(null);
  }

  if (!initPromise) {
    initPromise = isSupported().then((supported) => {
      if (!supported) return null;
      app = getApps()[0] ?? initializeApp(firebaseConfig);
      analytics = getAnalytics(app);
      return analytics;
    });
  }

  return initPromise;
}

/**
 * Fire-and-forget custom event tracking for the portfolio's key CTAs
 * (resume downloads, project links, contact clicks, etc.). Safe to
 * call even before `initAnalytics` resolves or when Analytics isn't
 * supported — it just becomes a no-op.
 */
export function trackEvent(name: string, params?: Record<string, string | number | boolean>): void {
  initAnalytics()
    .then((instance) => {
      if (instance) logEvent(instance, name, params);
    })
    .catch(() => {
      // Analytics is best-effort — never let it break the UI.
    });
}
