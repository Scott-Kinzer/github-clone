import { initializeApp } from "firebase/app";
import {TOKENS} from '../tokens/tokens';

const firebaseConfig = {
  apiKey: TOKENS.REACT_APP_FIREBASE_API_KEY,
  authDomain: TOKENS.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: TOKENS.REACT_APP_PROJECT_ID,
  storageBucket: TOKENS.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: TOKENS.REACT_APP_MESSAGING_SENDER_ID,
  appId: TOKENS.REACT_APP_ID,
  measurementId: TOKENS.REACT_APP_MEASURMENT_ID
};


export const app = initializeApp(firebaseConfig);
