import { signInWithGoogle } from "../../firebase/providers";
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
