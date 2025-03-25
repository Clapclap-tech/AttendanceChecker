import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQi2cC3ch45hKZ6JSiK9imXPujoJ7AIRA",
  authDomain: "attendance-checker-46040.firebaseapp.com",
  projectId: "attendance-checker-46040",
  storageBucket: "attendance-checker-46040.firebasestorage.app",
  messagingSenderId: "404959825438",
  appId: "1:404959825438:web:c94d6ab477d73cdb43e80f",
  measurementId: "G-7J57TDVPBE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export default app;