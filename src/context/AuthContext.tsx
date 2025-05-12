import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  email: string;
  token: string;
  refreshToken?: string;
  mobile?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  bio?: string;
  avatar_url?: string | null;
  role?: 'user' | 'admin' | string;
  verified?: boolean;
  level?: 'New' | 'Intermediate' | 'Expert' | string;
  reputation?: number;
  banned?: boolean;
  business_type?: string | null;
}

interface AuthContextProps {
  user: User | null;
  setAuthenticatedUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setAuthenticatedUser: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("vgok_user");
    return stored ? JSON.parse(stored) : null;
  });

  const setAuthenticatedUser = (user: User | null) => {
    if (user) {
      setUser(user);
      localStorage.setItem("vgok_user", JSON.stringify(user));
    } else {
      logout();
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("vgok_user");
    navigate("/login");
  };

  // 🔄 Automatically refresh access token using refresh token
  useEffect(() => {
    const interval = setInterval(() => {
      if (user?.refreshToken) {
        refreshAccessToken(user.refreshToken);
      }
    }, 4 * 60 * 1000); // refresh every 4 minutes

    return () => clearInterval(interval);
  }, [user]);

  const refreshAccessToken = async (refreshToken: string) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (!res.ok) throw new Error("Refresh failed");

      const data = await res.json();
      const updatedUser = { ...user, token: data.token };
      setAuthenticatedUser(updatedUser);
    } catch (err) {
      console.error("Token refresh failed:", err);
      logout();
    }
  };

  return (
    <AuthContext.Provider value={{ user, setAuthenticatedUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
