import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

type Method = "GET" | "POST" | "PUT" | "DELETE";

interface UseApiOptions<T> {
  url: string;
  method?: Method;
  body?: any;
  headers?: HeadersInit;
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

export function useApi<T = any>() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const { user } = useAuth();

  const request = async (options: UseApiOptions<T>) => {
    const {
      url,
      method = "GET",
      body,
      headers = {
        ...(user?.token && { Authorization: `Bearer ${user?.token}` }),
      },
      onSuccess,
      onError,
    } = options;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}${url}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: method === "GET" ? undefined : JSON.stringify(body),
      });

      const result = await res.json();

      if (!res.ok) {
        throw result;
      }

      setData(result);
      onSuccess?.(result);

      return result; // ✅ this allows caller to receive API response
    } catch (err) {
      setError(err);
      onError?.(err);
      throw err; // ✅ also allow caller to handle error
    } finally {
      setLoading(false);
    }
  };


  return { request, data, error, loading };
}
