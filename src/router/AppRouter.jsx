import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { JournalRoutes } from "../journal/router/JournalRoutes"
import { useSelector } from "react-redux"
import { Checking } from "../ui"

export const AppRouter = () => {
  const {status} = useSelector(state => state.auth);
  if(status === 'Checking') {
    return <Checking />
  }
  return (
    <Routes>
        {/* login y register */}
        <Route path="/auth/*" element = {<AuthRouter />} />
        {/* Journal */}
        <Route path="/*" element = {<JournalRoutes />} />
    </Routes>
  )
}
