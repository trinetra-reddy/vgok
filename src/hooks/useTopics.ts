import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createTopic, deleteTopic, getAllTopics, updateTopic } from "@/services/topicService";
import { useUserToken } from "@/hooks/useUserToken";
import { toast } from "sonner";

export const useTopics = (status?: string, limit = 10, offset = 0) => {
  const token = useUserToken();

  return useQuery({
    queryKey: ["topics", status, limit, offset],
    queryFn: () => getAllTopics(token || "", status),
    enabled: !!token
  });
};

export const useTopicMutations = () => {
  const token = useUserToken();
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: (data: any) => createTopic(data, token || ""),
    onSuccess: () => {
      toast.success("Topic created successfully");
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
    onError: () => {
      toast.error("Failed to create topic");
    },
  });

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => updateTopic(id, data, token || ""),
    onSuccess: () => {
      toast.success("Topic updated successfully");
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
    onError: () => {
      toast.error("Failed to update topic");
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => deleteTopic(id, token || ""),
    onSuccess: () => {
      toast.success("Topic deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
    onError: () => {
      toast.error("Failed to delete topic");
    },
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
