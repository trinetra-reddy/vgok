import { SidebarNav } from "@/admin/components/SidebarNav";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import clsx from "clsx";

const ForumPage = lazy(() => import("@/pages/admin/ForumPage"));
const CategoriesPage = lazy(() => import("@/pages/admin/CategoriesPage"));

{/* <Route path="topics/all" element={<AllTopicsPage />} />
 <Route path="topics/pending" element={<PendingTopicsPage />} />
 <Route path="topics/approved" element={<ApprovedTopicsPage />} />
 <Route path="topics/rejected" element={<RejectedTopicsPage />} /> */}
export const LandingPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <SidebarNav collapsed={collapsed} toggleCollapsed={() => setCollapsed(!collapsed)} />

        <main
          className={clsx(
            "transition-all duration-300 p-6 bg-gray-50 flex-1"            
          )}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="forum" element={<ForumPage />} />
              <Route path="categories" element={<CategoriesPage />} />
              <Route path="" element={<Navigate to="forum" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};
