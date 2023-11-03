import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDhDg08Kq8upU0FI3seizi6FKKmQE7rtTo",
  authDomain: "fake-store-eb98c.firebaseapp.com",
  projectId: "fake-store-eb98c",
  storageBucket: "fake-store-eb98c.appspot.com",
  messagingSenderId: "424961355053",
  appId: "1:424961355053:web:b80ffacb10daebfa62f7a4"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);