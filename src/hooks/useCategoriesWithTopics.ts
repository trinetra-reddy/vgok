import { getCategoryWithTopics } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export const useCategoryWithTopics = (token: string | null | undefined,
  limit = 10,
  offset = 0,
) => {
  const forumsQuery = useQuery({
    queryKey: ["categories-with-topics", limit, offset],
    queryFn: () =>
      getCategoryWithTopics(token || "", limit, offset),
    enabled: !!token,
    // staleTime: 1000 * 60 * 5, // 5 minutes
    select: (res) => res,
  });
  return {
    categories: forumsQuery.data || [],
    isLoading: forumsQuery.isLoading,
    error: forumsQuery.error,
  };
};
