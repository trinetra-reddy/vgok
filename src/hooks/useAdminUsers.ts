// hooks/useAdminUsers.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllUsers, updateUserRole } from "@/services/adminService";
import { toast } from "sonner";

interface UpdateRoleInput {
  id: string;
  role: string;
  token: string;
}

export const useAdminUsers = (token?: string | null) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: () => getAllUsers(token || ""),
    enabled: !!token,
  });

  const mutation = useMutation({
    mutationFn: ({ id, role, token }: UpdateRoleInput) => updateUserRole(id, role, token),
    onMutate: async ({ id, role }) => {
      await queryClient.cancelQueries({ queryKey: ["admin-users"] });
      const previousData = queryClient.getQueryData<{ users: any[] }>(["admin-users"]);
      queryClient.setQueryData(["admin-users"], (old: any) => ({
        users: old.users.map((u: any) => (u.id === id ? { ...u, role } : u)),
      }));
      return { previousData };
    },
    onError: (err, _, context) => {
      toast.error("Failed to update role"+ err);
      if (context?.previousData) {
        queryClient.setQueryData(["admin-users"], context.previousData);
      }
    },
    onSuccess: () => {
      toast.success("Role updated successfully");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
  });

  return {
    users: data?.users || [],
    isLoading,
    mutate: mutation.mutate,
  };
};
