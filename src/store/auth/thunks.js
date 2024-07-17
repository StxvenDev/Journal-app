import { chekingCredentials } from "./authSlice"

export const chekingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
    }
}

export const startCheckingGoogle = () => {
    return async (dispatch) => {
        dispatch(chekingCredentials());
    }
}
