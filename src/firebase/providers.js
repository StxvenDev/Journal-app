import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
            errorMessage : error.Message
        }
    }
}