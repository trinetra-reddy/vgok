import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createTopic, deleteTopic, getAllTopics, updateTopic } from "@/services/topicService";
import { useUserToken } from "@/hooks/useUserToken";

export const useTopics = (status?: string, limit = 10, offset = 0) => {
  const token = useUserToken();

  return useQuery({
    queryKey: ["topics", status, limit, offset],
    queryFn: () => getAllTopics(token || "", status),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });
};

export const useTopicMutations = () => {
  const token = useUserToken();
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: (data: any) => createTopic(data, token || ""),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["topics"] }),
  });

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => updateTopic(id, data, token || ""),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["topics"] }),
  });

  const remove = useMutation({
    mutationFn: (id: string) => deleteTopic(id, token || ""),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["topics"] }),
  });

  return {
    createTopic: create.mutateAsync,
    updateTopic: update.mutateAsync,
    deleteTopic: remove.mutateAsync,
    isCreating: create.isPending,
    isUpdating: update.isPending,
    isDeleting: remove.isPending,
  };
};
