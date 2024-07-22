import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
  });

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
        const {displayName, email, photoURL, uid} = result.user;
        return{
            ok:true,
            displayName,email,photoURL,uid
        }
    } catch (error) {
        console.log(error);
        return{
            ok:false,
            errorCode : error.code,
            errorMessage : error.message
        }
    }
}

export const signWithEmailAndPassword = async ({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName});
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false, 
            errorMessage : error.message
        }
    }
}