// // components/auth/PrivateRoute.tsx
// import { useAuth } from "@/context/AuthContext";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//   const { user } = useAuth();

//   if (!user?.id) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default PrivateRoute;

// components/auth/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface PrivateRouteProps {
  allowedRoles?: string[]; // e.g., ["admin"] or ["user"]
  redirectTo?: string;
}

const PrivateRoute = ({ allowedRoles, redirectTo = "/login" }: PrivateRouteProps) => {
  const { user } = useAuth();

  if (!user?.token) {
    // Not logged in
    return <Navigate to={redirectTo} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role || "")) {
    // Logged in but role is not allowed
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
