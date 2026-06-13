// firebase-config.js
// ============================================
// 🔥 REPLACE THESE WITH YOUR FIREBASE CONFIG
// ============================================
// Go to Firebase Console → Project Settings → Your Apps → Config

const firebaseConfig = {
  apiKey: "AIzaSy-YOUR-KEY-HERE",
  authDomain: "YOUR-PROJECT.firebaseapp.com",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore Database
const db = firebase.firestore();

// Storage for images
const storage = firebase.storage();

console.log('🔥 Firebase Ready');
