// components/auth/PrivateRoute.tsx
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (!user?.id) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
