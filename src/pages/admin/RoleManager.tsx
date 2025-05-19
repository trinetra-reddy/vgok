import { useMemo, useState } from "react";
import PageHeader from "@/global/PageHeader";
import { Button } from "@/Components/ui/button";
// import { toast } from "sonner";
import { useAdminUsers } from "@/hooks/useAdminUsers";
import { useAuth } from "@/context/AuthContext";

const RoleManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const { user } = useAuth();

  const {
    users,
    isLoading,
    mutate: updateRole,
  } = useAdminUsers(user?.token);
// TODO: holding it as supabase is not allowing the authenticated user to fetch users. will do it later
  const filteredUsers = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return users.filter((user: any) =>
      (filter === "all" || user.role === filter) &&
      (user.email?.toLowerCase().includes(q) || user.role?.toLowerCase().includes(q))
    );
  }, [users, filter, searchTerm]);

  const roleBadge = (role: string) => {
    const color = {
      admin: "bg-green-100 text-green-700",
      superadmin: "bg-purple-100 text-purple-700",
      user: "bg-gray-100 text-gray-700",
    }[role] || "bg-gray-100 text-gray-700";

    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{role}</span>;
  };

  const handleRoleUpdate = (id: string, role: string) => {
    const confirmed = confirm(`Are you sure you want to set role as '${role}'?`);
    if (!confirmed || !user?.token) return;
    updateRole({ id, role, token: user.token });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Manage Roles"
        searchPlaceholder="Search by email or role"
        onSearch={(q) => setSearchTerm(q)}
        statusValue={filter}
        onStatusChange={setFilter}
        statusOptions={[
          { label: "All", value: "all" },
          { label: "Admin", value: "admin" },
          { label: "Super Admin", value: "superadmin" },
          { label: "User", value: "user" },
        ]}
      />

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-sm">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="text-left px-6 py-3">EMAIL</th>
              <th className="text-left px-6 py-3">ROLE</th>
              <th className="text-left px-6 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-500">
                  Loading users...
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user: any) => (
                <tr key={user.id} className="border-t">
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{roleBadge(user.role)}</td>
                  <td className="px-6 py-4 flex gap-2 flex-wrap">
                    <Button
                      disabled={user.role === "admin" || user.role === "superadmin"}
                      onClick={() => handleRoleUpdate(user.id, "admin")}
                      variant="outline"
                      className="text-green-700 border-green-600 hover:bg-green-50"
                    >
                      Promote to Admin
                    </Button>
                    <Button
                      disabled={user.role === "user"}
                      onClick={() => handleRoleUpdate(user.id, "user")}
                      variant="outline"
                      className="text-red-700 border-red-600 hover:bg-red-50"
                    >
                      Demote to User
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleManager;
