import { SidebarNav } from "@/admin/components/SidebarNav";
import { Routes, Route, Navigate } from "react-router-dom"
import { Suspense, lazy } from "react"
import DashboardWrapper from "./DashboardWrapper";

const SignupPage = lazy(() => import("@/pages/user/SignupPage"));
const LoginPage = lazy(() => import("@/pages/user/LoginPage"));
const Dashboard = lazy(() => import("@/pages/user/Dashboard"));
const ProfilePage = lazy(() => import("@/pages/user/ProfilePage"));
const MyTopicsPage = lazy(() => import("@/pages/user/MyTopicsPage"));
const CreateTopicPage = lazy(() => import("@/pages/user/CreateTopicPage"));

export const UserLandingPage = () => {
  return (
    <div className="flex">
      <SidebarNav />
      <main className="flex-1 p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardWrapper></DashboardWrapper>}>
            <Route path='' element={<Dashboard></Dashboard>} />
            <Route path="profile" element={<ProfilePage></ProfilePage>} />
            <Route path="mytopics" element={<MyTopicsPage></MyTopicsPage>} />
            <Route path="createTopic" element={<CreateTopicPage></CreateTopicPage>}/>
            </Route>
            <Route path="" element={<Navigate to="signup" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}