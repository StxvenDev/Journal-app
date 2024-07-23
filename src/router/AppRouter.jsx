import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { JournalRoutes } from "../journal/router/JournalRoutes"
import { useCheckingAuth } from "../hooks/useCheckingAuth"
import { Checking } from "../ui"


export const AppRouter = () => {
  const {status} = useCheckingAuth();
  if(status === 'Checking') {
    return (<Checking />)
  }
  return (
    <Routes>
      {
        (status === 'authenticated')
        ? <Route path="/*" element = {<JournalRoutes />} />
        : <Route path="/auth/*" element = {<AuthRouter />} />
      }

      <Route path="/*" element = {<Navigate to = 'auth/login' />} />

        {/* login y register */}
        {/* // <Route path="/auth/*" element = {<AuthRouter />} /> */}
        {/* Journal */}
        {/* <Route path="/*" element = {<JournalRoutes />} /> */}
    </Routes>
  )
}
