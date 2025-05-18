import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllForums, deleteForum } from "@/services/forumService";

interface UseForumsOptions {
  token: string | null | undefined;
  limit?: number;
  offset?: number;
}

export const useForums = ({
  token,
  limit = 10,
  offset = 0,
}: UseForumsOptions) => {
  const queryClient = useQueryClient();

  const forumsQuery = useQuery({
    queryKey: ["forums", limit, offset],
    queryFn: () =>
      getAllForums(token || "", limit, offset).then((res) => res.data || []),
    enabled: !!token,
    staleTime: 1000 * 60 * 5, // 5 minutes
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
