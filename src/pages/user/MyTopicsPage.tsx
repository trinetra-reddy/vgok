import { DeleteAlert } from "@/Components/common/DeleteAlert";
import CommonDialog from "@/Components/user/CommonDialog";
import { useAuth } from "@/context/AuthContext";
import PageHeader from "@/global/PageHeader";
import { useApi } from "@/hooks/UseApi";
import { createTopic, deleteTopic, updateTopic } from "@/services/userService";
import { ArrowUp, ArrowDown, Monitor, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export interface Topics {
    id: string;
    user_id?: string;
    category_id?: string | null;
    title?: string;
    content?: string | null;
    tags?: any;
    created_at?: string;
    status?: "pending" | "approved" | "rejected";
    description?: string | null;
}

const MyTopicsPage = () => {
    const { request, loading } = useApi();
    const [topics, setTopics] = useState([]);
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [status, setStatus] = useState("All");
    const { user } = useAuth();

    const topicStatusOptions = [
        { label: "All", value: "" },
        { label: "Pending", value: "pending" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" },
    ];

    useEffect(() => {
        getMyTopics();
    }, []);

    const getMyTopics = async () => {
        try {
            const res = await request({
                url: "/posts/all",
                method: "GET",
            });
            const records = res.data || [];
            setTopics(records);
            setFilteredTopics(records);
        } catch (err) {
            console.error("Failed to load topics", err);
        }
    };

    const deleteTopics = (id: string) => {
        if (!user?.token) return Promise.resolve();
        return deleteTopic(id, user?.token)
    }
    const createTopics = async (formData: Topics) => {
        if (!user?.token) return Promise.resolve();
        const payload = {
            ...formData,
            tags: [formData.tags],
            content: formData.content
        }
        try {
            await createTopic(payload, user.token);
            toast.success("Topic created successfully!");
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("Something went wrong.");
            }
        }
    }

    const updatesTopic = async (id: string, formData: Topics) => {
        if (!user?.token) return Promise.resolve();
        const payload = {
            ...formData,
            tags: [formData.tags],
            content: formData.content
        }

        try {
            await updateTopic(id, payload, user?.token);
            toast.success("Topic updated successfully.");
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("Something went wrong.");
            }
        }
    }
    const handleSearch = (query: string) => {
        const q = query.toLowerCase();
        const results = topics.filter(
            (forum: any) =>
                forum?.title?.toLowerCase()?.includes(q) ||
                forum?.content?.toLowerCase()?.includes(q)
        );
        setFilteredTopics(results);
    };

    useEffect(() => {
        handleFilter();
    }, [status])

    const handleFilter = () => {
        const results = topics.filter(
            (forum: any) =>
                forum?.status?.toLowerCase()?.includes(status)
        );
        setFilteredTopics(results);
    }

    return (
        <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <PageHeader
                    title="All Topics"
                    searchPlaceholder="Search by topic"
                    onSearch={handleSearch}

                    statusValue={status}
                    onStatusChange={setStatus}
                    onStatusClick={handleFilter}
                    statusOptions={topicStatusOptions}

                    createButton={<CommonDialog onCreateOrUpdate={getMyTopics}
                        onCreate={async (formData) => {
                            if (!user) return Promise.resolve();
                            return await createTopics(formData);
                        }}
                        onUpdate={updatesTopic}
                        type={'add'}
                    />}
                />
            </div>

            {/* Table */}
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
                        {filteredTopics.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-6 text-gray-500">
                                    {loading ? "Loading topics..." : "No topics found."}
                                </td>
                            </tr>
                        ) : (
                            filteredTopics.map((topic: any) => (
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
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${topic.status === 'approved' ? 'bg-green-100 text-green-600' :
                                            topic.status === 'rejected' ? 'bg-red-100 text-red-600' :
                                                'bg-orange-100 text-orange-600'
                                            }`}>
                                            {topic.status || "Pending"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        {/* View details */}
                                        <CommonDialog
                                            formData={topic}
                                            onCreateOrUpdate={getMyTopics}
                                            type={'view'}
                                            trigger={
                                                <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 text-sm">
                                                    <Monitor size={16} /> Detail
                                                </button>
                                            }
                                            onCreate={async (formData) => {
                                                if (!user) return Promise.resolve();
                                                return await createTopics(formData);
                                            }}
                                            onUpdate={updatesTopic}
                                        />

                                        <CommonDialog
                                            formData={topic}
                                            onCreateOrUpdate={getMyTopics}
                                            type={'edit'}
                                            trigger={
                                                <button className="flex items-center gap-2 border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm">
                                                    <Pencil size={16} /> Edit
                                                </button>
                                            }
                                            onCreate={async (formData) => {
                                                if (!user) return Promise.resolve();
                                                return await createTopics(formData);
                                            }}
                                            onUpdate={updatesTopic}
                                        />
                                        {/*  */}

                                        <DeleteAlert
                                            title="Delete Forum?"
                                            content="This forum will be permanently removed."
                                            confirmLabel="Remove"
                                            onConfirm={() => deleteTopics(topic.id)}
                                            onSuccess={() => {
                                                getMyTopics();
                                                toast.success(`"${topic.title}" has been removed.`);
                                            }}
                                            trigger={
                                                <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm">
                                                    <Trash2 size={16} /> Delete
                                                </button>
                                            }></DeleteAlert>
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