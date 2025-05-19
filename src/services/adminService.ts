// services/adminService.ts
import { fetchWithAuth } from "./fetchWithAuth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllUsers = async (token: string) => {
  return fetchWithAuth(`${BASE_URL}/admin/users`, "GET", token);
};

export const updateUserRole = async (id: string, role: string, token: string) => {
  return fetchWithAuth(`${BASE_URL}/admin/users/${id}/role`, "PUT", token, { role });
};
