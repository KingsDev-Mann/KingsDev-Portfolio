// firebase-config.js
// Kingsley Portfolio - Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyDgBNIE8bINfA5RAdZI-l_em7va45jrP4E",
  authDomain: "kingsley-portfolio.firebaseapp.com",
  projectId: "kingsley-portfolio",
  storageBucket: "kingsley-portfolio.firebasestorage.app",
  messagingSenderId: "595390815215",
  appId: "1:595390815215:web:de2529068472326d91741a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore Database
const db = firebase.firestore();

// Storage for images
const storage = firebase.storage();

console.log('🔥 Kingsley Portfolio - Firebase Connected');
