import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllForums } from "@/services/forumService";

export const useLazyForums = (token: string | null | undefined, limit = 100, offset = 0) => {
  const queryClient = useQueryClient();

  const {
    data = [],
    isLoading,
    error,
    refetch,
    isFetched,
  } = useQuery({
    queryKey: ["forums", limit, offset],
    queryFn: () => getAllForums(token || "", limit, offset).then((res) => res.data || []),
    enabled: false, // lazy
    staleTime: 1000 * 60 * 5,
  });

  return {
    forums: data,
    isLoading,
    error,
    refetch,
    isFetched,
    invalidate: () => queryClient.invalidateQueries({ queryKey: ["forums"] }),
  };
};
