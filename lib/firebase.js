// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3JKqg9C7gvc0qXVb1t2P1aVFVFeWq1cg",
    authDomain: "game-of--life.firebaseapp.com",
    projectId: "game-of--life",
    storageBucket: "game-of--life.appspot.com",
    messagingSenderId: "316235565145",
    appId: "1:316235565145:web:f6303068b2fcb8383f8948",
    measurementId: "G-02DRHQB54Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const auth = getAuth();

export const addNewUser = async (user) => {
    console.log(user);
    try {
        const { uid, email, displayName, photoURL, emailVerified, phoneNumber, } = user;
        const userDoc = doc(db, "users", uid);
        await setDoc(userDoc, {
            uid,
            email,
            displayName,
            photoURL,
            emailVerified,
            phoneNumber,
            coins: 0,
            rate: 1,
            xp: 0,
            lastVisite: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

export const signUserInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    }
    catch (error) {
        console.error(error)
    }

}

export const signUserOut = async () => {
    try {
        await signOut(auth)
        console.log('sign out success')
    }
    catch (error) {
        console.error('sign out failed', error)
    }
}

export const signUserUpWithEmail = async (email, password, displayName) => {
    try {
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName })
        return credential.user;
    } catch (error) {
        console.error(error);
    }
}

export const signUserInWithEmail = async (email, password) => {
    try {
        // const userCredential = 
        await signInWithEmailAndPassword(auth, email, password)

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error({ errorMessage, errorCode })
    }
}