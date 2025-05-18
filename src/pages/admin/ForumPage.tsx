import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import PageHeader from "@/global/PageHeader";
import { CreateOrEditForumModal } from "@/Components/admin/CreateForumModal";
import { toast } from "sonner";
import { DeleteAlert } from "@/Components/common/DeleteAlert";
import { useUserToken } from "@/hooks/useUserToken";
import { useForums } from "@/hooks/useForums";

export interface Forum {
  id: string;
  title: string;
  description: string;
  type: string | null;
  created_by: string | null;
  created_at: string;
  updated_by?: string | null;
  updated_at?: string | null;
}

const ForumPage = () => {
  const token = useUserToken();
  const {
    forums,
    isLoading: isForumLoading,
    refetchForums,
    deleteForum,
  } = useForums({ token, limit: 100 });

  const [filteredForums, setFilteredForums] = useState<Forum[]>([]);

  useEffect(() => {
    setFilteredForums(forums);
  }, [forums]);

  const handleSearch = (query: string) => {
    const q = query.toLowerCase();
    const results = forums.filter(
      (forum) =>
        forum.title?.toLowerCase().includes(q) ||
        forum.description?.toLowerCase().includes(q)
    );
    setFilteredForums(results);
  };

  const onClickDeleteForum = async (id: string, title: string) => {
    await deleteForum(id);
    toast.success(`"${title}" has been removed.`);
  };

  const formatDate = (date?: string | null) =>
    date
      ? new Date(date).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : "-";

  return (
    <div className="space-y-6">
      <PageHeader
        title="All Forums"
        searchPlaceholder="Search by forum"
        onSearch={handleSearch}
        createButton={
          <CreateOrEditForumModal onCreateOrUpdate={refetchForums} />
        }
      />

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-sm table-auto min-w-[800px]">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="text-left px-4 py-3">TITLE</th>
              <th className="text-left px-4 py-3">DESCRIPTION</th>
              <th className="text-left px-4 py-3">DATE</th>
              <th className="text-left px-4 py-3">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredForums.length > 0 ? (
              filteredForums.map((forum) => (
                <tr key={forum.id} className="border-t">
                  <td className="px-4 py-3 align-top">{forum.title}</td>
                  <td className="px-4 py-3 align-top max-w-[300px]">
                    <div className="line-clamp-2 text-sm max-w-full">
                      {(forum.description ?? "").length > 120
                        ? forum.description?.slice(0, 120) + "..."
                        : forum.description || "-"}
                    </div>
                    {(forum.description ?? "").length > 120 && (
                      <CreateOrEditForumModal
                      forum={forum}
                      viewOnly
                      trigger={
                        <button className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                          Read more
                        </button>
                      }
                    />
                    )}
                  </td>
                  <td className="px-4 py-3 align-top">
                    {formatDate(forum.updated_at || forum.created_at)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-wrap gap-2">
                      <CreateOrEditForumModal
                        forum={forum}
                        onCreateOrUpdate={refetchForums}
                        trigger={
                          <button className="flex items-center gap-2 border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm">
                            <Pencil size={16} /> Edit
                          </button>
                        }
                      />
                      <DeleteAlert
                        title="Delete Forum?"
                        content="This forum will be permanently removed."
                        confirmLabel="Remove"
                        onConfirm={() =>
                          onClickDeleteForum(forum.id, forum.title)
                        }
                        onSuccess={refetchForums}
                        trigger={
                          <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm">
                            <Trash2 size={16} /> Delete
                          </button>
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 px-6 py-6">
                  {isForumLoading ? "Loading forums..." : "No forums found."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForumPage;
