import { ArrowDown, ArrowUp, Monitor, Pencil, Trash2 } from "lucide-react";
import { DeleteAlert } from "@/Components/common/DeleteAlert";
import CommonDialog from "@/Components/user/CommonDialog";
import { Topics } from "@/pages/user/AllTopics";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useTopicMutations } from "@/hooks/useTopics";
import { useState } from "react";

interface TopicTableProps {
  data: Topics[];
  loading?: boolean;
  onRefresh: () => void;
  page?: number;
  pageSize?: number;
  totalCount?: number;
  onPageChange?: (newPage: number) => void;
}

const TopicTable = ({ data, loading, onRefresh, page = 1, pageSize = 10, totalCount = 0, onPageChange }: TopicTableProps) => {
  const { user } = useAuth();
  const role = user?.user_metadata?.role;
  const {
    createTopic: create,
    updateTopic: update,
    deleteTopic: remove,
    isCreating,
    isUpdating,
    isDeleting
  } = useTopicMutations();

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full text-sm">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="text-left px-6 py-3">TITLE</th>
            <th className="text-left px-6 py-3">FORUM</th>
            <th className="text-left px-6 py-3">UP - DOWN VOTE</th>
            <th className="text-left px-6 py-3">STATUS</th>
            <th className="text-left px-6 py-3">ACTION</th>
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
                <td className="px-6 py-4">{topic.content}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <span className="text-green-500 flex items-center gap-1">
                    <ArrowUp size={12} /> {topic.upvotes || 0}
                  </span>
                  <span className="text-red-500 flex items-center gap-1">
                    <ArrowDown size={12} /> {topic.downvotes || 0}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    topic.status === "approved"
                      ? "bg-green-100 text-green-600"
                      : topic.status === "rejected"
                      ? "bg-red-100 text-red-600"
                      : "bg-orange-100 text-orange-600"
                  }`}>
                    {topic.status || "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <CommonDialog
                    formData={topic}
                    onCreateOrUpdate={onRefresh}
                    type="view"
                    trigger={<button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm"><Monitor size={16} /> Detail</button>}
                    onCreate={(data) => create(data).then(onRefresh)}
                    onUpdate={(id, data) => update({ id, data }).then(onRefresh)}
                  />

                  <CommonDialog
                    formData={topic}
                    onCreateOrUpdate={onRefresh}
                    type="edit"
                    trigger={<button className="flex items-center gap-2 border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm"><Pencil size={16} /> Edit</button>}
                    onCreate={(data) => create(data).then(onRefresh)}
                    onUpdate={(id, data) => update({ id, data }).then(onRefresh)}
                  />

                  {(role === "admin" || role === "superadmin") && (
                    <DeleteAlert
                      title="Approve Topic?"
                      content="Are you sure you want to approve this topic?"
                      confirmLabel="Approve"
                      onConfirm={() => update({ id: topic.id, data: { ...topic, status: "approved" } })}
                      onSuccess={onRefresh}
                      trigger={<button className="flex items-center gap-2 border border-green-600 text-green-600 px-3 py-1 rounded hover:bg-green-50 text-sm disabled:opacity-50" disabled={topic.status === "approved"} title={topic.status === "approved" ? "Already approved" : ""}>Approve</button>}
                    />
                  )}

                  {(role === "admin" || role === "superadmin") && (
                    <DeleteAlert
                      title="Reject Topic?"
                      content="Are you sure you want to reject this topic?"
                      confirmLabel="Reject"
                      onConfirm={() => update({ id: topic.id, data: { ...topic, status: "rejected" } })}
                      onSuccess={onRefresh}
                      trigger={<button className="flex items-center gap-2 border border-red-600 text-red-600 px-3 py-1 rounded hover:bg-red-50 text-sm disabled:opacity-50" disabled={topic.status === "rejected"} title={topic.status === "rejected" ? "Already rejected" : ""}>Reject</button>}
                    />
                  )}

                  <DeleteAlert
                    title="Delete Topic?"
                    content="This topic will be permanently removed."
                    confirmLabel="Remove"
                    onConfirm={() => remove(topic.id).then(onRefresh)}
                    onSuccess={onRefresh}
                    trigger={<button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm"><Trash2 size={16} /> Delete</button>}
                  />
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
          <span className="text-sm">Page {page} of {totalPages}</span>
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
