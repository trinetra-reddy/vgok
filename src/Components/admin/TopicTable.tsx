import { ArrowDown, ArrowUp, Monitor, Pencil, Trash2 } from "lucide-react";
import { DeleteAlert } from "@/Components/common/DeleteAlert";
import CommonDialog from "@/Components/user/CommonDialog";
import { Topics } from "@/types/index";
import { useAuth } from "@/context/AuthContext";
import { useTopicMutations } from "@/hooks/useTopics";
import { Category } from "@/types/index";
interface TopicTableProps {
  data: Topics[];
  loading?: boolean;
  onRefresh: () => void;
  page?: number;
  pageSize?: number;
  totalCount?: number;
  onPageChange?: (newPage: number) => void;
  isCategoryLoading?: boolean;
  onCreate?: (data: Topics) => Promise<any>;
  onUpdate?: (id: string, data: Topics) => Promise<any>;
  onDelete?: (id: string) => Promise<any>;
  categories?: Category[];
  showActions?: boolean;
}

const TopicTable = ({
  data,
  loading,
  onRefresh,
  page = 1,
  pageSize = 10,
  totalCount = 0,
  onPageChange,
  showActions = false,
  categories = []
}: TopicTableProps) => {

  const { user } = useAuth();
  const role = user?.role || user?.user_metadata?.role;

  const { createTopic: create, updateTopic: update, deleteTopic: remove } = useTopicMutations();

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full text-sm">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="text-left px-6 py-3">TITLE</th>
            <th className="text-left px-6 py-3">CATEGORY - FORUM</th>
            <th className="text-left px-6 py-3">UP - DOWN VOTE</th>
            <th className="text-left px-6 py-3">STATUS</th>
            <th className="text-left px-6 py-3 text-right">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">
                Loading topics...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">
                No topics found.
              </td>
            </tr>
          ) : (
            data.map((topic: Topics) => (
              <tr key={topic.id} className="border-t">
                <td className="px-6 py-4">{topic.title}</td>
                <td className="px-6 py-4">
                  <div>{topic.category_name}</div> 
                  <div><small> {topic.forum_name} </small></div>
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <span className="text-green-500 flex items-center gap-1">
                    <ArrowUp size={12} /> {topic.upvotes || 0}
                  </span>
                  <span className="text-red-500 flex items-center gap-1">
                    <ArrowDown size={12} /> {topic.downvotes || 0}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      topic.status === "approved"
                        ? "bg-green-100 text-green-600"
                        : topic.status === "rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {topic.status || "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <CommonDialog
                    formData={topic}
                    categories={categories}
                    onCreateOrUpdate={onRefresh}
                    type="view"
                    trigger={
                      <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm">
                        <Monitor size={16} /> Detail
                      </button>
                    }
                  />

                  {showActions && (
                    <>
                      <CommonDialog
                        formData={topic}
                        categories={categories}
                        onCreateOrUpdate={onRefresh}
                        type="edit"
                        trigger={
                          <button className="flex items-center gap-2 border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm">
                            <Pencil size={16} /> Edit
                          </button>
                        }
                        onCreate={(data) => create(data).then(onRefresh)}
                        onUpdate={(id, data) => update({ id, data }).then(onRefresh)}
                      />

                      {(role === "admin" || role === "superadmin" || showActions) && (
                        <DeleteAlert
                          title="Delete Topic?"
                          content="This topic will be permanently removed."
                          confirmLabel="Remove"
                          onConfirm={() => remove(topic.id)}
                          onSuccess={onRefresh}
                          trigger={
                            <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm">
                              <Trash2 size={16} /> Delete
                            </button>
                          }
                        />
                      )}
                    </>
                  )}

                  {(role === "admin" || role === "superadmin") && (
                    <>
                      <DeleteAlert
                        title="Approve Topic?"
                        content="Are you sure you want to approve this topic?"
                        confirmLabel="Approve"
                        onConfirm={() =>
                          update({ id: topic.id, data: { ...topic, status: "approved" } })
                        }
                        onSuccess={onRefresh}
                        trigger={
                          <button
                            className="flex items-center gap-2 border border-green-600 text-green-600 px-3 py-1 rounded hover:bg-green-50 text-sm disabled:opacity-50"
                            disabled={topic.status === "approved"}
                            title={topic.status === "approved" ? "Already approved" : ""}
                          >
                            Approve
                          </button>
                        }
                      />

                      <DeleteAlert
                        title="Reject Topic?"
                        content="Are you sure you want to reject this topic?"
                        confirmLabel="Reject"
                        onConfirm={() =>
                          update({ id: topic.id, data: { ...topic, status: "rejected" } })
                        }
                        onSuccess={onRefresh}
                        trigger={
                          <button
                            className="flex items-center gap-2 border border-red-600 text-red-600 px-3 py-1 rounded hover:bg-red-50 text-sm disabled:opacity-50"
                            disabled={topic.status === "rejected"}
                            title={topic.status === "rejected" ? "Already rejected" : ""}
                          >
                            Reject
                          </button>
                        }
                      />
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-2 p-4">
          <button
            className="text-sm px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => onPageChange?.(page - 1)}
            disabled={page <= 1}
          >
            Previous
          </button>
          <span className="text-sm">
            Page {page} of {totalPages}
          </span>
          <button
            className="text-sm px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => onPageChange?.(page + 1)}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TopicTable;
