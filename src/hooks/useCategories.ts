import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllCategories, deleteCategory } from "@/services/categoryService";

interface UseCategoriesOptions {
  token: string | null | undefined;
  limit?: number;
  offset?: number;
}

export const useCategories = ({
  token,
  limit = 100,
  offset = 0,
}: UseCategoriesOptions) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["categories", limit, offset],
    queryFn: () =>
      getAllCategories(token || "", limit, offset).then((res) => res.data || []),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      if (!token) throw new Error("Token missing");
      return deleteCategory(id, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return {
    categories: query.data || [],
    isLoading: query.isLoading,
    isDeleting: deleteMutation.isPending,
    deleteCategory: deleteMutation.mutateAsync,
    refetchCategories: query.refetch,
  };
};
