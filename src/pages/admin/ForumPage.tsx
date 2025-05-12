import PageHeader from "@/global/PageHeader";
import { Monitor, Pencil, Trash2 } from "lucide-react";


const ForumPage = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="All Forums"
        searchPlaceholder="Search by forum"
        createLabel="Create New"
        createLink="/user/dashboard/createTopic"
        onSearch={(val) => console.log("Searching for:", val)}
      />

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm table-fixed">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="text-left px-6 py-3 w-1/4">TITLE</th>
              <th className="text-left px-6 py-3 w-auto">DESCRIPTION</th>
              <th className="text-left px-6 py-3 w-1 whitespace-nowrap">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-6 py-4">Crypto Topic</td>
              <td className="px-6 py-4 truncate">BTC</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm">
                    <Monitor size={16} /> Detail
                  </button>
                  <button className="flex items-center gap-2 border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm">
                    <Pencil size={16} /> Edit
                  </button>
                  <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm">
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForumPage;
