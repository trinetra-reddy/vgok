import { useAuth } from "@/context/AuthContext";

export const useUserToken = () => {
  const { user } = useAuth();
  const token = user?.token || null;

  return token;
};
