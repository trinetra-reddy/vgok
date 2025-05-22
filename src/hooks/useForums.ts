import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllForums, deleteForum, forumWithStats } from "@/services/forumService";

interface UseForumsOptions {
  token: string | null | undefined;
  limit?: number;
  offset?: number;
  withStats?:boolean
}

export const useForums = ({
  token,
  limit = 10,
  offset = 0,
  withStats = false,
}: UseForumsOptions) => {
  const queryClient = useQueryClient();

  const forumsQuery = useQuery({
    queryKey: ["forums", withStats, limit, offset],
    queryFn: () =>
      withStats
        ? forumWithStats(token || "", limit, offset)
        : getAllForums(token || "", limit, offset),
    enabled: !!token,
    // staleTime: 1000 * 60 * 5, // 5 minutes
    select: (res) => res,
  });

  const deleteForumMutation = useMutation({
    mutationFn: (id: string) => {
      if (!token) throw new Error("Missing token");
      return deleteForum(id, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forums"] });
    },
  });

  return {
    forums: forumsQuery.data || [],
    isLoading: forumsQuery.isLoading,
    error: forumsQuery.error,
    refetchForums: forumsQuery.refetch,
    deleteForum: deleteForumMutation.mutateAsync,
    isDeleting: deleteForumMutation.isPending,
  };
};
