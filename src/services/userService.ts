
import { Topics } from "@/pages/user/MyTopicsPage";
import { fetchWithAuth } from "./fetchWithAuth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export interface ForumData {
  title: string;
  description: string;
}

export const createTopic = async (data: Topics, token: string) => {
  return fetchWithAuth(`${BASE_URL}/posts/create`, "POST", token, data);
};

export const updateTopic = async (id: string, data: Topics, token: string) => {
  return fetchWithAuth(`${BASE_URL}/posts/update/${id}`, "PUT", token, data);
};

export const deleteTopic = async (id: string, token: string) => {
  return fetchWithAuth(`${BASE_URL}/posts/delete/${id}`, "DELETE", token);
};

export const getProfile = async (token: string) => {
  return fetchWithAuth(`${BASE_URL}/profile/me`, "GET", token);
};

export const getAllTopics = async (
  token: string,
  limit: number = 10,
  offset: number = 0
) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/posts/all?limit=${limit}&offset=${offset}`;
  return fetchWithAuth(url, "GET", token);
};
