import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { JournalRoutes } from "../journal/router/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        {/* login y register */}
        <Route path="/auth/*" element = {<AuthRouter />} />
        {/* Journal */}
        <Route path="/*" element = {<JournalRoutes />} />
    </Routes>
  )
}
