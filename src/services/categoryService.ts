import { fetchWithAuth } from "./fetchWithAuth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface CategoryData {
  title: string;
  description?: string;
  forumId: string;
}

export const createCategory = async (data: CategoryData, token: string) => {
  return fetchWithAuth(`${BASE_URL}/categories/create`, "POST", token, data);
};

export const updateCategory = async (id: string, data: CategoryData, token: string) => {
  return fetchWithAuth(`${BASE_URL}/categories/update/${id}`, "PUT", token, data);
};

export const deleteCategory = async (id: string, token: string) => {
  return fetchWithAuth(`${BASE_URL}/categories/delete/${id}`, "DELETE", token);
};

export const getAllCategories = async (
  token: string,
  limit: number = 10,
  offset: number = 0
) => {
  const url = `${BASE_URL}/categories?limit=${limit}&offset=${offset}`;
  return fetchWithAuth(url, "GET", token);
};
