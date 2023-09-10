// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { setDoc, doc, serverTimestamp, getDoc, collection, getDocs, addDoc } from "firebase/firestore";

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

export const addNewUser = async (userImp) => {
    try {
        const { uid, email, displayName, photoURL, emailVerified, phoneNumber, } = userImp;
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

export const getUserData = async (userImp) => {
    try {
        const { uid, } = userImp;
        const userDoc = doc(db, "users", uid);

        let docSnap = await getDoc(userDoc);

        if (!docSnap.exists()) {
            await addNewUser(userImp);
            docSnap = await getDoc(userDoc);
        }
        return docSnap.data();

    } catch (error) {
        console.error(error);
    }
}

export const signUserInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const credential = await signInWithPopup(auth, provider);
        return credential.user;
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

export const signUserInWithEmail = async (email, password,) => {
    try {
        const credential =
            await signInWithEmailAndPassword(auth, email, password)
        return credential.user;

    } catch (error) {
        const errorCode = error.code;
        // const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found')
            throw Error('user not found try a diffrent email or sign up')
        if (errorCode === 'auth/wrong-password')
            throw Error('wrong password')
        else
            throw Error(errorCode);
    }
}

export const getRoutines = async (uid,) => {
    const colRef = collection(db, `users/${uid}/routines`);
    const { docs } = await getDocs(colRef);
    return docs.map(doc => ({
        ...doc.data(),
        routineId: doc.id,
    }))
}

export const addRoutineToFirebase = async (uid, routine,) => {
    try {
        const colRef = collection(db, `users/${uid}/routines`);
        const { id: routineId } = await addDoc(colRef, routine);
        return routineId;
    } catch (error) {
        console.error(error);
    }
}