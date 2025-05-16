// // services/forumService.ts

import { fetchWithAuth } from "./fetchWithAuth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export interface ForumData {
  title: string;
  description: string;
}
export const createForum = async (data: ForumData, token: string) => {
  return fetchWithAuth(`${BASE_URL}/forum/create`, "POST", token, data);
};

export const updateForum = async (id: string, data: ForumData, token: string) => {
  return fetchWithAuth(`${BASE_URL}/forum/update/${id}`, "PUT", token, data);
};

export const deleteForum = async (id: string, token: string) => {
  return fetchWithAuth(`${BASE_URL}/forum/delete/${id}`, "DELETE", token);
};

export const getAllForums = async (
  token: string,
  limit: number = 10,
  offset: number = 0
) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/forum?limit=${limit}&offset=${offset}`;
  return fetchWithAuth(url, "GET", token);
};
