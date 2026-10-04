// ============================================================
// POLYTECHNIC HUB - FIREBASE CONFIGURATION
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-storage.js";

import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";


// ============================================================
// FIREBASE CONFIG
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyBkoGGaTDkgnbQTGwqwO_Ktq6-LcWm8fig",
  authDomain: "polytechnic-hub-eb25b.firebaseapp.com",
  projectId: "polytechnic-hub-eb25b",
  storageBucket: "polytechnic-hub-eb25b.firebasestorage.app",
  messagingSenderId: "496226915082",
  appId: "1:496226915082:web:efd70f15161c61c17c20f3",
  measurementId: "G-D78LLY62C1"
};


// ============================================================
// INITIALIZE FIREBASE
// ============================================================

const app = initializeApp(firebaseConfig);


// ============================================================
// FIREBASE SERVICES
// ============================================================

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// ============================================================
// ANALYTICS
// ============================================================

let analytics = null;

try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn("Firebase Analytics unavailable:", error);
}


// ============================================================
// EXPORT
// ============================================================

export {
  app,
  auth,
  db,
  storage,
  analytics
};