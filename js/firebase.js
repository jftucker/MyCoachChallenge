import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2TNQsy8yfRX7rMrO4idKYyAEAgzM3tE",
  authDomain: "videocourse-51b92.firebaseapp.com",
  projectId: "videocourse-51b92",
  storageBucket: "videocourse-51b92.appspot.com",
  messagingSenderId: "412913380292",
  appId: "1:412913380292:web:9d626b3d75d057941ed291",
  measurementId: "G-HKJ7VJZQL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const firebase = {
  app: app,
  analytics: analytics,
  db: db,
};