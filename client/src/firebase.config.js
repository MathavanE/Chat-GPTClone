// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl06RNXVdNiow8J0ACnXVmTCBoVMCppIc",
  authDomain: "chat-gpt-clone-8325c.firebaseapp.com",
  projectId: "chat-gpt-clone-8325c",
  storageBucket: "chat-gpt-clone-8325c.appspot.com",
  messagingSenderId: "254192523882",
  appId: "1:254192523882:web:b284260d2dc66a21734813",
  measurementId: "G-5WJ1KDTW4G"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
