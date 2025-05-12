import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import PageHeader from "@/global/PageHeader";
import { CreateOrEditForumModal } from "@/Components/admin/CreateForumModal";
import { getAllForums, deleteForum } from "@/services/forumService";
import { toast } from "sonner";
import { DeleteAlert } from "@/Components/common/DeleteAlert";

const ForumPage = () => {
  const [forums, setForums] = useState([]);
  const [filteredForums, setFilteredForums] = useState([]);

  const fetchForums = async () => {
    try {
      const data = await getAllForums();
      setForums(data);
      setFilteredForums(data);
    } catch (err) {
      toast.error("Failed to load forums");
    }
  };

  useEffect(() => {
    fetchForums();
  }, []);

  const handleSearch = (query: string) => {
    const q = query.toLowerCase();
    const results = forums.filter(
      (forum: any) =>
        forum?.title?.toLowerCase()?.includes(q) ||
        forum?.content?.toLowerCase()?.includes(q)
    );
    setFilteredForums(results);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="All Forums"
        searchPlaceholder="Search by forum"
        onSearch={handleSearch}
        createButton={<CreateOrEditForumModal onCreateOrUpdate={fetchForums} />}
      />

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm table-auto">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="text-left px-6 py-3 w-1/4">TITLE</th>
              <th className="text-left px-6 py-3 w-auto">DESCRIPTION</th>
              <th className="text-left px-6 py-3 whitespace-nowrap w-1/4">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredForums.length > 0 ? (
              filteredForums.map((forum: any, idx: number) => (
                <tr key={idx} className="border-t">
                  <td className="px-6 py-4 align-top">{forum.title}</td>
                  <td className="px-6 py-4 align-top">{forum.content}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-2">
                      <CreateOrEditForumModal
                        forum={forum}
                        onCreateOrUpdate={fetchForums}
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
                        onConfirm={() => deleteForum(forum.id)}
                        onSuccess={() => {
                          fetchForums();
                          toast.success(`"${forum.title}" has been removed.`);
                        }}
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
                <td colSpan={3} className="text-center text-gray-500 px-6 py-6">
                  No forums found.
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
