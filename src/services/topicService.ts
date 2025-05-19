import { fetchWithAuth } from "./fetchWithAuth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface TopicData {
  title?: string;
  content?: string;
  description?: string;
  tags?: string[];
  video_url?: string;
  category_id?: string;
  status?: "pending" | "approved" | "rejected";
  [key: string]: any; // to allow flexibility for form payloads
}

export const createTopic = async (data: TopicData, token: string) => {
  return fetchWithAuth(`${BASE_URL}/posts/create`, "POST", token, data);
};

export const updateTopic = async (id: string, data: TopicData, token: string) => {
  return fetchWithAuth(`${BASE_URL}/posts/update/${id}`, "PUT", token, data);
};

export const deleteTopic = async (id: string, token: string) => {
  return fetchWithAuth(`${BASE_URL}/posts/delete/${id}`, "DELETE", token);
};

export const getAllTopics = async (token: string, status?: string) => {
  let url = `${BASE_URL}/posts/all`;
  if (status) {
    url += `?status=${status}`;
  }
  return fetchWithAuth(url, "GET", token);
};
