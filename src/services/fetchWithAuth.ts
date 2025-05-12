// lib/fetchWithAuth.ts

export const fetchWithAuth = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    token: string,
    body?: any
  ) => {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  
    if (res.status === 401) {
      // Save session state & path before redirect
      localStorage.setItem("sessionExpired", "true");
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      localStorage.removeItem("vgok_user");
      window.location.href = "/login";
      throw new Error("Unauthorized");
    }
  
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "API request failed");
    }
  
    return await res.json();
  };
  