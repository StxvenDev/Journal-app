import { loginWithEmailAndPassword, logoutFirebase, signInWithGoogle, signWithEmailAndPassword } from "../../firebase/providers";
import { chekingCredentials, login, logout } from "./authSlice"

export const chekingAuthentication = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
    }
}

export const startCheckingGoogle = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const result = await signInWithGoogle();
        console.log(result);
        if(!result.ok) return dispatch(logout(result.errorMessage));        
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const {ok,uid, photoURL, errorMessage} = await signWithEmailAndPassword({email, password, displayName});
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(login({uid,displayName,email,photoURL}));
    }
}

export const startLoginWithEmailAndPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const {displayName, photoURL, uid, ok, errorMessage} = await loginWithEmailAndPassword({email,password});
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(login({displayName,photoURL,email,uid}));
    }
}

export const startLogoutFirebase = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}