// services/forumService.ts

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface ForumData {
  title: string;
  description: string;
}

export const createForum = async (data: ForumData) => {
  const res = await fetch(`${BASE_URL}/forum/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create forum");

  return await res.json();
};

export const updateForum = async (id: string, data: ForumData) => {
  const res = await fetch(`${BASE_URL}/forum/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update forum");

  return await res.json();
};

export const getAllForums = async () => {
  const res = await fetch(`${BASE_URL}/forum`);
  if (!res.ok) throw new Error("Failed to fetch forums");

  return await res.json();
};

export const deleteForum = async (id: string) => {
    const res = await fetch(`${BASE_URL}/forum/delete/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) throw new Error("Failed to delete forum");
  
    return await res.json();
  };