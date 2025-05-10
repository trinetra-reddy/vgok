import { Search, Plus, Monitor, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
    return (
        <div className="space-y-6 ">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search by forum"
                        className="px-4 py-2 outline-none"
                    />
                    <button className="bg-blue-950 px-3 py-3 text-white">
                        <Search size={16} />
                    </button>
                </div>

                <Link  to={"/user/dashboard/createTopic"} className="border border-[#4269c2] text-[#4269c2] px-4 py-2 rounded hover:bg-blue-950 hover:text-white transition-all ml-auto flex items-center gap-2">
                    <Plus size={16} /> Create New
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow">
                <table className="w-full text-sm">
                    <thead className="bg-blue-950 text-white">
                        <tr>
                            <th className="text-left px-6 py-3">TITLE</th>
                            <th className="text-left px-6 py-3">DESCRIPTION</th>
                            <th className="text-left px-6 py-3">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="px-6 py-4">Crypto Topic</td>
                            <td className="px-6 py-4 flex-1">BTC</td>
                            <td className="px-6 py-4 flex gap-2">
                                {/* Detail */}
                                <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm">
                                    <Monitor size={16} /> Detail
                                </button>

                                {/* Edit */}
                                <button className="flex items-center gap-2 border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm">
                                    <Pencil size={16} /> Edit
                                </button>

                                {/* Delete */}
                                <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm">
                                    <Trash2 size={16} /> Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoriesPage;