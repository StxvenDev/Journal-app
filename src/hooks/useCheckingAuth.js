import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"
import { startLoadingNotes } from "../store/journal/thunks"

export const useCheckingAuth = () => {
  const {status} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if(!user) return dispatch(logout());
      const {displayName, photoURL, email, uid} = user;
      dispatch(login({displayName, photoURL, email, uid}));
      dispatch(startLoadingNotes());
    });
  },[])
  return {
    status
  }
}
