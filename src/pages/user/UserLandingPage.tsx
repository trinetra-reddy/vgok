import { Routes, Route, Navigate } from "react-router-dom"
import { Suspense, lazy } from "react"
import DashboardWrapper from "./DashboardWrapper";

const Dashboard = lazy(() => import("@/pages/user/Dashboard"));
const ProfilePage = lazy(() => import("@/pages/user/ProfilePage"));
const MyTopicsPage = lazy(() => import("@/pages/user/MyTopicsPage"));

export const UserLandingPage = () => {
  return (
    <div className="flex">
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="dashboard" element={<DashboardWrapper></DashboardWrapper>}>
              <Route path='' element={<Dashboard></Dashboard>} />
              <Route path="profile" element={<ProfilePage></ProfilePage>} />
              <Route path="mytopics" element={<MyTopicsPage></MyTopicsPage>} />
            </Route>
            <Route path="" element={<Navigate to="signup" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}