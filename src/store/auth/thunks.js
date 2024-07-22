import { signInWithGoogle, signWithEmailAndPassword } from "../../firebase/providers";
import { chekingCredentials, login, logout } from "./authSlice"

export const chekingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
    }
}

export const startCheckingGoogle = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) dispatch(logout (result.errorMessage));        
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
        const {ok,uid, photoURL, errorMessage} = await signWithEmailAndPassword({email, password});
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(login({uid,displayName,email,photoURL}));
    }
}
