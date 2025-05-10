import { createContext, useContext, useState } from "react";

interface User {
  id: string;
  email: string;
  token: string;
  mobile?:string;
  firstName?:string,
  lastName?: string,
  country?: string,
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
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("vgok_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("vgok_user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("vgok_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
