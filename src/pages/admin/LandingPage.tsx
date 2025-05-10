import { SidebarNav } from "@/admin/components/SidebarNav";
import { Routes, Route, Navigate } from "react-router-dom"
import { Suspense, lazy } from "react"

const ForumPage = lazy(() => import("@/pages/admin/ForumPage"))
const CategoriesPage = lazy(() => import("@/pages/admin/CategoriesPage"))
// const AllTopicsPage = lazy(() => import("@/pages/admin/topics/AllTopicsPage"))
// const PendingTopicsPage = lazy(() => import("@/pages/admin/topics/PendingTopicsPage"))
// const ApprovedTopicsPage = lazy(() => import("@/pages/admin/topics/ApprovedTopicsPage"))
// const RejectedTopicsPage = lazy(() => import("@/pages/admin/topics/RejectedTopicsPage"))

export const LandingPage = () => {
  return (
    <div className="flex">
      <SidebarNav />
      <main className="flex-1 p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
          <Route path="forum" element={<ForumPage />} />
           <Route path="categories" element={<CategoriesPage />} />
            {/*<Route path="topics/all" element={<AllTopicsPage />} />
            <Route path="topics/pending" element={<PendingTopicsPage />} />
            <Route path="topics/approved" element={<ApprovedTopicsPage />} />
            <Route path="topics/rejected" element={<RejectedTopicsPage />} /> */}
            <Route path="" element={<Navigate to="forum" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}