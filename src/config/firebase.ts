import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import {
    ReCaptchaV3Provider,
    initializeAppCheck,
    setTokenAutoRefreshEnabled,
} from "firebase/app-check";

const firebaseConfig: object = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
const db: Firestore = getFirestore(app);
const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
        `${import.meta.env.VITE_RECAPCHA_SITE_KEY_DEVELOP}`
    ),
    isTokenAutoRefreshEnabled: true,
});
setTokenAutoRefreshEnabled(appCheck, true);

export { auth, googleProvider, db };
