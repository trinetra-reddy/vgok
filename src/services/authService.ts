import { fetchWithAuth } from "./fetchWithAuth";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signUp = async (data: { email: string; password: string }) => {
  return fetchWithAuth(`${BASE_URL}/auth/signup`, "POST",'', data);
};
