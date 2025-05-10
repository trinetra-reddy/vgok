import { useAuth } from "@/context/AuthContext";
import { useApi } from "@/hooks/UseApi";
import { ArrowUp, ArrowDown, Search, Plus, Monitor, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyTopicsPage = () => {
    const { request, loading, error } = useApi();
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getMyTopics();
    }, []);

    const getMyTopics = async () => {
        try {
            const res = await request({
                url: "/posts/all",
                method: "GET",
            });
            setTopics(res); // make sure your API returns an array
        } catch (err) {
            console.error("Failed to load topics", err);
        }
    };
    return (
        <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-4 items-center">
                {/* Status Filter */}
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                    <select className="px-4 py-2 outline-none">
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>
                    <button className="bg-[#4269c2] px-3 py-3 text-white">
                        <Search size={16} />
                    </button>
                </div>

                {/* Forum Search */}
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search by forum"
                        className="px-4 py-2 outline-none"
                    />
                    <button className="bg-[#4269c2] px-3 py-3 text-white">
                        <Search size={16} />
                    </button>
                </div>

                <Link
                    to={"/user/dashboard/createTopic"}
                    className="border border-[#4269c2] text-[#4269c2] px-4 py-2 rounded hover:bg-[#4269c2] hover:text-white transition-all ml-auto flex items-center gap-2"
                >
                    <Plus size={16} /> Create New
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow">
                <table className="w-full text-sm">
                    <thead className="bg-[#4269c2] text-white">
                        <tr>
                            <th className="text-left px-6 py-3">TITLE</th>
                            <th className="text-left px-6 py-3">FORUM</th>
                            <th className="text-left px-6 py-3">UP - DOWN VOTE</th>
                            <th className="text-left px-6 py-3">STATUS</th>
                            <th className="text-left px-6 py-3">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-6 text-gray-500">
                                    {loading ? "Loading topics..." : "No topics found."}
                                </td>
                            </tr>
                        ) : (
                            topics.map((topic: any) => (
                                <tr key={topic.id} className="border-t">
                                    <td className="px-6 py-4">{topic.title}</td>
                                    <td className="px-6 py-4">{topic.forum}</td>
                                    <td className="px-6 py-4 flex items-center gap-2">
                                        <span className="text-green-500 flex items-center gap-1">
                                            <ArrowUp size={12} /> {topic.upvotes || 0}
                                        </span>
                                        <span className="text-red-500 flex items-center gap-1">
                                            <ArrowDown size={12} /> {topic.downvotes || 0}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${topic.status === 'approved' ? 'bg-green-100 text-green-600' :
                                                topic.status === 'rejected' ? 'bg-red-100 text-red-600' :
                                                    'bg-orange-100 text-orange-600'
                                            }`}>
                                            {topic.status || "Pending"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm">
                                            <Monitor size={16} /> Detail
                                        </button>
                                        <button className="flex items-center gap-2 border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm">
                                            <Pencil size={16} /> Edit
                                        </button>
                                        <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm">
                                            <Trash2 size={16} /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyTopicsPage;